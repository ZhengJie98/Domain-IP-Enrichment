from flask import Flask, request, jsonify, flash, redirect, url_for
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

@app.route("/exportDB", methods=['GET'])
def export_DB():

    result = export_db()
   
    return result

@app.route("/processIPtest_without_vtcall", methods=['GET'])
def process_IP_test_without_vtcall():

    result = process_ip_parent_without_vtcall()
   
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

@app.route("/customAdd", methods=['POST'])
def customAdd():

    
    print("=====TEST FUNCTION CALLED=====")
    # cursor = retrieve_ips_to_process(1700)

    custom_add()
    # print("remaining config.REMAINING_LIMIT:", config.REMAINING_LIMIT)


    return "testing successful"

# ## SAVES FILE AS FILENAME_DTSTRING TO PREVENT OVERWRITING
# def saveFile(file):
#     now = datetime.datetime.now()
#     dt_string = now.strftime("%Y%d%m_%H%M%S")
#     filename_splitted = secure_filename(file.filename).split('.csv') 
#     filename = filename_splitted[0] + '_' + str(dt_string) + ".csv"
#     # filename = secure_filename(file.filename)
#     row_count = sum(1 for row in file) - 1
#     # print("row_count:", row_count)

#     file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
#     # file.save(secure_filename(file.filename))
    
#     global TASK_QUEUE
#     TASK_QUEUE.append([filename,row_count])
#     print("TASK_QUEUE:", TASK_QUEUE)
#     return jsonify(TASK_QUEUE) 


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
   app.run(debug=True)
    # app.run(debug=True, use_reloader=False)
