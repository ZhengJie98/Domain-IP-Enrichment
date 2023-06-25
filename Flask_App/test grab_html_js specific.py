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
# import dns.resolver
import dns.resolver
import whois # query and response protocol that is often used for querying databases that store registered domain names.


# web_url = 'https://www.semrush.com/blog/wordpress-seo-checklist-20-tips/'
# test_doc = {"domain": web_url}

client = MongoClient('localhost',27017)
db = client[config.db]
collection = config.collection
col = db[collection]

cursor = col.find(
        {"$and" : [{"processed_timestamp" : ""}, {"to_skip" : ""}, {"is_priority" : 0}]}
    ).sort("added_timestamp", pymongo.ASCENDING)


now = datetime.datetime.now(timezone('UTC'))
dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3] 
# protocol = 'http'
config.CURR_LOGFILE = "resources/logs/logfile_" + dt_string + ".txt"


def grab_html_js(doc):

    print("===== grab_html_js function start =====")
    with open(config.CURR_LOGFILE,'a+') as logfile:

        logfile.write("===== grab_html_js function start =====\n")
        tic = time.perf_counter()

        now = datetime.datetime.now(timezone('UTC'))
        dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3] 

        if "ip_address" in doc:
            # is_ip = 1 # if its ip 
            ip_or_domain = str(doc["ip_address"])
        
        elif "domain" in doc:
            # is_domain = 1 #if its domain
            ip_or_domain = str(doc["domain"])
            if "url" in doc: ## If domain is URL 
                ip_or_domain = str(doc["url"])
            else:
                ip_or_domain = str(doc["domain"])  
        # db_id = doc['_id']  

        print("ip_or_domain:", ip_or_domain)
        for protocol in ["http", "https"]:
            print("current protocol:", protocol)
            logfile.write("current protocol: {protocol}\n".format(protocol=protocol))

            if protocol == "http":
                filepath = "resources/html/*ip_or_domain*_http_*dt_string*.html"
                filepath = filepath.replace('*ip_or_domain*', ip_or_domain)
                filepath = filepath.replace('*dt_string*', dt_string)
                query = "curl -i http://{ip_or_domain} --create-dirs -o {filepath}".format(ip_or_domain=ip_or_domain, filepath = filepath)

            elif protocol == "https":
                filepath = "resources/html/*ip_or_domain*_https_*dt_string*.html"
                filepath = filepath.replace('*ip_or_domain*', ip_or_domain)
                filepath = filepath.replace('*dt_string*', dt_string)
                query = "curl -i https://{ip_or_domain} --create-dirs -o {filepath}".format(ip_or_domain=ip_or_domain, filepath = filepath)

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
                doc['has_html'] = 1
                to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location":filepath}


                ## Grab JS HERE
                web_url = protocol + "://" + ip_or_domain
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
                        
                        doc['has_javascript'] = 1
                    else:
                        array_js_filenames = None
                        if type(doc['has_javascript']) == str:
                            doc['has_javascript'] = 0
                    # to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location":filepath, "js_file_location": array_js_filenames}
                    to_append["js_file_location"] = array_js_filenames

                    doc['files_log'].append(to_append)
                
                except Exception as e:
                    # print(e)
                    exc_type, exc_obj, exc_tb = sys.exc_info()
                    fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
                    print(exc_type, fname, exc_tb.tb_lineno)

                    print("===== grab_html_js function exception occured")
                    print("exception e:", e)
                    logfile.write("===== grab_html_js function exception occured\n")
                    logfile.write("exception: {e}\n".format(e=e))
                    if type(doc['has_html']) == str:
                        doc['has_html'] = 0
                    if type(doc['has_javascript']) == str:
                        doc['has_javascript'] = 0
                    # to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location": None, "js_file_location" : None}
                    to_append["js_file_location"] = None
                    # to_append["exception"] = e
                    doc['files_log'].append(to_append)
                    print(" ===== grab_html_js function exception end =====")
                    logfile.write("===== grab_html_js function exception end =====\n")

                    # return ip_doc


            # ## else indicate its not good 
            else:
                if type(doc['has_html']) == str:
                    doc['has_html'] = 0
                if type(doc['has_javascript']) == str:
                    doc['has_javascript'] = 0
                to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "html_file_location": None, "js_file_location" : None}
                # ip_doc['files'] = [to_append]
                doc['files_log'].append(to_append)
        
        toc = time.perf_counter()
        doc["duration_log"]["grab_html_js"] = toc-tic
        logfile.write("duration_log grab_html_js: {time}\n".format(time=toc-tic))

        # print("CALL HTML JS IP_DOC:", ip_doc)
        print("===== grab_html_js function end =====")
        logfile.write("===== grab_html_js function end =====\n")
        
        return doc


for doc in cursor:
    doc['files_log'] = []
    doc["duration_log"] = {}
    grab_html_js(doc)

# html = requests.get(web_url).content
                

#                     # parse HTML Content
# soup = BeautifulSoup(html, "html.parser")
                    
# js_files_link = []  #['https://biv.gazeta.pl/static/front/ot-iab-consent/master/rodoGuard-ux.js?v17', 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js', 'https://biv.gazeta.pl/static/front/ot-iab-consent/master/ot-ux-fix.js?v27']
# js_filename_alone = [] # ['https//biv.gazeta.pl/static/front/ot-iab-consent/master/rodoGuard-ux_20230410_154604.047', 'https//cdn.cookielaw.org/scripttemplates/otSDKStub_20230410_154604.047']
# for script in soup.find_all("script"):
#     if script.attrs.get("src"):
        
#         # if the tag has the attribute
#         # 'src'
#         url = script.attrs.get("src")
#         # js_files_link.append(web_url+url)
#         print("web_url:", web_url)
#         # logfile.write("web_url: {web_url}\n".format(web_url=web_url))
#         print("url:", url)
#         # logfile.write("url: {url}\n".format(url=url))
#         if url[0:4] == "http": ## also accounts for https
#             js_files_link.append(url)
        
#         elif url[0:2] == "//":  ## url: //g.alicdn.com/alilog/mlog/aplus_v2.js
#             js_files_link.append(protocol + ":"+ url)

#         elif url[0] in ['/','\\']:
#             js_files_link.append(web_url+url)
#         elif url[0] not in ['/','\\']:
#             js_files_link.append(web_url+ "/" + url)
    
#         # js_filename_alone.append(url.split('.js')[0].replace(":","") + '_' + dt_string) 
#         slugifyed_filepath = slugify(url.split('.js')[0])
#         js_filename_alone.append(slugifyed_filepath + '_' + dt_string)
#         # try:
#         #     sanitized_filepath = sanitize_filepath(url.split('.js')[0], platform="auto")+ '_' + dt_string
#         #     print("sanitized path:", sanitize_filepath(url.split('.js')[0], platform="auto")+ '_' + dt_string)
#         #     js_filename_alone.append(sanitize_filepath(url.split('.js')[0], platform="auto")+ '_' + dt_string) 
#         # except Exception as e:
#         #     print("sanitize_filepath exception:", e)
#         #     js_files_link.pop() ## removing as we do not want it to be called
# # print(js_files)
# js_file_counter = 0
# array_js_filenames = []
# js_files_link = list(dict.fromkeys(js_files_link))
# js_filename_alone = list(dict.fromkeys(js_filename_alone))
# print("total js_files_links:", js_files_link)
# for each_js_link in js_files_link:
#     print("starting get for each_js_link:", each_js_link)
#     try:

#         each_js = requests.get(each_js_link).content
#         # print(type(js.decode()))
#         # print("each_js gotten")
#         # js_file_path = "resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js"
#         # array_js_filenames.append("resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js")
#         if (each_js_link[0:4] == "http") or (each_js_link[0] not in ['/','\\']):
#             js_file_path = "resources/js/" + protocol + '/' + js_filename_alone[js_file_counter] + ".js"
#             array_js_filenames.append("resources/js/" + protocol +'/'+ js_filename_alone[js_file_counter] + ".js")
#         else:
#             js_file_path = "resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js"
#             array_js_filenames.append("resources/js/" + protocol + js_filename_alone[js_file_counter] + ".js")
                        
#         ## testing new folder creation
#         # if not os.path.exists('resources/js'):
#         #     os.mkdir('resources/js')
#         # if not os.path.exists('resources/js/' + protocol):
#         #     os.mkdir('resources/js/' + protocol)
#         output_file = Path(js_file_path)
#         output_file.parent.mkdir(exist_ok=True, parents=True)

#         encoding = chardet.detect(each_js)['encoding']
#     # encoding = json.detect_encoding(each_js)

#     # print("encoding:", encoding)
#         # the_encoding = chardet.detect(rawdata)['encoding']

#     # print(type(each_js))

#         with open(js_file_path, "w", encoding=encoding, errors='ignore') as f:
#         # with open(js_file_path, "w") as f:
#             # with open(js_file_path, "w") as f:
                
#             # text_file = open(js_file_path, "w+")
#             f.write(each_js.decode(errors='ignore'))
#             # f.close()

#         js_file_counter += 1
#     except Exception as e:
#         print("exception in getting js_file:", e)

