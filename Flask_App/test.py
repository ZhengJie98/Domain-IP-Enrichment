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



domain = 'imbbk3238g.xyz'

# from dns import *
resolver = resolver.Resolver()
resolver.nameservers = ['1.1.1.1']
a = resolver.query(domain,'NS')
# print(type(a))
# print(vars(a))
# # for each in a.values():
# #     print(each)
# print(list(a))

nameserver_list = [i.to_text() for i in a]
print(nameserver_list)
# for each in a.rrset:
    # print("each:", each)
# text = a.rrset.to_text
# print(a.rrset.to_text)
# print(text)
# print(type(a.rrset))
# print(list(a.rrset))
# a.rrset.items[0].address #'54.241.2.241'