import base64
import hashlib
import json
import requests
import time
import csv
import datetime
from datetime import timedelta
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
import requests
from bs4 import BeautifulSoup
from pathlib import Path
import time
from pathvalidate import sanitize_filepath
import chardet
from slugify import slugify





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
        "files_log" : None, ## Array of sub-docs, [{type:"", file_location:""}, {}...]
        "duration_log" : None
        
    }

domain_template = {
    
        # "ALL_COLUMNS_IN_EXCEL": "",
        "x_days_ago": "",
        "to_skip": "",
        # "whois_date": "",
        "last_analysis_date": "",
        "reputation": "",
        "last_analysis_stats": "",
        "total_votes": "",
        # "as_owner": "",
        # "country": "",
        # "asn": "",
        "added_timestamp":"",
        "processed_timestamp":"", ## leave empty until you process it from DB.
        "failure_count": 0,## if it hits a threshold then stop calling it.
        "is_priority": "", ## 1 for individual submissions or 0 for CSVs
        "source":"", ## if its CSV then put csvName, if its individual then put individual
        "has_screenshot": "",
        "has_html": "",
        "has_javascript": "",
        "files_log" : None, ## Array of sub-docs, [{type:"", file_location:""}, {}...]
        "duration_log" : None, ## {{extracted info}, {file location }}
        # "who_is_info" : {"item_1":"1","item_2":""},
        "who_is_info" : None,
        # "who_is_info" : {},
        "dns_info" : None,
        "ssl_tls_cert_info": None,
        "historical_web_version" : None
        
    }


# API_KEY = '0d9fdb6e32d74b9d12e3d894309531838c3aabe8d66b049fd3a7976fbedf2c68'  #@param  {type: "string"}
API_KEY = '207349263f9c5edd176cc079fa8000a5ab912df7d9e91154842c08031658675d'  #@param  {type: "string"}



client = MongoClient('localhost',27017)
# db = client['filtered_sg_ip_list']
# db = client['jons_list']
# db = client['michelle_list']
# db = client['test_list']
# col = db["ip"]
db = client['test_bay']
col = db["test_col"]
    



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
    # result = db.ip.insert_many(records_ ) 
    result = col.insert_many(records_ ) 

    return result


def save_domainfile(file):
    print("===== save_domainfile() =====:")
    now = datetime.datetime.now()
    df = pd.read_csv(file)

    ## TAKING FIRST COL TO BE IP 
    df.columns.values[0] = "domain"

    ## FOR HARDDISK
    dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]    
    # filename_splitted = secure_filename(file.filename).split('.csv') 
    filename_splitted = secure_filename(file.filename).split('.csv') 
    filename = filename_splitted[0] + '_' + str(dt_string) + ".csv"
    df.to_csv(os.path.join(app.config['UPLOAD_FOLDER'], filename))


    ## FOR DATABASE
    for k,v in domain_template.items():
        # df[k] = domain_template[k]
        if type(v) == dict:
            dict_df = pd.DataFrame.from_dict([v])
            print(dict_df)
        df[k] = v
        
    
    df["x_days_ago"] = X_DAYS_AGO
    df["added_timestamp"] = now
    df["is_priority"] = 0
    df["source"] = "csv"
    records_ = df.to_dict(orient = 'records') 
    # result = db.ip.insert_many(records_ ) 
    result = col.insert_many(records_ ) 

    return result
## Checks to_skip(), else call_ip and update db with result
def process_parent():

    now = datetime.datetime.now()
    dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
    config.CURR_LOGFILE = "resources/logs/logfile_" + dt_string + ".txt"
    output_file = Path(config.CURR_LOGFILE)
    output_file.parent.mkdir(exist_ok=True, parents=True)
                

    with client.start_session() as session:
    # sessionId = session
    # refreshTimestamp = datetime.datetime.now()



        while config.REMAINING_LIMIT > 0 and len(list(retrieve_docs_to_process(config.REMAINING_LIMIT))) > 0:
            # print("new while loop config.REMAINING_LIMIT:", config.REMAINING_LIMIT)
            cursor = retrieve_docs_to_process(config.REMAINING_LIMIT)
            ## replicate to prevent closing
            cursor = [x for x in cursor]
            # print(cursor)

            
            # for ip_doc in cursor:
            for doc in cursor:

                if "ip_address" in doc:
                    is_ip = 1 # if its ip 
                    ip_or_domain = str(doc["ip_address"])
                    print("current ip in process_ip_parent:", ip_or_domain)
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("current ip in process_parent:" + ip_or_domain + '\n')

                elif "domain" in doc:
                    is_domain = 1 #if its domain
                    ip_or_domain = str(doc["domain"])
                    print("current domain in process_parent:", ip_or_domain)
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("current domain in process_parent:" + ip_or_domain + '\n')
 
                tic = time.perf_counter()

                ## refreshing to keep connection alive
                client.admin.command('refreshSessions', [session.session_id], session=session)

                
                
                ## ip check to be here
                if to_skip(doc) == 1:
                    continue
    
                db_id = doc['_id']
                # updated_doc  = call_ip_or_domain(doc, X_DAYS_AGO)
                updated_doc  = call_ip_or_domain(doc)
                # call_ip_status_code = updated_ip_doc.get("response_code")
                call_status_code = updated_doc.get("response_code") 
 

                ## breaking / continuing to quicken code
                # print("call_ip_status_code:", call_ip_status_code)
                if call_status_code == 429:
                    # print("breaking")
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("QUOTA EXCEEDED, STOPPED ALL CALLS")
                    return "QUOTA EXCEEDED, STOPPED ALL CALLS"
                elif call_status_code != None and (call_status_code < 200 or call_status_code > 299):
                    print("call_status_code:", call_status_code, "continuing to next ip_or_domain")
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("call_status_code: {call_status_code}, continuing to next IP\n".format(call_status_code=call_status_code))
                    continue

                ## screenshot and extract html js functions here
                #Continue Here Later!!
                updated_doc = screenshot(updated_doc)
                # updated_doc = grab_html_js(updated_doc) 
        
                try : 
                    col.replace_one({"_id" : db_id}, updated_doc)
                    print("replacement successful")
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("replacement successful\n")
                
                except Exception as e:
                    print(e)
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("exception: {e}\n".format(e=e))
                    # e

                ## COMMENT OUT FOR ACTUAL
                # break
                toc = time.perf_counter()
                if (toc-tic) < 15:
                    balance = 15-(toc-tic)
                    print("sleeping to makeup 15 seconds: ", balance, "seconds" )
                    time.sleep(15-(toc-tic))
                    toc = time.perf_counter()

                print(f"replacement SUCCESSFUL for {ip_or_domain}, time taken {toc-tic} seconds\n\n\n")
                with open(config.CURR_LOGFILE,'a+') as logfile:
                    logfile.write(f"replacement SUCCESSFUL for {ip_or_domain}, time taken {toc-tic} seconds\n\n\n")

            # cursor.close()

            # if call_ip_status_code == 429:

            return "Replacement SUCCESSFUL"
        
           

# def retrieve_docs_to_process(how_many_ips):
def retrieve_docs_to_process(how_many_docs):
    # print("===== retrieve_docs_to_process() START =====")

    # # auto closes after 10 minutes
    cursor = col.find(
        {"$and" : [{"processed_timestamp" : ""}, {"to_skip" : ""}, {"is_priority" : 0}]}
    ).sort("added_timestamp", pymongo.ASCENDING).limit(how_many_docs)

    # ## auto closes after 30 minutes
    # cursor = col.find(
    #     {"$and" : [{"processed_timestamp" : ""}, {"to_skip" : ""}, {"is_priority" : 0}]}, no_cursor_timeout = True
    # ).sort("added_timestamp", pymongo.ASCENDING).limit(how_many_ips)
    
    # cursor = col.find(
    #     {"$and" : [{"ip_address" : "106.11.130.221"},{"processed_timestamp" : ""}, {"to_skip" : ""}, {"is_priority" : 0}]}
    #     ).sort("added_timestamp", pymongo.ASCENDING).limit(how_many_ips)
    
    # print("===== retrieve_docs_to_process() END =====")

    return cursor

## Calls VT API, writes response to hard disk and update failure count. RETURNS UPDATED IP DOC
# def call_ip_or_domain(doc, x_days_ago):
def call_ip_or_domain(doc):

   
    print("===== call_ip_or_domain function start =====") 
    with open(config.CURR_LOGFILE,'a+') as logfile:
        logfile.write("===== call_ip_or_domain function start =====\n")
        tic = time.perf_counter()

        
        if "ip_address" in doc:
            # is_ip = 1 # if its ip 
            ip_or_domain = str(doc["ip_address"])
            vt_link = "https://www.virustotal.com/api/v3/ip_addresses/"

        elif "domain" in doc:
            # is_domain = 1 #if its domain
            ip_or_domain = str(doc["domain"])
            vt_link = "https://www.virustotal.com/api/v3/domains/"

        db_id = doc['_id']

        now = datetime.datetime.now()
        dt_string = now.strftime("%d%m%Y")
        # d = datetime.timedelta(days = x_days_ago)
        # deducted_date = (now - d).strftime("%d%m%Y")

        print("calling ip_or_domain for:", ip_or_domain , "now:", now)
        logfile.write("calling ip_or_domain for: {ip_or_domain} now: {now}\n".format(ip_or_domain=ip_or_domain,now=now))
        

        if not os.path.exists("resources/downloaded_vtresponse"):
            os.makedirs("resources/downloaded_vtresponse")

        if not os.path.exists("resources/downloaded_vtresponse/" + dt_string):
            os.makedirs("resources/downloaded_vtresponse/" + dt_string)

        # print("ip_address:", ip_address)
        # r = requests.get("https://www.virustotal.com/api/v3/ip_addresses/"+ ip, headers={"x-apikey":API_KEY})
        r = requests.get(vt_link + ip_or_domain, headers={"x-apikey":API_KEY})


        # print("r.status_code", r.status_code)
        
        ## ERROR HANDLING OF NOT 2XX
        ## QUOTE EXCEEDED, NOT UPDATING FAILURE COUNT
        if (r.status_code == 429):
            print("QUOTA EXCEEDED, STOPPED ALL CALLS")
            config.REMAINING_LIMIT = 0
            return {"response_code": r.status_code}


        ## TO UPDATE FAILURE COUNT += 1
        elif (r.status_code < 200 or r.status_code > 299):
            print("STATUS CODE NOT GOOD, ADDING FAILURE COUNT")
            failure_count = doc["failure_count"] + 1
            col.update_one(
                        {"_id" : db_id }, 
                        { "$set" : {"failure_count" : failure_count}}  
                        )

            return {"response_code": r.status_code}

        
        r = r.json()
        # print("r:", r)
        # print("r.status_code", r.status_code)

        

        ## write to json file
        with open("resources/downloaded_vtresponse/" + dt_string + "/" + ip_or_domain + ".json", "w") as outfile:
            json_obj = json.dumps(r)
            outfile.write(json_obj)
            # print("type r after json dumps:", type(r))

        ## populate fields in JSON template
        doc['processed_timestamp'] = now
        for k,v in doc.items():
            # print("current (k,v)", (k,v))
            
            try:
                doc[k] = r['data']['attributes'][k]
            
            except Exception as e:
                # print(e, "for", (k,v))
                e

        # ## Put Screenshot here
        # screenshot(doc)

        # print("final doc:", doc)
        # time.sleep(16)
        # time.sleep(5)
        # print("16 seconds waiting done")
        config.REMAINING_LIMIT -= 1
        print("remaining config.REMAINING_LIMIT:", config.REMAINING_LIMIT)
        # logfile.write("===== call_ip function end =====\n")


        toc = time.perf_counter()
        doc["duration_log"] = {}
        doc["duration_log"]["vt_call"] = toc-tic
        logfile.write("duration_log vt_call: {time}\n".format(time=toc-tic))

        print("===== call_ip_or_domain function end =====")
        logfile.write("===== call_ip_or_domain function end =====\n")

    

    return doc

def testing():
    x = "hehe"
    return 0
    


# TO BE CHECKED ONLY WHEN PROCESSIG THE IP ITSELF
def to_skip(doc):
    
    print("===== to_skip function start =====")
    with open(config.CURR_LOGFILE,'a+') as logfile:
        logfile.write("===== to_skip function start =====\n")

        x_days_ago = doc['x_days_ago']
        now = datetime.datetime.now()
        d = datetime.timedelta(days = x_days_ago)
        deducted_date = (now - d)
        # print("global variable X_DAYS_AGO:", X_DAYS_AGO)
        # ip_address = str(doc["ip_address"])
        if "ip_address" in doc:
            ip_or_domain = str(doc["ip_address"])
            cursor = col.find( {'ip_address': ip_or_domain, 'processed_timestamp': {'$gt': deducted_date} })

        elif "domain" in doc:
            ip_or_domain = str(doc["domain"])
            cursor = col.find( {'domain': ip_or_domain, 'processed_timestamp': {'$gt': deducted_date} })


        db_id = doc['_id']


        
        # cursor = col.find({"ip_address" : ip_address}, "processed_timestamp")
        # cursor = col.find( {'ip_address': ip_address, 'processed_timestamp': {'$gt': deducted_date} })
        
        len_cursor = len(list(cursor.clone()))

        if len_cursor > 0:
            print("len_cursor > 0 , " + ip_or_domain + " has been processed in past X days")
            logfile.write("len_cursor > 0 , " + ip_or_domain + " has been processed in past X days\n")


            # for each in cursor:
                # print("processed document found:", each)
            
            col.update_one(
                        {"_id" : db_id }, 
                        { "$set" : {"to_skip" : 1}}  
                        )
            print(ip_or_domain + " HAS BEEN processed in past X days")

            print("===== to_skip function end =====")
            logfile.write("===== to_skip function end =====\n")
            cursor.close()
            return 1
        
        print(ip_or_domain + " has NOT been processed in past X days")
        logfile.write(ip_or_domain + " has NOT been processed in past X days\n")
        print("===== to_skip function end =====")
        logfile.write("===== to_skip function end =====\n")
        cursor.close()
        
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


def screenshot(doc):
    
    print("===== screenshot function start =====")
    with open(config.CURR_LOGFILE,'a+') as logfile:
        logfile.write("===== screenshot function start =====\n")


        tic = time.perf_counter()
        now = datetime.datetime.now()
        dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
        
        if "ip_address" in doc:
            # is_ip = 1 # if its ip 
            ip_or_domain = str(doc["ip_address"])
        
        elif "domain" in doc:
            # is_domain = 1 #if its domain
            ip_or_domain = str(doc["domain"])
            
        db_id = doc['_id']  

        for protocol in ["http", "https"]:

            filepath = "resources/shot-scraper/*ip_or_domain*_*protocol*_*dt_string*.png"
            filepath = filepath.replace('*ip_or_domain*', ip_or_domain)
            filepath = filepath.replace('*protocol*', protocol)
            filepath = filepath.replace('*dt_string*', dt_string)

            query = "shot-scraper {protocol}://{ip_or_domain} --wait 3000 -o {filepath}".format(protocol=protocol, ip_or_domain=ip_or_domain, filepath = filepath)
            
            try:
                response = subprocess.run(query, shell=False, capture_output=True, text=True)
            except Exception as e:
                print("screenshot() exception triggered:", e)
                logfile.write("screenshot() exception triggered: {e}\n".format(e=e))

                e
            
            returncode = response.returncode

            # ## store in db
            if returncode == 0:
                doc['has_screenshot'] = 1
                to_append = {"type": protocol + "_screenshot", "stderr": response.stderr, "stdout": response.stdout, "ss_file_location":filepath}

                ## proceed to extract js 


                # ip_doc['files_log'] = [to_append]

            # ## else indicate its not good 
            else:
                if doc['has_screenshot'] != 1:
                    doc['has_screenshot'] = 0
                to_append = {"type": protocol + "_screenshot", "stderr": response.stderr, "stdout": response.stdout, "ss_file_location": None}
                # ip_doc['files'] = [{"screenshot":to_append}]
                # ip_doc['files_log'] = [{"screenshot":to_append}]
                # ip_doc['files_log'] = [to_append]

            #first iteration
            if protocol == "http":
                doc['files_log'] = [to_append]
            else:
                doc['files_log'].append(to_append)

        toc = time.perf_counter()
        doc['duration_log']['screenshot'] = toc-tic
        logfile.write("duration_log screenshot: {time}\n".format(time=toc-tic))

            # print("screenshot() ip_doc:", ip_doc)
        print("===== screenshot function end =====")
        logfile.write("===== screenshot function end =====\n")
        return doc

def grab_html_js(ip_doc):

    print("===== grab_html_js function start =====")
    with open(config.CURR_LOGFILE,'a+') as logfile:

        logfile.write("===== grab_html_js function start =====\n")
        tic = time.perf_counter()

        now = datetime.datetime.now()
        dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
        ip_address = str(ip_doc["ip_address"])
        db_id = ip_doc['_id']  


        for protocol in ["http", "https"]:
            print("current protocol:", protocol)
            logfile.write("current protocol: {protocol}\n".format(protocol=protocol))

            if protocol == "http":
                filepath = "resources/html/*ip*_http_*dt_string*.html"
                filepath = filepath.replace('*ip*', ip_address)
                filepath = filepath.replace('*dt_string*', dt_string)
                query = "curl -i http://{ip} --create-dirs -o {filepath}".format(ip=ip_address, filepath = filepath)

            elif protocol == "https":
                filepath = "resources/html/*ip*_https_*dt_string*.html"
                filepath = filepath.replace('*ip*', ip_address)
                filepath = filepath.replace('*dt_string*', dt_string)
                query = "curl -i https://{ip} --create-dirs -o {filepath}".format(ip=ip_address, filepath = filepath)

            try:
                response = subprocess.run(query, shell=False, capture_output=True, text=True)
            except Exception as e:
                print("grab_html_js() exception triggered:", e)
                logfile.write("grab_html_js() exception triggered: {e}\n".format(e=e))
                e

            returncode = response.returncode
            print("returncode:", returncode)
            logfile.write("returncode: {returncode}\n".format(returncode=returncode))

            if returncode == 0:
                ip_doc['has_html'] = 1
                to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location":filepath}


                ## Grab JS HERE
                web_url = protocol + "://" + ip_address
                # headers = {
                #             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0",
                #             "Accept-Encoding": "*",
                #             "Connection": "keep-alive"
                #         }
                # html = requests.get(web_url, headers=headers).content

                # html = requests.get(web_url).content
                try:
                    print("starting html request.get")
                    logfile.write('starting html request.get\n')
                    html = requests.get(web_url).content
                

                    # parse HTML Content
                    soup = BeautifulSoup(html, "html.parser")
                    
                    js_files_link = []  #['https://biv.gazeta.pl/static/front/ot-iab-consent/master/rodoGuard-ux.js?v17', 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js', 'https://biv.gazeta.pl/static/front/ot-iab-consent/master/ot-ux-fix.js?v27']
                    js_filename_alone = [] # ['https//biv.gazeta.pl/static/front/ot-iab-consent/master/rodoGuard-ux_20230410_154604.047', 'https//cdn.cookielaw.org/scripttemplates/otSDKStub_20230410_154604.047']
                    for script in soup.find_all("script"):
                        if script.attrs.get("src"):
                            
                            # if the tag has the attribute
                            # 'src'
                            url = script.attrs.get("src")
                            # js_files_link.append(web_url+url)
                            print("web_url:", web_url)
                            logfile.write("web_url: {web_url}\n".format(web_url=web_url))
                            print("url:", url)
                            logfile.write("url: {url}\n".format(url=url))
                            if url[0:4] == "http": ## also accounts for https
                                js_files_link.append(url)
                            
                            elif url[0:2] == "//":  ## url: //g.alicdn.com/alilog/mlog/aplus_v2.js
                                js_files_link.append(protocol + ":"+ url)

                            elif url[0] in ['/','\\']:
                                js_files_link.append(web_url+url)
                            elif url[0] not in ['/','\\']:
                                js_files_link.append(web_url+ "/" + url)
                        
                            # js_filename_alone.append(url.split('.js')[0].replace(":","") + '_' + dt_string) 
                            slugifyed_filepath = slugify(url.split('.js')[0])
                            js_filename_alone.append(slugifyed_filepath + '_' + dt_string)
                            # try:
                            #     sanitized_filepath = sanitize_filepath(url.split('.js')[0], platform="auto")+ '_' + dt_string
                            #     print("sanitized path:", sanitize_filepath(url.split('.js')[0], platform="auto")+ '_' + dt_string)
                            #     js_filename_alone.append(sanitize_filepath(url.split('.js')[0], platform="auto")+ '_' + dt_string) 
                            # except Exception as e:
                            #     print("sanitize_filepath exception:", e)
                            #     js_files_link.pop() ## removing as we do not want it to be called
                    # print(js_files)
                    js_file_counter = 0
                    array_js_filenames = []
                    js_files_link = list(dict.fromkeys(js_files_link))
                    js_filename_alone = list(dict.fromkeys(js_filename_alone))
                    print("total js_files_links:", js_files_link)
                    logfile.write("total js_files_links: {js_files_link}\n".format(js_files_link=js_files_link) )
                    for each_js_link in js_files_link:
                        print("starting get for each_js_link:", each_js_link)
                        logfile.write("starting get for each_js_link: {each_js_link}\n".format(each_js_link=each_js_link))
                        try:

                            each_js = requests.get(each_js_link).content
                            # print(type(js.decode()))
                            # print("each_js gotten")
                            # js_file_path = "resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js"
                            # array_js_filenames.append("resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js")
                            if (each_js_link[0:4] == "http") or (each_js_link[0] not in ['/','\\']):
                                js_file_path = "resources/js/" + protocol + '/' + js_filename_alone[js_file_counter] + ".js"
                                array_js_filenames.append("resources/js/" + protocol +'/'+ js_filename_alone[js_file_counter] + ".js")
                            else:
                                js_file_path = "resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js"
                                array_js_filenames.append("resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js")
                                            
                            ## testing new folder creation
                            # if not os.path.exists('resources/js'):
                            #     os.mkdir('resources/js')
                            # if not os.path.exists('resources/js/' + protocol):
                            #     os.mkdir('resources/js/' + protocol)
                            output_file = Path(js_file_path)
                            output_file.parent.mkdir(exist_ok=True, parents=True)

                            encoding = chardet.detect(each_js)['encoding']
                        # encoding = json.detect_encoding(each_js)

                        # print("encoding:", encoding)
                            # the_encoding = chardet.detect(rawdata)['encoding']

                        # print(type(each_js))

                            with open(js_file_path, "w", encoding=encoding, errors='ignore') as f:
                            # with open(js_file_path, "w") as f:
                                # with open(js_file_path, "w") as f:
                                    
                                # text_file = open(js_file_path, "w+")
                                f.write(each_js.decode(errors='ignore'))
                                # f.close()

                            js_file_counter += 1
                        except Exception as e:
                            print("exception in getting js_file:", e)
                            logfile.write("exception in getting js_file: {e}\n".format(e=e))

                    if len(array_js_filenames) > 0:
                        # ip_doc['has_javascript'] = len(array_js_filenames)
                        
                        ip_doc['has_javascript'] = 1
                    else:
                        array_js_filenames = None
                        if type(ip_doc['has_javascript']) == str:
                            ip_doc['has_javascript'] = 0
                    # to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location":filepath, "js_file_location": array_js_filenames}
                    to_append["js_file_location"] = array_js_filenames

                    ip_doc['files_log'].append(to_append)
                
                except Exception as e:
                    # print(e)
                    print("===== grab_html_js function exception occured")
                    print("exception e:", e)
                    logfile.write("===== grab_html_js function exception occured\n")
                    logfile.write("exception: {e}\n".format(e=e))
                    if type(ip_doc['has_html']) == str:
                        ip_doc['has_html'] = 0
                    if type(ip_doc['has_javascript']) == str:
                        ip_doc['has_javascript'] = 0
                    # to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location": None, "js_file_location" : None}
                    to_append["js_file_location"] = None
                    # to_append["exception"] = e
                    ip_doc['files_log'].append(to_append)
                    print(" ===== grab_html_js function exception end =====")
                    logfile.write("===== grab_html_js function exception end =====\n")

                    # return ip_doc


            # ## else indicate its not good 
            else:
                if type(ip_doc['has_html']) == str:
                    ip_doc['has_html'] = 0
                if type(ip_doc['has_javascript']) == str:
                    ip_doc['has_javascript'] = 0
                to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location": None, "js_file_location" : None}
                # ip_doc['files'] = [to_append]
                ip_doc['files_log'].append(to_append)
        
        toc = time.perf_counter()
        ip_doc["duration_log"]["grab_html_js"] = toc-tic
        logfile.write("duration_log grab_html_js: {time}\n".format(time=toc-tic))

        # print("CALL HTML JS IP_DOC:", ip_doc)
        print("===== grab_html_js function end =====")
        logfile.write("===== grab_html_js function end =====\n")
        
        return ip_doc
        # both http and https

def process_ip_parent_without_vtcall():

    with client.start_session() as session:
    # sessionId = session
    # refreshTimestamp = datetime.datetime.now()



        # while config.REMAINING_LIMIT > 0 and len(list(retrieve_docs_to_process(config.REMAINING_LIMIT))) > 0:
            # print("new while loop config.REMAINING_LIMIT:", config.REMAINING_LIMIT)
            cursor = col.find({"has_html" : ""})            ## replicate to prevent closing
            cursor = [x for x in cursor]
            # print(cursor)

            
            for ip_doc in cursor:
                currentTimestamp = datetime.datetime.now()
                print(currentTimestamp)

                tic = time.perf_counter()

                ## refreshing to keep connection alive
                client.admin.command('refreshSessions', [session.session_id], session=session)

                ip = str(ip_doc["ip_address"])
                print("current ip in process_ip_parent:", ip, "currentTimeStamp", currentTimestamp)
                
                ## ip check to be here
                # if to_skip(ip_doc) == 1:
                #     continue
    
                db_id = ip_doc['_id']
                updated_ip_doc = ip_doc

                ## screenshot and extract html js functions here
                updated_ip_doc = screenshot(updated_ip_doc)
                updated_ip_doc = grab_html_js(updated_ip_doc) 
        
                try : 
                    col.replace_one({"_id" : db_id}, updated_ip_doc)
                    print("replacement successful")
                
                except Exception as e:
                    print(e)
                    # e

                ## COMMENT OUT FOR ACTUAL
                # break
                toc = time.perf_counter()
                # if (toc-tic) < 15:
                #     balance = 15-(toc-tic)
                #     print("sleeping to makeup 15 seconds: ", balance, "seconds" )
                #     time.sleep(15-(toc-tic))
                #     toc = time.perf_counter()

                print(f"replacement SUCCESSFUL for {ip}, time taken {toc-tic} seconds\n\n\n")
             
            # cursor.close()

            # if call_ip_status_code == 429:

            return "Replacement SUCCESSFUL"
    

def process_individual(input):

    now = datetime.datetime.now()
    dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
    config.CURR_LOGFILE = "resources/logs/logfile_" + dt_string + ".txt"
    output_file = Path(config.CURR_LOGFILE)
    output_file.parent.mkdir(exist_ok=True, parents=True)
    

    with client.start_session() as session:
    # sessionId = session
    # refreshTimestamp = datetime.datetime.now()



        # while config.REMAINING_LIMIT > 0 and len(list(retrieve_docs_to_process(config.REMAINING_LIMIT))) > 0:
            # print("new while loop config.REMAINING_LIMIT:", config.REMAINING_LIMIT)
            cursor = col.find({"ip_address" : input})            ## replicate to prevent closing
            cursor = [x for x in cursor]
            # print("cursor:", cursor)

            
            for ip_doc in cursor:
                print("current ip_doc:", ip_doc['duration_log'])
                currentTimestamp = datetime.datetime.now()
                print(currentTimestamp)

                tic = time.perf_counter()

                ## refreshing to keep connection alive
                client.admin.command('refreshSessions', [session.session_id], session=session)

                ip = str(ip_doc["ip_address"])
                print("current ip in process_ip_parent:", ip, "currentTimeStamp", currentTimestamp)
                
                ## ip check to be here
                # if to_skip(ip_doc) == 1:
                #     continue
    
                db_id = ip_doc['_id']
                updated_ip_doc = ip_doc

                ## screenshot and extract html js functions here
                # updated_ip_doc = screenshot(updated_ip_doc)
                updated_ip_doc = grab_html_js(updated_ip_doc) 
                print("updated_ip_doc:", updated_ip_doc)
        
                try : 
                    # col.replace_one({"_id" : db_id}, updated_ip_doc)
                    # print("replacement successful")
                    print("try loop conmpleted")
                
                except Exception as e:
                    print(e)
                    # e

                ## COMMENT OUT FOR ACTUAL
                # break
                toc = time.perf_counter()
                # if (toc-tic) < 15:
                #     balance = 15-(toc-tic)
                #     print("sleeping to makeup 15 seconds: ", balance, "seconds" )
                #     time.sleep(15-(toc-tic))
                #     toc = time.perf_counter()

                print(f"replacement SUCCESSFUL for {ip}, time taken {toc-tic} seconds\n\n\n")
             
            # cursor.close()

            # if call_ip_status_code == 429:

            return "Replacement SUCCESSFUL"

