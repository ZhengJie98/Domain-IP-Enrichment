from flask import Flask, request, jsonify, flash, redirect, url_for
from os.path import join, dirname, realpath
from werkzeug.utils import secure_filename
from model.ipService import *
import time
import datetime
import atexit
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger


# UPLOAD_FOLDER = '/uploaded_files'
UPLOAD_FOLDER = join(dirname(realpath(__file__)), 'upload_folder')
ALLOWED_EXTENSIONS = {'csv'}
DAILY_LIMIT = 500
TASK_QUEUE = [] ## Array of Arrays [filename,]

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER



@app.route("/uploadIP", methods=['POST'])
def ip_vt_call():
    if request.method == 'POST':
        file = request.files['file']
        saveFileResponse = saveFile(file)
        return saveFileResponse
    
@app.route("/test", methods=['POST'])
def test():
    print("=====TEST FUNCTION CALLED=====")
    print("CURRENT TASK_QUEUE:", TASK_QUEUE)
    if request.method == 'POST':
        run_process_iplist()
    

    return "all's okay"


## SAVES FILE AS FILENAME_DTSTRING TO PREVENT OVERWRITING
def saveFile(file):
    now = datetime.datetime.now()
    dt_string = now.strftime("%m%d%Y_%H%M%S")
    filename_splitted = secure_filename(file.filename).split('.csv') 
    filename = filename_splitted[0] + '_' + str(dt_string) + ".csv"
    row_count = sum(1 for row in file) - 1
    # print("row_count:", row_count)

    file = file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    
    global TASK_QUEUE
    TASK_QUEUE.append([filename,row_count])
    print("TASK_QUEUE:", TASK_QUEUE)
    return jsonify(TASK_QUEUE) 

# def addQueue(file,filename):
#     print(file)
#     row_count = sum(1 for row in file) - 1
#     print("row_count:", row_count)
#     TASK_QUEUE.append([filename,row_count])
#     print("TASK QUEUE AFTER APPEND:", TASK_QUEUE)

#     return TASK_QUEUE

# def print_date_time():
#     print(time.strftime("%A, %d. %B %Y %I:%M:%S %p"))
#     time.sleep(5)


# scheduler = BackgroundScheduler()
# scheduler.add_job(func=print_date_time, trigger="interval", seconds=5)
# scheduler.start()

# # # Shut down the scheduler when exiting the app
# atexit.register(lambda: scheduler.shutdown())


scheduler = BackgroundScheduler()
scheduler.start()

@scheduler.scheduled_job(IntervalTrigger(seconds=2))
def func_to_be_executed():
    now = datetime.datetime.now()
    print("now:", now, TASK_QUEUE)
#   pass


if __name__ == "__main__":
   app.run(debug=True, use_reloader=False)
# app.run(debug=True, use_reloader=False)
