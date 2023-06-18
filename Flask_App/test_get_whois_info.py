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
doc = {"domain": "cs.mk-com.com"}
def get_whois_info(doc):
    print("===== get_whois_info function start =====")
    tic = time.perf_counter()

    # with open(config.CURR_LOGFILE,'a+') as logfile:
        # logfile.write("===== get_whois_info function start =====\n")

    domain = str(doc["domain"])

    now = datetime.datetime.now(timezone('UTC'))
    dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   

    if not os.path.exists("resources/whois"):
        os.makedirs("resources/whois")
                        
    try:
        w = whois.whois(domain)
        # w = whois.query(domain)
        filepath = "resources/whois/" + domain + '_' + dt_string + ".txt"
        # with open(filepath, "w", encoding="utf-8") as outfile:
        #     outfile.write(str(w.text))

        print("get_whois_info file written to {filepath}".format(filepath=filepath))
        # logfile.write("get_whois_info file written to {filepath}\n".format(filepath=filepath))

        # to_append = {"type": protocol + "_screenshot", "stderr": response.stderr, "stdout": response.stdout, "ss_file_location":filepath}

        doc['whois_info'] = {'registrar': w.registrar, 'name': w.name, 'org': w.org, 'creation_date':w.creation_date, 'updated_date':w.updated_date, 'whois_file_location': filepath}
        # return [w.registrar, w.name, w.org, w.creation_date, w.updated_date]

        
    except Exception as e:

        print("get_domain_whois_info() exception triggered:", e)
    
        # logfile.write("get_domain_whois_info()  exception triggered: {e}\n".format(e=e))

        # return ['', '', '', '', '']
    toc = time.perf_counter()
    # doc['duration_log']['get_whois_info'] = toc-tic
    # logfile.write("duration_log get_whois_info: {time}\n".format(time=toc-tic))
    # logfile.write("===== get_whois_info function end =====\n")
    print("===== get_whois_info function end =====")
        
    return doc


get_whois_info(doc)