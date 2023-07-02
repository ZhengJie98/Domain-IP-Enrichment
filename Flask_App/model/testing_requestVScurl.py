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
# from app import *
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


ip_or_domain = "www.amazon.com"
filepath = "testing2.html"
query = "curl -i http://{ip_or_domain} --create-dirs -o {filepath}".format(ip_or_domain=ip_or_domain, filepath = filepath)

# try:
#     response = subprocess.run(query, shell=False, capture_output=True, text=True)
# except Exception as e:
#     print("grab_html_js() exception triggered:", e)
#     # logfile.write("grab_html_js() exception triggered: {e}\n".format(e=e))
#     # e
url = f"http://{ip_or_domain}"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}


response = requests.get(url, headers=headers)
response.raise_for_status()

print("Redirection History:")
print(type(response.history))
print(response.history)
for redirect in response.history:
    print(f"URL: {redirect.url}, Status Code: {redirect.status_code}")


headers = response.headers
print("headers:", headers)

with open(filepath, "wb") as file:
    for chunk in response.iter_content(chunk_size=8192):
        if chunk:
            file.write(chunk)


returncode = response.status_code
print("returncode:", returncode)
print("filepath:", filepath)