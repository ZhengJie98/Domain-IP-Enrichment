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
from crtsh import crtshAPI ## search certificate /
from waybackpy import WaybackMachineCDXServerAPI ## search historical copies of website
import socket
import model.ipService
# import dns.resolver
import dns.resolver
import whois # query and response protocol that is often used for querying databases that store registered domain names.



client = MongoClient('localhost',27017)
# client = MongoClient('mongodb://readWrite:%20mongo1DB%20@18.141.141.56:27017/')
db = client[config.db]
collection = config.collection


docs = col.find({"to_skip":""})
# docs = col.find({})
# print(len(all_docs))
# print(all_docs)
counter = 0
for doc in docs:
    db_id = doc['_id']
    ip = doc['ip_address']
    blacklist = ['Xcitium Verdict Cloud']
    last_analysis_stats_exclude_blacklist = doc['last_analysis_stats'].copy()
    # last_analysis_stats_exclude_blacklist = {"harmless":0, 
    #                                          "malicious":0, 
    #                                          "suspicious":0, 
    #                                          "undetected":0,
    #                                          "timeout":0}
    
    vt_file_location = doc['vt_file_location']
    # print(vt_file_location)
    f =  open(vt_file_location)
    data = json.load(f)

    last_analysis_results = data["data"]["attributes"]["last_analysis_results"]
    for engine in last_analysis_results:
        if engine in blacklist:
            print("ip:", ip)
            # print(last_analysis_results[engine]) 
            category = last_analysis_results[engine]["category"]
            # print("before last_analysis_stats_exclude_blacklist:", last_analysis_stats_exclude_blacklist)
            last_analysis_stats_exclude_blacklist[category] -= 1
            # print("after last_analysis_stats_exclude_blacklist:", last_analysis_stats_exclude_blacklist)

    doc["last_analysis_stats_exclude_blacklist"] = last_analysis_stats_exclude_blacklist
    doc["last_analysis_stats_blacklist"] = blacklist 

    # print(doc)
    # print(last_analysis_stats_exclude_blacklist)

    ## recovering data
    # last_analysis_stats = data["data"]["attributes"]["last_analysis_stats"]
    # doc['last_analysis_stats'] = last_analysis_stats
    # doc.pop('last_analysis_results')

    col.replace_one({"_id" : db_id}, doc)
    counter += 1
print("documents replaced succesfully:", counter)

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

        now = datetime.datetime.now(timezone('UTC'))
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
            doc["vt_file_location"] = "resources/downloaded_vtresponse/" + dt_string + "/" + ip_or_domain + ".json"
            # print("type r after json dumps:", type(r))

        ## populate fields in JSON template
        # doc['processed_timestamp'] = now
        for k,v in doc.items():
            # print("current (k,v)", (k,v))
            
            try:
                doc[k] = r['data']['attributes'][k]

                ## test UTC date WHEN WAKE
                if k == "last_analysis_date" or k == "whois_date":
                    doc[k] = datetime.datetime.fromtimestamp(r['data']['attributes'][k])
            
            except Exception as e:
                # print(e, "for", (k,v))
                e


        ## Blacklist Function here 

        
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
