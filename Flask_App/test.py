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


# web_url= "http://106.11.130.221"
# url= "//g.alicdn.com/alilog/mlog/aplus_v2.js"

# print("sanitized path:", sanitize_filepath(url.split('.js')[0], platform="auto"))

# web_url="http://106.11.130.221"
# url="//webapi.amap.com/maps?v=2.0&key=d1f15ad3fdf0c704434eaf23c7c18698&plugin=AMap.Adaptor"
# print("url_splitted:", url.split('.js'))
# # print("sanitized path:", sanitize_filepath(url.split('.js')[0], platform="auto"))
url = " http://g.alicdn.com/??AWSC/AWSC/awsc.js,sd/baxia-entry/baxiaCommon.js"

# sanitized = sanitize_filepath(url)
sanitized = slugify(url)

print(sanitized)