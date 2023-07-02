import requests
from bs4 import BeautifulSoup
import urllib.parse
from pathlib import Path
from slugify import slugify
import base64
import hashlib
import json
import requests
import time
import csv
import datetime
from datetime import timedelta
import sys, os
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
import whois # query and response protocol that is often used for querying databases that store registered domain names.
from urllib.parse import urlparse
from pytz import timezone
from dns import resolver

client = MongoClient('localhost',27017)
db = client[config.db]
collection = config.collection
col = db[collection]

now = datetime.datetime.now(timezone('UTC'))
dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
config.CURR_LOGFILE = "resources/logs/logfile_" + dt_string + ".txt"
output_file = Path(config.CURR_LOGFILE)
output_file.parent.mkdir(exist_ok=True, parents=True)

def grab_apk(doc):
    # print("config.CURR_LOGFILE:", config.CURR_LOGFILE)
    for protocol in ["http", "https"]:
        url = doc['url']

    # Send an HTTP GET request to the webpage
        if url[0:4] == "http": ## also accounts for https
            url = url
        elif url[0:2] == "//":  ## url: //g.alicdn.com/alilog/mlog/aplus_v2.js
            url = protocol + ":"+ url

        elif url[0] in ['/','\\']:
            url = url
        elif url[0] not in ['/','\\']:
            url=protocol + "://" + url
        # url = protocol + "://" + url
        # else:

        print("trying url:", url)
        with open(config.CURR_LOGFILE,'a+') as logfile:
            logfile.write("trying url: {url}\n".format(url=url))
        response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
        # print("response:", response)
        # Parse the HTML content
        soup = BeautifulSoup(response.content, "html.parser")

        # Find all <a> anchor tags with href attributes
        links = soup.find_all("a", href=True)
        # print("links:", type(links))
        num_apk_files = 0
        # Iterate over the links and download APK files
        file_paths = []
        for link in links:
            is_apk = False
            href = link["href"]
            print("href:", href)
            with open(config.CURR_LOGFILE,'a+') as logfile:
                logfile.write("href: {href}\n".format(href=href))
            print("href type:", type(href))
            # Check if the link is a direct download link to an APK file
            if ".apk" in href:
                print("current href with .apk inside:", href)
                with open(config.CURR_LOGFILE,'a+') as logfile:
                    logfile.write("current href with .apk inside: {href}\n".format(href=href))
                
                #Check if query is inside, to split if there is
                if href.endswith(".apk"):
                    print("file ends with .apk: ", href)
                    logfile.write("file ends with .apk: {href}\n".format(href=href))

                    is_apk = True
                
                elif "?" in href:
                    print("file has query: ?")
                    logfile.write("file has query: ?\n")
                    href_splitted = href.split("?")
                    before_query = href_splitted[0]
                    print("before_query:", before_query)
                    logfile.write("before query: {before_query}\n".format(before_query=before_query))
                    if before_query.endswith(".apk"):
                        is_apk = True
                
                if (is_apk):

                    num_apk_files += 1
                # Create the absolute URL if the link is relative
                    print("APK FOUND:", href)
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("APK FOUND: {href}\n".format(href=href))
                    absolute_url = urllib.parse.urljoin(url, href)
                    print("absolute_url:", absolute_url)
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("absolute_url: {absolute_url}\n".format(absolute_url=absolute_url))

                    # Send an HTTP GET request to download the APK file
                    apk_response = requests.get(absolute_url)
                    

                    filename = slugify(absolute_url)
                    filepath = "resources/apk"

                    output_file = Path(filepath)
                    output_file.parent.mkdir(exist_ok=True, parents=True)

                    # Save the APK file to disk
                    # filename = href.split("/")[-1]
                    print("filename:", filename)
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("filename: {filename}\n".format(filename=filename))
                    combined_path = filepath+filename
                    print("combined_path", combined_path)
                    with open(config.CURR_LOGFILE,'a+') as logfile:
                        logfile.write("combined_path: {combined_path}\n".format(combined_path=combined_path))
                    
                    with open(combined_path, "wb") as apk_file:
                        apk_file.write(apk_response.content)

                    ## store combined_path
                    ## store absolute_url --> to see whether if its the filepath or not
                    print(f"Downloaded: {combined_path}")
                    file_paths.append(combined_path)
    apk_files = {"file_paths":file_paths, "num_apk_files":num_apk_files}
    doc['apk_files'] = apk_files
    print("APK scraping complete.")
    with open(config.CURR_LOGFILE,'a+') as logfile:
        logfile.write("APK scraping complete\n")

    print("logfile written to:", config.CURR_LOGFILE)
    with open(config.CURR_LOGFILE,'a+') as logfile:
        logfile.write("logfile written to: {curr_logfile}\n".format(curr_logfile=config.CURR_LOGFILE)) 
    return doc

cursor = col.find({})
            ## replicate to prevent closing
cursor = [x for x in cursor]
print(len(cursor))


# for ip_doc in cursor:
for doc in cursor:
    db_id = doc['_id']
    if "url" in doc:

    # if "ip_address" in doc:
    #     is_ip = 1 # if its ip 
    #     ip_or_domain = str(doc["ip_address"])
    #     print("current ip in process_ip_parent:", ip_or_domain)
    #     with open(config.CURR_LOGFILE,'a+') as logfile:
    #         logfile.write("current ip in process_parent:" + ip_or_domain + '\n')

    # elif "domain" in doc:
    #     is_ip = 0 #if its domain
    #     ip_or_domain = str(doc["domain"])

    #     if is_url(ip_or_domain): ## if its url, then add a field
    #         print("current URL in process_parent " + ip_or_domain)
    #         with open(config.CURR_LOGFILE,'a+') as logfile:
    #             logfile.write("current URL in process_parent: " + ip_or_domain + '\n')
    #         doc['url'] = ip_or_domain
    #         print("doc['url']", doc['url'])
    #         ip_or_domain = retrieve_domain(ip_or_domain)
    #         doc['domain'] = ip_or_domain
    #         print("doc['domain']",doc['domain'])
        
    #     # else:
    #     #     print("current domain in process_parent:", ip_or_domain)
    #     #     with open(config.CURR_LOGFILE,'a+') as logfile:
    #     #         logfile.write("current domain in process_parent:" + ip_or_domain + '\n')
    #     else:
    #         print("current domain in process_parent:", ip_or_domain)
    #         with open(config.CURR_LOGFILE,'a+') as logfile:
    #             logfile.write("current domain in process_parent:" + ip_or_domain + '\n')
    
    # url = doc['url']
        try:
            updated_doc = grab_apk(doc)
            col.replace_one({"_id" : db_id}, updated_doc)
            print("replacement successful")
        except Exception as e:
            print("exception occured:", e)
# url = "https://m.apkpure.com/raid-shadow-legends/com.plarium.raidlegends"
# url = "https://m.apkpure.com/raid-shadow-legends/com.plarium.raidlegends/download/dblah.apk?dadasda"
# url = "https://www.apkmirror.com/instagram/instagram-instagram/instagram-instagram-287-0-0-25-77-release/#downloads"
# url = "https://snreviews.com/getorder/evaluation"
# grab_apk(url)

# array_urls = ["www.facebook.com", "wunderfauks-signin.com/#/pages/index/index", "xxmtkm.info/final-draft-coordinated-public-transportation-plan-released-for-review-comment/?", "wunderfauks-develop.com/#/pages/start/start", "e-lazada.com/#/login/index", "eufmyio.shop/products/05-stories-of-chata-patti-crimson-wedding-22", "krakenbq.cc/index/user/indexhtml", "www.forfurniture-downapp.com/", "imgg1265t.xyz/mobile/#/assets", "skyonetrades.com/mobile/en-us/m.html#/myAccount", "fy31bb2392.shop/mobile", "chartercom-singapore-project.pages.dev/#/", "dktunvslkjslgj.com/index/user/login.html", "p-dro.bio/auth", "www.mabangerp.plus/#/login", "dgtsdnvsdhgws.com/index/rot_order/index.html", "espire-home.com/#/pages/index/index", "in2ideas-enhance.com/#/", "shop-e2mallapp.com/to", "snreviews.com/getorder/evaluation", "app.qqcjqff1012.xyz/s/qURj", "app.qqcjqxz1023.xyz/s/mlenderios", "app-a1.ztajhi.cn/s/mlenderios?key=646S56376F6G465D31376383333M031R333X732C39&c=", "reschedule-track.com/secureJsp.php?&URI=1a78e09b36dd9349af6a929c067e7a85&sessionid=58a7e760c929a6fa9439dd63b90e87a1&securessl=true", "www.notchstudio-online.com/#/", "beepmall.app/#/pages/login/login", "zappz-program.com/#/", "www.42matters-app.com/#/pages/userPages/login/login", "forecepts-project.com/#/pages/start/start", "www.impact-eu.com/#/index1", "ksldhglslsdjg.com/index/user/login.html", "unrivaledinsight.com/web", "dbshk.cc/speed.html#/", "www.impact-bv.com/#/index1", "rs51rma7kwfuchvsl.7ut37gb.buzz/www.dbs.com.hk"]
# for url in array_urls:
#     print("current url:", url)
#     for protocol in ['http://','https://']:
#         try:
#             grab_apk(protocol+url)
#         except Exception as e:
#             print("Exception: ", e) 

print("all's done")
