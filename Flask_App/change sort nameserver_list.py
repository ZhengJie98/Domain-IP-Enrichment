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
from dns import resolver


db = client['jon_list']
# db = client['kwong_wai_list']
# db = client['michelle_list']
# collection = "domain"
collection = "domain_older"
# collection = "domain_v2"
# collection = "ip"
col = db[collection]

# vt_timestamp = 0
# convert = datetime.datetime.fromtimestamp(1678680363)
# print(type(convert))

with client.start_session() as session:
            
    # cursor = col.find({"has_html" : ""})
    cursor = col.find()
    # cursor = col.find({"domain":"zshhks.top"})
    # cursor = col.find({"processed_timestamp" : ""})
    # cursor = col.find({"processed_timestamp" : {"$ne": ""}})            ## replicate to prevent closing
    cursor = [x for x in cursor]
    # print(cursor)

    counter = 0    
    for doc in cursor:
        # print("current doc:", doc)
        client.admin.command('refreshSessions', [session.session_id], session=session)

        
        
        ## ip check to be here
        # if to_skip(doc) == 1:
        #     continue

        db_id = doc['_id']
        updated_doc = doc
        try:
            nameserver_list = updated_doc['dns_info']['dns_resolver_query']['nameserver_list']
            # print("before sort:", nameserver_list)
            nameserver_list.sort()
            # print("after sort:", nameserver_list)
            updated_doc['dns_info']['dns_resolver_query']['nameserver_list'] = nameserver_list
            col.replace_one({"_id" : db_id}, updated_doc)

            counter += 1
        except Exception as e:
            print(e)
            continue
          
    print("Done, with counter:", counter)    
