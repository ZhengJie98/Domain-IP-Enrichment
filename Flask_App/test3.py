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
import requests
from bs4 import BeautifulSoup
from datetime import timedelta
import time
from pathlib import Path
from pathvalidate import sanitize_filepath
import chardet


# print("===== grab_html_js function start =====")
now = datetime.datetime.now()
dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
# ip_address = str(ip_doc["ip_address"])
# db_id = ip_doc['_id']  
# ip_address = "1.1.1.1"
ip_address = "80.252.0.252"


for protocol in ["http", "https"]:
    print("current protocol:", protocol)

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
        e

    returncode = response.returncode
    print("return code:", returncode)

    if returncode == 0:
        # ip_doc['has_html'] = 1
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
            html = requests.get(web_url).content
        

            # parse HTML Content
            soup = BeautifulSoup(html, "html.parser")
            
            js_files_link = []
            js_filename_alone = []
            for script in soup.find_all("script"):
                if script.attrs.get("src"):
                    
                    # if the tag has the attribute
                    # 'src'
                    url = script.attrs.get("src")
                    print("web_url:", web_url)
                    print("url:", url)
                    
                    if url[0:4] == "http":
                        js_files_link.append(url)
                        
                    else:    
                        js_files_link.append(web_url+url)
                   
                    # js_filename_alone.append(url.split('.js')[0]+ '_' + dt_string) 
                    js_filename_alone.append(sanitize_filepath(url.split('.js')[0], platform="auto")+ '_' + dt_string) 
                    
                    
            # print(js_files)
            js_file_counter = 0
            js_files_link = list(dict.fromkeys(js_files_link))
            js_filename_alone = list(dict.fromkeys(js_filename_alone))

            array_js_filenames = []
            # print("total js_files_links:", js_files_link)
            # print("js_filename_alone", js_filename_alone)
            for each_js in js_files_link:
                print("starting get for each_js:", each_js)
                try:

                    each_js = requests.get(each_js).content
                    # print(type(js.decode()))
                    print("each_js gotten")
                    if url[0:4] == "http":
                        js_file_path = "resources/js/" + protocol + '/' + js_filename_alone[js_file_counter] + ".js"
                        array_js_filenames.append("resources/js/" + protocol +'/'+ js_filename_alone[js_file_counter] + ".js")
                    else:
                        js_file_path = "resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js"
                        array_js_filenames.append("resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js")
                    
                    # print("array_js_filenames:", array_js_filenames)
                    # print("js_filename_alone[js_file_counter]", js_filename_alone[js_file_counter])
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
                        
                        # text_file = open(js_file_path, "w+")
                        f.write(each_js.decode(errors='ignore'))
                        # f.close()
                    
                    js_file_counter += 1
                except Exception as e:
                    print("exception in getting js_file:", e)

            if len(array_js_filenames) > 0:
                # ip_doc['has_javascript'] = len(array_js_filenames)
                print('has javascript')
                # ip_doc['has_javascript'] = 1
            else:
                array_js_filenames = None
            # to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location":filepath, "js_file_location": array_js_filenames}
            to_append["js_file_location"] = array_js_filenames
            print("array_js_filenamess:", array_js_filenames)

            # ip_doc['files_log'].append(to_append)
        
        except Exception as e:
            # print(e)
            print("===== grab_html_js function exception occured")
            print("exception e:", e)
            # if type(ip_doc['has_html']) == str:
            #     ip_doc['has_html'] = 0
            # if type(ip_doc['has_javascript']) == str:
            #     ip_doc['has_javascript'] = 0
            # # to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location": None, "js_file_location" : None}
            # to_append["js_file_location"] = None
            # # to_append["exception"] = e
            # ip_doc['files_log'].append(to_append)
            # print(" ===== grab_html_js function exception end =====")
            # # return ip_doc


    # # ## else indicate its not good 
    # else:
    #     if type(ip_doc['has_html']) == str:
    #         ip_doc['has_html'] = 0
    #     if type(ip_doc['has_javascript']) == str:
    #         ip_doc['has_javascript'] = 0
    #     to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location": None, "js_file_location" : None}
    #     # ip_doc['files'] = [to_append]
    #     ip_doc['files_log'].append(to_append)

# print("CALL HTML JS IP_DOC:", ip_doc)
print("===== grab_html_js function end =====")