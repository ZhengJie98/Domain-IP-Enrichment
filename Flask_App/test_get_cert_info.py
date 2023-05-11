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
import dns.resolver
import whois # query and response protocol that is often used for querying databases that store registered domain names.
import linecache


doc = {}
# domain = 'c.biishun.shop'
domain = 'imgg6625p.xyz'
print("===== get_cert_info function start =====")
tic = time.perf_counter()

# logfile.write("===== get_cert_info function start =====\n")

# domain = str(doc["domain"])

now = datetime.datetime.now()
dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   

if not os.path.exists("resources/cert"):
    os.makedirs("resources/cert")
                    
try:
    # w = whois.whois(domain)
    cert_json = crtshAPI().search(domain)
    print("cert_json:", cert_json)

    filepath = "resources/cert/" + domain + '_' + dt_string + ".json"
    json_str = json.dumps(cert_json)
    data = json.loads(json_str)
    print("json_str:", json_str)
    print("data:", data)

    if (data == None or len(data) == 0):
        toc = time.perf_counter()
        # doc['duration_log']['get_cert_info'] = toc-tic
        print("get_cert_info file is NONE ")   
        # logfile.write("get_cert_info file is NONE \n")
        # logfile.write("duration_log get_cert_info: {time}\n".format(time=toc-tic))
        # logfile.write("===== get_cert_info function end =====\n")
        print("===== get_cert_info function end =====")   
        
        # return doc


    with open(filepath, "w") as outfile:
        json.dump(cert_json, outfile)

    print("get_cert_info file written to {filepath}".format(filepath=filepath))
    # logfile.write("get_cert_info file written to {filepath}\n".format(filepath=filepath))

    
    # f = open(filepath)
    # print('f:',f)
    # print("data:", data)
    # data = cert_json

    SubjectCN_set = set()
    Issuer_set = set()
    SerialNo_set = set()
    AltName_set = set()
    AltName_count_min = 99999
    AltName_count_max = 0

    ## ending early if no cert info
    
    print('starting for loop')
    for i in data:  
        print("i:", i)

        SubjectCN_set.add(i["common_name"])
        Issuer_set.add(i["issuer_name"])
        SerialNo_set.add(i["serial_number"])
        AltName_set.add(i["name_value"])


        NumOfAltNamesInside = (i["name_value"].count("\n"))+1
        if (NumOfAltNamesInside < AltName_count_min):
            AltName_count_min = NumOfAltNamesInside

        if (NumOfAltNamesInside > AltName_count_max):
            AltName_count_max = NumOfAltNamesInside

    # print("SubjectCN_set:", SubjectCN_set)
    # print(type(SubjectCN_set))
    # print(type(list(SubjectCN_set)))
    # SubjectCN_set = dict.fromkeys(0, SubjectCN_set)
    # Issuer_set= dict.fromkeys(1, Issuer_set)
    # SerialNo_set= dict.fromkeys(2, SerialNo_set)
    # AltName_set= dict.fromkeys(3, AltName_set)


    # SubjectCN_set = dict.fromkeys(SubjectCN_set,0)
    # Issuer_set= dict.fromkeys(Issuer_set,0)
    # SerialNo_set= dict.fromkeys(SerialNo_set,0)
    # AltName_set= dict.fromkeys(AltName_set,0)
    # Closing file
    # f.close()


    doc['cert_info'] = {'common_name': cert_json[0]['common_name'], 
                        'name_value': cert_json[0]['name_value'], 
                        'issuer_name': cert_json[0]['issuer_name'], 
                        'not_before':cert_json[0]['not_before'], 
                        "latest_cert":cert_json[len(cert_json)-1]['not_before'],
                        'length_cert_json': len(cert_json),
                        'cert_file_location': filepath,

                        "len(SubjectCN_set)":len(SubjectCN_set), 
                        "SubjectCN_set":list(SubjectCN_set), 
                        "len(Issuer_set)":len(Issuer_set), 
                        "Issuer_set":list(Issuer_set), 
                        "len(AltName_set)":len(AltName_set), 
                        "AltName_count_min":AltName_count_min, 
                        "AltName_count_max":AltName_count_max}
    
    # return [len(SubjectCN_set), SubjectCN_set, len(Issuer_set), Issuer_set, len(AltName_set), AltName_count_min, AltName_count_max]
    # return [cert_json[0]['common_name'], cert_json[0]['name_value'], cert_json[0]['issuer_name'], cert_json[0]['not_before'], cert_json[len(cert_json)-1]['not_before'], len(cert_json)]

    # return doc
    
except Exception as e:
    exc_type, exc_obj, tb = sys.exc_info()
    f = tb.tb_frame
    lineno = tb.tb_lineno
    filename = f.f_code.co_filename
    linecache.checkcache(filename)
    line = linecache.getline(filename, lineno, f.f_globals)
    str_excep = 'EXCEPTION IN ({}, LINE {} "{}"): {}'.format(filename, lineno, line.strip(), exc_obj)
    print(str_excep)
    print("get_cert_info() exception triggered:", e)
    # print("exc_tb", exc_tb)

    # logfile.write("get_cert_info()  exception triggered: {e}\n".format(e=e))

    # return ['', '', '', '', '']
toc = time.perf_counter()
# doc['duration_log']['get_cert_info'] = toc-tic
# logfile.write("duration_log get_cert_info: {time}\n".format(time=toc-tic))
# logfile.write("===== get_cert_info function end =====\n")
print("doc:", doc)
print("===== get_cert_info function end =====")
    
