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
            date_string = updated_doc['archived_page_info']['newest.timestamp']
            datetime_object = datetime.datetime.strptime(date_string, '%Y%m%d%H%M%S')
            datetime_str = datetime_object.strftime("%d-%m-%YT%H:%M:%S")
            # print(type(date_string))
               
            # print(type(datetime_obj))
            final_datetime_obj = datetime.datetime.strptime(datetime_str,'%d-%m-%YT%H:%M:%S')
            # print(datetime_obj)
            # print(type(final_datetime_obj))
            updated_doc['archived_page_info']['newest.timestamp'] = final_datetime_obj
            # print("updated_doc['archived_page_info']['newest.timestamp']", updated_doc['archived_page_info']['newest.timestamp'])
            col.replace_one({"_id" : db_id}, updated_doc)
        #     print("replacement successful")

            counter += 1
        except Exception as e:
            print(e)
            continue
        # epoch = updated_doc['whois_date']
        # print("date_string:", date_string)
        # print("type:", type(date_string))
        
        # try : 
        #     col.replace_one({"_id" : db_id}, updated_doc)
        #     print("replacement successful")
        #     # with open(config.CURR_LOGFILE,'a+') as logfile:
        #     #     logfile.write("replacement successful\n")
        #     counter += 1
        
        # except Exception as e:
        #     print("exception occured in process_parent()", e)
        #     # with open(config.CURR_LOGFILE,'a+') as logfile:
        #     #     logfile.write("exception: {e}\n".format(e=e))
        #     # e

     
    print("Done, with counter:", counter)    
