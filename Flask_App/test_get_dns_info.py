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

a = [1,2,7,6,4]
# print(sorted(a))
domain = 'imbbk3238g.xyz'
domain = "the-reserve-residences-official-sg.com"
doc = {}

now = datetime.datetime.now(timezone('UTC'))
dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   

try:
        dns_info = socket.gethostbyname_ex(domain) ## e.g. www.amazon.com, 
        gethostbyname_ex_filepath = "resources/dns/" + domain + '_' +"gethostbyname_ex" + '_' + dt_string + ".txt"

        with open(gethostbyname_ex_filepath, "w") as outfile:
            outfile.write(str(dns_info))

        print("gethostbyname_ex_filepath file written to {gethostbyname_ex_filepath}".format(gethostbyname_ex_filepath=gethostbyname_ex_filepath))
        # logfile.write("gethostbyname_ex_filepath file written to {gethostbyname_ex_filepath}\n".format(gethostbyname_ex_filepath=gethostbyname_ex_filepath))


        # return [dns_info[1], dns_info[2], nameserver_list]
        # print("[dns_info[1], dns_info[2], nameserver_list]:", [dns_info[1], dns_info[2], gethostbyname_ex_filepath])
        # doc['dns_info'] = {'alias': dns_info[1], 'other_ip_address': dns_info[2], 'nameserver_list': nameserver_list, 'gethostbyname_ex_filepath': gethostbyname_ex_filepath, 'nameservers_filepath' :nameservers_filepath }
        print("dns_info[1]:", dns_info[1])
        print("dns_info[2]:", dns_info[2])
        doc['dns_info']['gethostbyname_ex'] =   {'alias': sorted(dns_info[1]), 
                                                'other_ip_address': sorted(dns_info[2]),
                                                'gethostbyname_ex_filepath' : gethostbyname_ex_filepath
                                                }
        print(doc)
        
except Exception as e:

    print("socket.gethostbyname_ex() exception triggered", e)
    print(e)
    # logfile.write("socket.gethostbyname_ex() exception triggered: {e}\n".format(e=e))

    # return ['', '', '', '', '']

try: 
    from dns import resolver
    resolver = resolver.Resolver()
    resolver.nameservers = ['1.1.1.1']
    nameservers = resolver.query(domain, 'NS') ## e.g. www.amazon.com
    nameserver_list = sorted([i.to_text() for i in nameservers])
    nameservers_filepath = "resources/dns/" + domain + '_' + "nameservers" + '_' + dt_string + ".txt"

    # with open(nameservers_filepath, "w") as outfile:
    #     outfile.write(str(nameserver_list))
    
    # 'nameserver_list': nameserver_list, 'gethostbyname_ex_filepath': gethostbyname_ex_filepath, 'nameservers_filepath' :nameservers_filepath }

    # doc['dns_info']['nameserver_list'] = nameserver_list
    # doc['dns_info']['gethostbyname_ex_filepath'] = gethostbyname_ex_filepath
    # doc['dns_info']['nameservers_filepath']: nameservers_filepath
    doc['dns_info']['dns_resolver_query'] = {'nameserver_list': sorted(nameserver_list),
                                            'nameservers_filepath': nameservers_filepath
                                            }

    print("nameservers_filepath file written to {nameservers_filepath}".format(nameservers_filepath=nameservers_filepath))
    # logfile.write("nameservers_filepath file written to {nameservers_filepath}\n".format(nameservers_filepath=nameservers_filepath))

except Exception as e: 
    
    print("dns.resolver.query() exception triggered", e)
    # logfile.write("dns.resolver.query() exception triggered: {e}\n".format(e=e))

print("===== get_dns_info function end =====")