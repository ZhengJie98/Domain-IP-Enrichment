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



## Try One
url = "https://www.imda.gov.sg/"
# url = 'http://github.com'

## Try 1
# headers = {'User-Agent': 'user_agent',}
# s = requests.Session()
# response = requests.get(url, headers, allow_redirects=True)
# response = requests.get(url, allow_redirects=False)

## Try 2
# response = requests.get(url)
# print(response.is_redirect)
# print(response.url)
# print(response.status_code)
# print(response.history)

## Try 3
# s = requests.Session()
# # s.cookies.set("COOKIE_NAME", "The Cookie")
# response = s.get('https://www.imda.gov.sg', headers={"User-Agent":"Mozilla/5.0"})

# if response.history:
#     for resp in response.history:
#         print(resp.status_code, resp.url)
#     print("Final destination:")
#     print(response.status_code, response.url)
# print("response.url", response.url)

## Try 4
# import requests
# from urllib.parse import urljoin
# from bs4 import BeautifulSoup

# # url = "https://www.pastemagazine.com/search?t=tweets+of+the+week&m=Lists"
# url = "https://www.imda.gov.sg"

# with requests.Session() as s:
#     res = s.get(url,headers={"User-Agent":"Mozilla/5.0"})
#     print(res.history)
    
## Try 5
import requests
from bs4 import BeautifulSoup
s = requests.Session()
# url='https://scanlibs.com/neural-networks-systems-evolutionary-algorithms-2nd/'
url = "https://www.imda.gov.sg"
r=html=s.get(url).text
soup=BeautifulSoup(html,'html.parser')
relative_link=soup.find('a',{'id':'download'})['href'] #get the relative link
download_redirect_link=url+relative_link
headers={
"referer": url
}
r2=requests.get(download_redirect_link,headers=headers)
print(r2.url) 