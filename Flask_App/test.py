# # from flask import Flask, request, jsonify, flash, redirect, url_for
# from os.path import join, dirname, realpath
# # from werkzeug.utils import secure_filename
# # from model.ipService import *
# # import time
# # import datetime
# # import atexit
# # from apscheduler.schedulers.background import BackgroundScheduler
# # from apscheduler.triggers.interval import IntervalTrigger
# import os

# import base64
# import hashlib
# import json
# import requests
# import time
# import csv
# import datetime
# import os
import pandas as pd
# from dateutil import tz
# import pytz
# from pymongo import MongoClient
# import atexit
# # from apscheduler.schedulers.background import BackgroundScheduler
# # from app import *

 
json_template_ip = {
    
    "ip_address": "",
    "whois_date": "",
    "last_analysis_date": "",
    "reputation": "",
    "last_analysis_stats": "",
    "total_votes": "",
    "as_owner": "",
    "country": "",
    "asn": "",
    "image":"",
    "processed_date":"",
    "target_geo_country":""  ## input from original excel
       
}

for key in json_template_ip.keys():
    print(key)

normalised = pd.json_normalize(json_template_ip)
print(normalised)
# df = pd.read_json(json_template_ip)
# print(df)


# UPLOAD_FOLDER = join(dirname(realpath(__file__)), 'upload_folder')
# print(UPLOAD_FOLDER)


# filename = "ip_03022023_162257"
# file_path = UPLOAD_FOLDER + "/" + filename 
# # f = open(file_path)
# # print(f)

# API_KEY = '0d9fdb6e32d74b9d12e3d894309531838c3aabe8d66b049fd3a7976fbedf2c68'  #@param  {type: "string"}

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


# process_iplist(file_path,0,7)