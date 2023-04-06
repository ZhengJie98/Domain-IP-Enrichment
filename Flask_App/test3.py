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


client = MongoClient('localhost',27017)
db = client['filtered_sg_ip_list']
col = db["ip"]
sessionId = client


with client.start_session() as session:
    # for doc in coll.find(no_cursor_timeout=True, session=session):
        # Process document for longer than the default server
        # session timeout of 30 minutes.
        for _ in range(10):
            time.sleep(5)
            # Periodically refresh the session to keep it and the cursor alive.
            client.admin.command(
                'refreshSessions', [session.session_id], session=session)
            print("refreshed")
# session = client
# client.admin.command('refreshSessions', [session.session_id], session=session)

# with client.start_session() as session:
#     print(session)
#     session = session.advance_cluster_time(timedelta(minutes=30))    
