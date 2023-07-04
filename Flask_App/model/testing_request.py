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

 
# Making a get request
response = requests.get('https://api.github.com/')
 
# print response
print(response)
 
# print check if an error has occurred
print(response.raise_for_status())

 
# ping an incorrect url
response = requests.get('https://geeksforgeeks.org/naveen/')
print(response.status_code)
 
# print check if an error has occurred
# print(response.raise_for_status())