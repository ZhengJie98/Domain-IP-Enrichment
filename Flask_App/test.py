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





# ip_template = {
    
#         # "ALL_COLUMNS_IN_EXCEL": "",
#         "x_days_ago": "",
#         "to_skip": "",
#         "whois_date": "",
#         "last_analysis_date": "",
#         "reputation": "",
#         "last_analysis_stats": "",
#         "total_votes": "",
#         "as_owner": "",
#         "country": "",
#         "asn": "",
#         "added_timestamp":"",
#         "processed_timestamp":"", ## leave empty until you process it from DB.
#         "failure_count": 0,## if it hits a threshold then stop calling it.
#         "is_priority": "", ## 1 for individual submissions or 0 for CSVs
#         "source":"", ## if its CSV then put csvName, if its individual then put individual
#         "has_screenshot": "",
#         "has_html": "",
#         "has_javascript": "",
#         "files_log" : None, ## Array of sub-docs, [{type:"", file_location:""}, {}...]
#         "duration_log" : None
        
#     }

domain_template = {
    
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
db = client['domain_test']
col = db["domain"]

def save_file(file):
    print("===== save_iplist() =====:")
    now = datetime.datetime.now()
    df = pd.read_csv(file)

    ## TAKING FIRST COL TO BE IP 
    df.columns.values[0] = "domain"

    ## FOR HARDDISK
    dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]    
    # filename_splitted = secure_filename(file.filename).split('.csv') 
    filename_splitted = secure_filename(file).split('.csv') 
    filename = filename_splitted[0] + '_' + str(dt_string) + ".csv"
    df.to_csv(os.path.join(app.config['UPLOAD_FOLDER'], filename))


    ## FOR DATABASE
    for k,v in domain_template.items():
        print("current (k,v):", (k,v))
        print("current domain_template[k]:", domain_template[k])
        print('v', v)
        print("type v", type(v))
        # df[k] = domain_template[k]
        if type(v) == dict:
            dict_df = pd.DataFrame.from_dict([v])
            print(dict_df)
        df[k] = v
        
        print("df[k]:", df[k])
        print("domain_template[k]:", domain_template[k])
        
    
    df["x_days_ago"] = X_DAYS_AGO
    df["added_timestamp"] = now
    df["is_priority"] = 0
    df["source"] = "csv"
    records_ = df.to_dict(orient = 'records') 
    # result = db.ip.insert_many(records_ ) 
    result = col.insert_many(records_ ) 

    return result

    
# print("hello")
save_file(r"C:\Users\Jun Rong\Documents\GitHub\IMDA-Domain-IP-Enrichment\Flask_App\domain_test.csv")