from flask import Flask, request, jsonify, flash, redirect, url_for
from os.path import join, dirname, realpath
from werkzeug.utils import secure_filename
from model.ipService import *
import time
import datetime
import atexit
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger
# import os


# UPLOAD_FOLDER = '/uploaded_files'
UPLOAD_FOLDER = join(dirname(realpath(__file__)), 'upload_folder')
ALLOWED_EXTENSIONS = {'csv'}
DAILY_LIMIT = 500
TASK_QUEUE = [] ## Array of Arrays [filename,]

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER



@app.route("/uploadIP", methods=['POST'])
def upload_ip():
    if request.method == 'POST':
        file = request.files['file']
        save_ipfile_response = save_ipfile(file)

        return "ipfile saved"

@app.route("/processIPtest", methods=['POST'])
def process_IP_test():
    return "hehe"

@app.route("/test", methods=['POST'])
def test():

    
    print("=====TEST FUNCTION CALLED=====")
    # print("CURRENT TASK_QUEUE:", TASK_QUEUE)
    if request.method == 'POST':
        file = request.files['file']
        save_ipfile(file)
        # now = datetime.datetime.now()
        
        # df = pd.read_csv(file)

        # for key in templatey.keys():
        #     df[key] = ""
        
        # df["processed_date"] = ""
        # df["failure_count"] = 0
        # df["added_timestamp"] = now
        # df["is_priority"] = 0
        # df["source"] = "csv"

        

        # # print("df", df)
        # records_ = df.to_dict(orient = 'records') 
        # print(records_)
        # result = db.ip.insert_many(records_ ) 

        # saveFileResponse = saveFile(file)
    

    return "all's okay"


## SAVES FILE AS FILENAME_DTSTRING TO PREVENT OVERWRITING
def saveFile(file):
    now = datetime.datetime.now()
    dt_string = now.strftime("%Y%d%m_%H%M%S")
    filename_splitted = secure_filename(file.filename).split('.csv') 
    filename = filename_splitted[0] + '_' + str(dt_string) + ".csv"
    # filename = secure_filename(file.filename)
    row_count = sum(1 for row in file) - 1
    # print("row_count:", row_count)

    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    # file.save(secure_filename(file.filename))
    
    global TASK_QUEUE
    TASK_QUEUE.append([filename,row_count])
    print("TASK_QUEUE:", TASK_QUEUE)
    return jsonify(TASK_QUEUE) 


# Scheduled Processing

# scheduler = BackgroundScheduler()
# scheduler.start()

# @scheduler.scheduled_job(IntervalTrigger(seconds=2))
# def func_to_be_executed():
#     now = datetime.datetime.now()
#     print("now:", now, TASK_QUEUE)

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
