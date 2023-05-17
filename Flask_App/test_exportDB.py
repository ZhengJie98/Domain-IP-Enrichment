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
import whois # query and response protocol that is often used for querying databases that store registered domain names.
from urllib.parse import urlparse
from pytz import timezone
from dns import resolver


db = client['jon_list']
collection = "domain_older"
col = db[collection]


def export_db():
    print("=====export db starting=====")
    start_time = time.time()
    now = datetime.datetime.now(timezone('UTC'))
    dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]    

    cursor = col.find()
    print ("total docs in collection:", col.count_documents( {} ))
    mongo_docs = list(cursor)
    docs = pd.DataFrame(columns=[])
    for num, doc in enumerate( mongo_docs ):
        doc["_id"] = str(doc["_id"])
        doc_id = doc["_id"]
        #  create a Series obj from the MongoDB dict
        series_obj = pd.Series( doc, name=doc_id )

        # append the MongoDB Series obj to the DataFrame obj
        # docs = docs.append(series_obj)
        docs = pd.concat([docs, pd.DataFrame([series_obj])], ignore_index=True)

        # only print every 10th document
        if num % 10 == 0:
            print (type(doc))
            print (type(doc["_id"]))
            # print (num, "--", doc, "\n")

    if not os.path.exists("resources/exportdb"):
            os.makedirs("resources/exportdb")

    filename = 'resources/exportdb/' + collection + '_' + dt_string + '.csv'
    docs.to_csv(filename, ",") # CSV delimited by commas
    print(f"\n\n file same to: ${filename}")
    print ("\n\ntime elapsed:", time.time()-start_time)
    return filename

export_db()