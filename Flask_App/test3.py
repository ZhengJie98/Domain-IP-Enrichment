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
from datetime import timedelta
import time

tic = time.perf_counter()

toc = time.perf_counter()

if (toc-tic) < 15:
    balance = 15-(toc-tic)
    print("sleeping to makeup 15 seconds: ", balance, "seconds" )
    time.sleep(balance)
# print("Finished " + ip + "in " f"{toc - tic:0.4f} seconds")
