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
import dns.resolver
import whois # query and response protocol that is often used for querying databases that store registered domain names.


# domain = 'www.facebook.com'
domain = 'www.amazon.com'
# domain = 'imbbk3238g.xyz'
# dns_info = socket.gethostbyname_ex(domain)
# # dns_info = ('fy31bb2w66.xyz', [], ['43.245.107.46'])
doc = {}
# doc['dns_info'] = {'alias': dns_info[1], 'other_ip_address': dns_info[2] }

try: 
    # nameservers = dns.resolver.query(domain, 'NS') ## e.g. www.amazon.com  ## findout who is the registered authoritative NS
    nameservers = dns.resolver.query(domain, 'NS') ## e.g. www.amazon.com
    nameserver_list = [i.to_text() for i in nameservers]
    print(nameservers)
    print(nameserver_list)
    
    # nameservers_filepath = "resources/dns/" + domain + '_' + "nameservers" + '_' + dt_string + ".txt"

    # with open(nameservers_filepath, "w") as outfile:
    #     outfile.write(str(nameservers))
    
    # 'nameserver_list': nameserver_list, 'gethostbyname_ex_filepath': gethostbyname_ex_filepath, 'nameservers_filepath' :nameservers_filepath }

    # doc['dns_info']['nameserver_list'] = nameserver_list
    # doc['dns_info']['gethostbyname_ex_filepath'] = gethostbyname_ex_filepath
    # doc['dns_info']['nameservers_filepath']: nameservers_filepath


    # print("nameservers_filepath file written to {nameservers_filepath}".format(nameservers_filepath=nameservers_filepath))
    # logfile.write("nameservers_filepath file written to {nameservers_filepath}\n".format(nameservers_filepath=nameservers_filepath))

except Exception as e: 
    
    print("dns.resolver.query() exception triggered", e)
    # logfile.write("dns.resolver.query() exception triggered: {e}\n".format(e=e))
    print(e)

# print(doc)