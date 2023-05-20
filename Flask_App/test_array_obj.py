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
db = client['jon_list']
col = db["domain_v2"]
    



with client.start_session() as session:
        
    # cursor = col.find({"has_html" : ""})
    cursor = col.find()
    # cursor = col.find({"domain":"zshhks.top"})
    # cursor = col.find({"processed_timestamp" : ""})

    # cursor = col.find({"processed_timestamp" : {"$ne": ""}})            ## replicate to prevent closing
    cursor = [x for x in cursor]
    # print(cursor)

    
    for doc in cursor:
        # print(doc)
        retrieved = doc['processed_timestamp']
        print(type(retrieved) == datetime.datetime)
        print(retrieved)