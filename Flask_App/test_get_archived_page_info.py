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
import dns.resolver
import whois # query and response protocol that is often used for querying databases that store registered domain names.
print("===== get_archived_page_info function start =====")
tic = time.perf_counter()

# with open(config.CURR_LOGFILE,'a+') as logfile:
    # logfile.write("===== get_archived_page_info function start =====\n")
domain = "simonshop.com"
# domain = str(doc["domain"])
doc = {}
now = datetime.datetime.now()
dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   

if not os.path.exists("resources/archived_page"):
    os.makedirs("resources/archived_page")
                    
try:
    user_agent = "Mozilla/5.0 (Windows NT 5.1; rv:40.0) Gecko/20100101 Firefox/40.0"
    cdx_api = WaybackMachineCDXServerAPI(domain, user_agent)
    newest = cdx_api.newest()

    for each in cdx_api.snapshots():
        print("each:", each)

    filepath = "resources/archived_page/" + domain + '_' + dt_string + ".json"
    with open(filepath, "w") as outfile:
        # for i in vars(newest).values():
        # json_str = json.
        print("newest:", json.dumps(newest.__dict__, indent=4, sort_keys=True, default=str))
        outfile.write(json.dumps(newest.__dict__, indent=4, sort_keys=True, default=str))
        
        # for i in vars(newest):
        #     outfile.write(str(i))

    print("get_archived_page_info file written to {filepath}".format(filepath=filepath))
    # logfile.write("get_archived_page_info file written to {filepath}\n".format(filepath=filepath))

    # to_append = {"type": protocol + "_screenshot", "stderr": response.stderr, "stdout": response.stdout, "ss_file_location":filepath}
    
    # return [newest.archive_url, newest.timestamp]
    doc['archived_page_info'] = {'newest.archive_url': newest.archive_url, 'newest.timestamp': newest.timestamp, 'archived_paged_file_location': filepath}
    # return [w.registrar, w.name, w.org, w.creation_date, w.updated_date]

    
except Exception as e:

    print("get_archived_page_info() exception triggered:", e)

    # logfile.write("get_archived_page_info()  exception triggered: {e}\n".format(e=e))

    # return ['', '', '', '', '']
toc = time.perf_counter()
# doc['duration_log']['get_archived_page_info'] = toc-tic
# logfile.write("duration_log get_archived_page_info: {time}\n".format(time=toc-tic))
# logfile.write("===== get_archived_page_info function end =====\n")
print("===== get_archived_page_info function end =====")
    
# return doc
