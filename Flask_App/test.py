# # from flask import Flask, request, jsonify, flash, redirect, url_for
# from os.path import join, dirname, realpath
# # from werkzeug.utils import secure_filename
# # from model.ipService import *
# # import time
# # import datetime
# # import atexit
# # from apscheduler.schedulers.background import BackgroundScheduler
# # from apscheduler.triggers.interval import IntervalTrigger
# import os

# import base64
# import hashlib
# import json
# import requests
# import time
# import csv
# import datetime
# import os
import pandas as pd
# from dateutil import tz
# import pytz
# from pymongo import MongoClient
# import atexit
# # from apscheduler.schedulers.background import BackgroundScheduler
# # from app import *

from datetime import datetime
heh =datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f')
print(heh)
hehe= dt_string = datetime.now().strftime("%Y%m%d_%H%M%S.%f")[:-3]
# hehe= dt_string = datetime.utcnow().strftime("%Y%m%d_%H%M%S.%f")

print(hehe)

{
  "_id": {
    "$oid": "6410420a59ae61145827dbff"
  },
  "ip_address": "195.78.54.237",
  "target_geo_country": "NL",
  "whois_date": 1665144561,
  "last_analysis_date": 1665144508,
  "reputation": 0,
  "last_analysis_stats": {
    "harmless": 80,
    "malicious": 1,
    "suspicious": 0,
    "undetected": 9,
    "timeout": 0
  },
  "total_votes": {
    "harmless": 0,
    "malicious": 0
  },
  "as_owner": "COGENT-174",
  "country": "NL",
  "asn": 174,
  "processed_date": "",
  "failure_count": 0,
  "added_timestamp": {
    "$date": "2023-03-14T17:44:42.061Z"
  },
  "source": "csv",
  "processed_timestamp": {
    "$date": "2023-03-14T17:50:23.845Z"
  }
}