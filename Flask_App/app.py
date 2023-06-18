from flask import Flask, request, jsonify, flash, redirect, url_for
from flask_cors import CORS, cross_origin
from os.path import join, dirname, realpath
from werkzeug.utils import secure_filename
from model.ipService import *
import time
import datetime
import atexit
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger
import pymongo
import config
from flask.cli import FlaskGroup
from bson import json_util


# import os


# UPLOAD_FOLDER = '/uploaded_files'
UPLOAD_FOLDER = join(dirname(realpath(__file__)), 'upload_folder')
ALLOWED_EXTENSIONS = {'csv'}
# DAILY_LIMIT = 500
# TASK_QUEUE = [] ## Array of Arrays [filename,]
X_DAYS_AGO = 7


client = MongoClient('localhost',27017)
# db = client['filtered_sg_ip_list']
# col = db["ip"]
    

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# CORS(app, support_credentials=True)
# cors = CORS(app, origins='http://localhost:3000')
CORS(app)
# cors = CORS(app, resources={
#     r"/*":{
#         "origins":"*"
#     }
# })
# app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def hello_world():
  return 'Hello from Flask!'

@app.route("/uploadIP", methods=['POST'])
def upload_ip():
    if request.method == 'POST':
        file = request.files['file']
        save_ipfile_response = save_ipfile(file)

        return "ipfile saved"
    
@app.route("/uploadDomain", methods=['POST'])
def upload_domain():
    if request.method == 'POST':
        file = request.files['file']
        save_ipfile_response = save_domainfile(file)

        return "domainfile saved"
    

@app.route("/processParent", methods=['GET'])
def process_Parent():

    result = process_parent()
   
    return result

# @app.route("/exportDB", methods=['GET'])
# def export_DB():

#     result = export_db()
   
#     return result

@app.route("/process_without_vtcall", methods=['GET'])
def process_without_vtcall():

    result = process_parent_without_vtcall()
   
    return result

@app.route("/export_db", methods=['GET'])
def export_db():

    result = exportDB()
   
    return result


@app.route("/process_individual", methods=['GET'])
def process_Individual():

    input = request.form['input']
    # print(file)
    result = process_individual(input)
    # return file
    return result

@app.route("/test", methods=['POST'])
def test():

    
    print("=====TEST FUNCTION CALLED=====")
    cursor = retrieve_ips_to_process(3)
    for each in cursor:
        print("each:", each)

            ## COMMENT OUT FOR ACTUAL
            # break
        


    return "testing successful"

@app.route('/upload', methods=['POST', 'GET'])
# @cross_origin(supports_credentials=True)
@cross_origin(origin='*')
def upload_csv():
    # return jsonify({'success': 'ok'})
    print("currently in upload_csv")
    file = request.files['file']
    print(file)
    print(type(file))
    
    if file and file.filename.endswith('.csv'):
        # Save the file or process it as needed
        file.save(file.filename)
        return "File uploaded successfully."
    else:
        return "Invalid file. Only CSV files are allowed."

# Custom CORS headers
# @app.after_request
# def add_cors_headers(response):
#     # response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
#     response.headers['Access-Control-Allow-Origin'] = '*'
#     # response.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE'
#     response.headers['Access-Control-Allow-Headers'] = '*'
#     # response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'

#     return response

@app.route('/todos', methods=['GET'])
def get_todos():
    todos = retrieve_all_docs()
    # print(len(todos))

    # print(todos)
    return json.loads(json_util.dumps(todos))
# Scheduled Processing

# scheduler = BackgroundScheduler()
# scheduler.start()

# @scheduler.scheduled_job(IntervalTrigger(seconds=2))
# def func_to_be_executed():
#     now = datetime.datetime.now()
#     print("now:", now)

# @scheduler.scheduled_job(IntervalTrigger(seconds=5))
# def func_to_be_executed():
#     now = datetime.datetime.now()
#     global DAILY_LIMIT
#     print("now:", now, TASK_QUEUE)
#     print("DAILY LIMIT:", DAILY_LIMIT)
    
#     while (DAILY_LIMIT > 0) and (len(TASK_QUEUE) > 0):
#         print("DAILY_LIMIT LEFT:", DAILY_LIMIT)
#         for each in TASK_QUEUE:
#             popped_task = TASK_QUEUE.pop(0)

#             # print("Daily Limit:", DAILY_LIMIT)
#             # print("FileName:", each[0])
#             # print("row_counts:", each[1])   
#             DAILY_LIMIT -= each[1]
#             print("REMAINING DAILY_LIMITS:", DAILY_LIMIT)



if __name__ == "__main__":
#    app.run(debug=True, port=5000)
    app.run(debug=True, use_reloader=False, port=5000)
