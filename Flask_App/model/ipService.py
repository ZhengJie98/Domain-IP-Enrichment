import base64
import hashlib
import json
import requests
import time
import csv
import datetime
import os
import pandas as pd
from dateutil import tz
import pytz
from pymongo import MongoClient
import atexit
from apscheduler.schedulers.background import BackgroundScheduler
from app import *
from werkzeug.utils import secure_filename
import bson
import config
import subprocess




ip_template = {
    
        # "ALL_COLUMNS_IN_EXCEL": "",
        "x_days_ago": "",
        "to_skip": "",
        "whois_date": "",
        "last_analysis_date": "",
        "reputation": "",
        "last_analysis_stats": "",
        "total_votes": "",
        "as_owner": "",
        "country": "",
        "asn": "",
        "added_timestamp":"",
        "processed_timestamp":"", ## leave empty until you process it from DB.
        "failure_count": 0,## if it hits a threshold then stop calling it.
        "is_priority": "", ## 1 for individual submissions or 0 for CSVs
        "source":"", ## if its CSV then put csvName, if its individual then put individual
        "has_screenshot": "",
        "has_html": "",
        "has_javascript": "",
        "files" : None ## Array of sub-docs, [{type:"", file_location:""}, {}...]
        
    }

# API_KEY = '0d9fdb6e32d74b9d12e3d894309531838c3aabe8d66b049fd3a7976fbedf2c68'  #@param  {type: "string"}
API_KEY = '207349263f9c5edd176cc079fa8000a5ab912df7d9e91154842c08031658675d'  #@param  {type: "string"}



client = MongoClient('localhost',27017)
db = client['filtered_sg_ip_list']
col = db["ip"]
    



## Saves to db and a harddisk file
def save_ipfile(file):
    print("===== save_iplist() =====:")
    now = datetime.datetime.now()
    df = pd.read_csv(file)

    ## TAKING FIRST COL TO BE IP 
    df.columns.values[0] = "ip_address"

    ## FOR HARDDISK
    dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
    filename_splitted = secure_filename(file.filename).split('.csv') 
    filename = filename_splitted[0] + '_' + str(dt_string) + ".csv"
    df.to_csv(os.path.join(app.config['UPLOAD_FOLDER'], filename))


    ## FOR DATABASE
    for k,v in ip_template.items():
        df[k] = ip_template[k]
    
    df["x_days_ago"] = X_DAYS_AGO
    df["added_timestamp"] = now
    df["is_priority"] = 0
    df["source"] = "csv"
    records_ = df.to_dict(orient = 'records') 
    result = db.ip.insert_many(records_ ) 

    return result

## Checks to_skip(), else call_ip and update db with result
def process_ip_parent():

    while config.REMAINING_LIMIT > 0 and len(list(retrieve_ips_to_process(config.REMAINING_LIMIT))) > 0:
        print("new while loop config.REMAINING_LIMIT:", config.REMAINING_LIMIT)
        cursor = retrieve_ips_to_process(config.REMAINING_LIMIT)
        
        for ip_doc in cursor:
            
            ## ip check to be here
            if to_skip(ip_doc) == 1:
                continue
  
            db_id = ip_doc['_id']
            updated_ip_doc = call_ip(ip_doc, X_DAYS_AGO)
            ## screenshot and extract html js functions here 
    
            try : 
                col.replace_one({"_id" : db_id}, updated_ip_doc)
                print("replacement successful")
            
            except Exception as e:
                print(e)
                # e

            ## COMMENT OUT FOR ACTUAL
            # break
        
        return "replacement successful"
        

def retrieve_ips_to_process(how_many_ips):
    # print("===== retrieve_ips_to_process() START =====")
    cursor = col.find(
        {"$and" : [{"processed_timestamp" : ""}, {"to_skip" : ""}, {"is_priority" : 0}]}
        ).sort("added_timestamp", pymongo.ASCENDING).limit(how_many_ips)
    
    # print("===== retrieve_ips_to_process() END =====")
    return cursor

## Calls VT API, writes response to hard disk and update failure count. RETURNS UPDATED IP DOC
def call_ip(ip_doc, x_days_ago):
    
    print("===== call_ip service start =====")

    ip = str(ip_doc["ip_address"])
    db_id = ip_doc['_id']

    print("processing ip for:", ip )

    now = datetime.datetime.now()
    dt_string = now.strftime("%d%m%Y")
    d = datetime.timedelta(days = x_days_ago)
    deducted_date = (now - d).strftime("%d%m%Y")

    if not os.path.exists("downloaded_vtresponse"):
        os.makedirs("downloaded_vtresponse")

    if not os.path.exists("downloaded_vtresponse/" + dt_string):
        os.makedirs("downloaded_vtresponse/" + dt_string)

    # print("ip_address:", ip_address)
    r = requests.get("https://www.virustotal.com/api/v3/ip_addresses/"+ ip, headers={"x-apikey":API_KEY})

    # print("r.status_code", r.status_code)
    
    ## ERROR HANDLING OF NOT 2XX
    ## QUOTE EXCEEDED, NOT UPDATING FAILURE COUNT
    if (r.status_code == 429):
        print("QUOTA EXCEEDED, STOPPED ALL CALLS")
        config.REMAINING_LIMIT = 0
        return
        
    ## TO UPDATE FAILURE COUNT += 1
    elif (r.status_code < 200 or r.status_code > 299):
        print("STATUS CODE NOT GOOD, ADDING FAILURE COUNT")
        failure_count = ip_doc["failure_count"] + 1
        col.update_one(
                    {"_id" : db_id }, 
                    { "$set" : {"failure_count" : failure_count}}  
                    )

        return
    
    r = r.json()
    # print("r:", r)
    # print("r.status_code", r.status_code)

    

    ## write to json file
    with open("downloaded_vtresponse/" + dt_string + "/" + ip + ".json", "w") as outfile:
        json_obj = json.dumps(r)
        outfile.write(json_obj)
        # print("type r after json dumps:", type(r))

    ## populate fields in JSON template
    ip_doc['processed_timestamp'] = now
    for k,v in ip_doc.items():
        # print("current (k,v)", (k,v))
        
        try:
            ip_doc[k] = r['data']['attributes'][k]
        
        except Exception as e:
            # print(e, "for", (k,v))
            e

    ## Put Screenshot here
    screenshot(ip_doc)

    # print("final ip_doc:", ip_doc)
    time.sleep(16)
    # print("16 seconds waiting done")
    config.REMAINING_LIMIT -= 1
    print("remaining config.REMAINING_LIMIT:", config.REMAINING_LIMIT)

    print("===== call_ip service end =====")

    return ip_doc

def testing():
    x = "hehe"
    return 0
    


# TO BE CHECKED ONLY WHEN PROCESSIG THE IP ITSELF
def to_skip(ip_doc):
    
    
    x_days_ago = ip_doc['x_days_ago']
    # print("global variable X_DAYS_AGO:", X_DAYS_AGO)
    ip_address = str(ip_doc["ip_address"])
    db_id = ip_doc['_id']

    now = datetime.datetime.now()
    d = datetime.timedelta(days = x_days_ago)
    deducted_date = (now - d)
    
    # cursor = col.find({"ip_address" : ip_address}, "processed_timestamp")
    cursor = col.find( {'ip_address': ip_address, 'processed_timestamp': {'$gt': deducted_date} })
    
    len_cursor = len(list(cursor.clone()))

    if len_cursor > 0:
        print("len_cursor > 0 , " + ip_address + " has been processed in past X days")

        # for each in cursor:
            # print("processed document found:", each)
        
        col.update_one(
                    {"_id" : db_id }, 
                    { "$set" : {"to_skip" : 1}}  
                    )
        return 1
    
    print(ip_address + " has NOT been processed in past X days")
    return 0
    
def custom_add():
    x = 'hehe'
    # print("os.path", os.path)
    # directory = "C:/Users/puddi/OneDrive/Documents/GitHub/IMDA/IMDA-Domain-IP-Enrichment/Flask_App/downloaded_vtresponse/15032023"
    # directory = "C:/Users/puddi/OneDrive/Documents/GitHub/IMDA/IMDA-Domain-IP-Enrichment/Flask_App/downloaded_vtresponse/16032023" 
    # directory = "C:/Users/Jun Rong/Documents/GitHub/IMDA-Domain-IP-Enrichment/Flask_App/downloaded_vtresponse/15032023"
    directory = "C:/Users/Jun Rong/Documents/GitHub/IMDA-Domain-IP-Enrichment/Flask_App/downloaded_vtresponse/16032023"
    files = os.listdir(directory)
    # print(folders)
    # os.path.join("C:/Users/puddi/OneDrive/Documents/GitHub/IMDA/IMDA-Domain-IP-Enrichment/Flask_App/downloaded_vtresponse/15032023")
    # print(os.path)
    now = datetime.datetime.now()

    for file in files:
        ip_address = file.split(".json")[0]

        f = open(directory + "/" +file)
        r = json.load(f)
        # print(data.keys())
        # for (k,v) in data:
        #     print((k,v))
        cursor = col.find({'ip_address': ip_address})

        
        for ip_doc in cursor:
            db_id = ip_doc['_id']
            ip_doc['processed_timestamp'] = now
            for k,v in ip_doc.items():
                # print("current (k,v)", (k,v))
                
                try:
                    ip_doc[k] = r['data']['attributes'][k]
                
                except Exception as e:
                    # print(e, "for", (k,v))
                    e
            print(ip_doc)
            col.replace_one({"_id" : db_id}, ip_doc)

def screenshot(ip_doc):
    
    now = datetime.datetime.now()
    dt_string = now.strftime("%Y%m%d")
    ip_address = str(ip_doc["ip_address"])
    db_id = ip_doc['_id']  

    filepath = "resources/shot-scraper/*ip*_*dt_string*.png"
    filepath = filepath.replace('*ip*', ip_address)
    filepath = filepath.replace('*dt_string*', dt_string)

    query = "shot-scraper {ip} --wait 3000 -o {filepath}".format(ip=ip_address, filepath = filepath)
    
    try:
        response = subprocess.run(query, shell=False)
    except Exception as e:
        # print(e)
        e
    
    returncode = response.returncode

    # ## store in db
    if returncode == 0:
        to_append = {"type":"screenshot", "file_location":filepath}
        ip_doc['has_screenshot'] = 1
        ip_doc['files'] = [to_append]

    # ## else indicate its not good 
    else:
        ip_doc['has_screenshot'] = 0

    print("screenshot() ip_doc:", ip_doc)
    return ip_doc
# # check if file exist in folder_to_process during x_days_ago, returns 0 or 1
# def to_skip(filename, folder_to_process, x_days_ago):
    
#     now = datetime.datetime.now()
#     dt_string = now.strftime("%d%m%Y")
#     d = datetime.timedelta(days = x_days_ago)
#     deducted_date = (now - d).strftime("%d%m%Y")
#     to_skip = 0

#     folders = os.listdir("downloaded_vtresponse")
#     folders = os.listdir(folder_to_process)
    

#     for folder in folders:

#         if to_skip == 1:
#             break

#         # target folders within X days range
#         if folder >= deducted_date:
#             files_array = os.listdir("downloaded_vtresponse/" + folder)
# #                         print(files_array)

#             for file in files_array:
#                 filename_filetype = file.rsplit('.',1)
#     #             print(filename_filedate)

#                 ## if filename == target THEN SKIP + WRITE A NOTE
#                 if filename == filename_filetype[0]:
#                     print(f"file has been processed on {folder} which is <{x_days_ago} days ago, will skip API call")
#                     to_skip = 1
#                     break
        
    
#     return to_skip



# def process_iplist(filename_to_process, columnIndex, x_days_ago):
    
#     print("======= process_iplist() START =======")
    
#     # TODO: Make generalised and incorporate timestamp in foldername
#     now = datetime.datetime.now()
#     dt_string = now.strftime("%d%m%Y")
#     d = datetime.timedelta(days = x_days_ago)
#     deducted_date = (now - d).strftime("%d%m%Y")
    
#     with open(filename_to_process + ".csv", newline='') as inputfile:

#         if not os.path.exists("downloaded_vtresponse"):
#                 os.makedirs("downloaded_vtresponse")

#         with open(filename_to_process + "_tracker_" + dt_string + ".csv", 'w', newline='') as outputfile:
            
#             ip_list = csv.reader(inputfile, delimiter=',')
#             output_writer = csv.writer(outputfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

#             counter = 0

#             for row in ip_list:
                
#                 if counter == 0:
#                     output_writer.writerow(row + ["Time Run"] + ["Processed?"])
#                     outputfile.flush()
#                     counter += 1
#                     continue

#                 print("Processing: #" + str(counter) + " - " + row[columnIndex] + " Country: " + row[1])
                
#                 # Check if IP was proceeded x_days_ago, if yes, will skip calling
#                 file_skip = to_skip(row[0], "downloaded_vtresponse", x_days_ago)
                
#                  # make dir to store API Responses
#                 if not os.path.exists("downloaded_vtresponse/" + dt_string):
#                     os.makedirs("downloaded_vtresponse/" + dt_string)

#                 #Get an IP address Report
#                 if file_skip == 0:
#                     r = requests.get("https://www.virustotal.com/api/v3/ip_addresses/"+row[0], headers={"x-apikey":API_KEY})
                    
#                     ## Check status 200 = ok, 204 = exceeded, 400 = bad request, 403 = forbidden
#                     # if status != 200, will break all processing
#                     if (r.status_code != 200):
#                         print("Status Code: ",r.status_code, "please take a look" )
#                         output_writer.writerow(row + [datetime.datetime.now()] + ["Not Processed due to status_code: " + str(r.status_code)]) 
#                         outputfile.flush()
#                         break

#                     r = r.json()
#                     # inputting target_geo_country from excel into JSON
#                     r['data']['attributes']['target_geo_country'] = row[1]
                    
#                     with open("downloaded_vtresponse/" + dt_string + "/" + row[columnIndex] + ".json", "w") as outfile:

# #                         outfile.write(r.text)
#                         json_obj = json.dumps(r)
#                         outfile.write(json_obj)

#                     output_writer.writerow(row + [datetime.datetime.now()] + ["Processed"]) 

#                     outputfile.flush()
#                     time.sleep(16)

                
#                 else:
                    
#                     output_writer.writerow(row + [datetime.datetime.now()] + ["Not Processed due to DUPLICATE in past "+ str(x_days_ago) + " days"] ) 
#                     outputfile.flush()
                    
                
#                 counter += 1
                
#     print("======= process_iplist() END ======= \n\n")
# #                 time.sleep(16)


#     #     print(os.listdir("downloaded_vtresponse/"+ folder))    

# def process_json_folder(folder_to_process,json_template):
    
#     print("======= process_json_folder() START =======")
    
#     # Get Date + Time to input later
#     now = datetime.datetime.now(pytz.timezone("Singapore"))
#     dt_string = now.strftime("%d%m%Y")

#     # Usual Folder: downloaded_vtresponse
#     combined_df = pd.DataFrame()
    
    
#     for filename in os.listdir(folder_to_process):
#         f = os.path.join(folder_to_process, filename)
    
# #         print("f:", f)
#         # check if it is a file
#         if os.path.isfile(f) and f[-5:]==".json":

#             print("\n **** Processing:",f, "****")
#             # Opening JSON file
#             f = open(f)
# #             print(f)

#             # returns JSON object as
#             # a dictionary
#             data = json.load(f)
# #             print(data)

#             # load JSON template
#             json_template = {
#                             "ip_address": "",
#                             "whois_date": "",
#                             "last_analysis_date": "",
#                             "reputation": "",
#                             "last_analysis_stats": "",
#                             "total_votes": "",
#                             "as_owner": "",
#                             "country": "",
#                             "asn": "",
#                             "image":"",
#                             "processed_date":"",
#                             "target_geo_country":""  ## input from original excel
#                             }
        
#             new_row = json_template
# #             new_row = json_template()

#             print("json_template: ", json_template)
#             print("Fresh new_row from json_template: ", new_row)

#             # populate fields in JSON template
#             for key in new_row:    
# #                 print("current key", key)

#                 try:
#                     current_value = data['data']['attributes'][key]
                    
#                     # replace epoch with legible date format for whois_date and last_analysis_date
#                     if key[-4:] == "date":
#                         to_zone = tz.gettz('Singapore')
#                         date_time = datetime.datetime.fromtimestamp( current_value )  
# #                         current_value = date_time.replace(tzinfo=to_zone)
#                         date_time.replace(tzinfo=to_zone)
#                         current_value = date_time
                        
            
#                     new_row[key] = current_value

#                 except Exception as e: 
               
#                     if key == "processed_date":
#                         new_row[key] = now
#                         print("new_row[key]:", now)
                    
#                     elif key == "ip_address":
#                         new_row[key] = data['data']['id']
                    
#                     else:
#                         print(key,"not found with exception:",e)

#             print("new_row:", new_row)
#             db.ip.insert_one(new_row)

#             df_result = pd.json_normalize(new_row)
            
#             combined_df = pd.concat([combined_df, df_result], ignore_index=True, sort=False)
    
    
# #     print(combined_df)
#     now = datetime.datetime.now(pytz.timezone("Singapore"))
#     dt_string = now.strftime("%d%m%Y")
    
#     combined_df.to_csv(folder_to_process + '/' + dt_string + '_parsed-combined.csv')
    
#     print("======= process_json_folder() END ======= \n\n")






