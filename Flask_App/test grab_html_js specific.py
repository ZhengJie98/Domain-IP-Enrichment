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


web_url = 'https://www.semrush.com/blog/wordpress-seo-checklist-20-tips/'
test = {"domain": web_url}
protocol = 'http'


now = datetime.datetime.now(timezone('UTC'))
dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3] 


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
        # logfile.write("web_url: {web_url}\n".format(web_url=web_url))
        print("url:", url)
        # logfile.write("url: {url}\n".format(url=url))
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
for each_js_link in js_files_link:
    print("starting get for each_js_link:", each_js_link)
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

