# # from flask import Flask, request, jsonify, flash, redirect, url_for
# from os.path import join, dirname, realpath
# # from werkzeug.utils import secure_filename
# # from model.ipService import *
# # import time
# # import datetime
# # import atexit
# # from apscheduler.schedulers.background import BackgroundScheduler
# # from apscheduler.triggers.interval import IntervalTrigger
# import os

# import base64
# import hashlib
# import json
# import requests
# import time
# import csv
# import datetime
# import os
import pandas as pd
# from dateutil import tz
# import pytz
# from pymongo import MongoClient
# import atexit
# # from apscheduler.schedulers.background import BackgroundScheduler
# # from app import *

from datetime import datetime
heh =datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S.%f')
print(heh)
hehe= dt_string = datetime.now().strftime("%Y%m%d_%H%M%S.%f")[:-3]
# hehe= dt_string = datetime.utcnow().strftime("%Y%m%d_%H%M%S.%f")

print(hehe)