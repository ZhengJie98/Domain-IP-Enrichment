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
import requests
from bs4 import BeautifulSoup

ip_address = "106.8.46.228"

query = "curl -i https://{ip}".format(ip=ip_address)

try:
    response = subprocess.run(query, shell=False, capture_output=True, text=True)
except Exception as e:
    print("grab_html_js() exception triggered:", e)
    e

print(response.stderr)
print("return code:", response.returncode)

# html = requests.get("http://106.8.46.228").content
# print(html)
