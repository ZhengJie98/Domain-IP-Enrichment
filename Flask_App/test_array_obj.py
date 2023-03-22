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



client = MongoClient('localhost',27017)
db = client['filtered_sg_ip_list']
col = db["ip"]
    


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
        "files" : [] ## Array of sub-docs, [{type:"", file_location:""}, {}...]
        
    }

print(type(ip_template['files']))