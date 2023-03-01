from flask import Flask, request, jsonify, flash, redirect, url_for
from os.path import join, dirname, realpath
from werkzeug.utils import secure_filename
from model.ipService import *
import time
import datetime
import atexit
from apscheduler.schedulers.background import BackgroundScheduler

# UPLOAD_FOLDER = '/uploaded_files'
UPLOAD_FOLDER = join(dirname(realpath(__file__)), 'upload_folder')
ALLOWED_EXTENSIONS = {'csv'}
DAILY_LIMIT = 500
TASK_QUEUE = [] ## Array of Arrays [filename,]

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route("/")
def hello_world():
    print("request received")
    print("hehehe")
    return "<p>Hello, World!</p>"


@app.route("/uploadIP", methods=['POST'])
def ip_vt_call():
    if request.method == 'POST':
        file = request.files['file']
        saveFileResponse = saveFile(file)
        # process_iplist(file, 0,7)
        return saveFileResponse
    
@app.route("/test", methods=['POST'])
def test():
    print("=====TEST FUNCTION CALLED=====")
    print("CURRENT TASK_QUEUE:", TASK_QUEUE)
    if request.method == 'POST':
        file = request.files['file']
        filename = secure_filename(file.filename)
        row_count = sum(1 for row in file) - 1
        print("number of rows in file:", row_count)
        TASK_QUEUE.append([filename,row_count])
        print("TASK QUEUE AFTER APPEND:", TASK_QUEUE)
    

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

    TASK_QUEUE.append([filename,row_count])
    # response = [file,filename]
    return jsonify(TASK_QUEUE) 

# def addQueue(file,filename):
#     print(file)
#     row_count = sum(1 for row in file) - 1
#     print("row_count:", row_count)
#     TASK_QUEUE.append([filename,row_count])
#     print("TASK QUEUE AFTER APPEND:", TASK_QUEUE)

#     return TASK_QUEUE

def print_date_time():
    print(time.strftime("%A, %d. %B %Y %I:%M:%S %p"))
    time.sleep(5)


scheduler = BackgroundScheduler()
scheduler.add_job(func=print_date_time, trigger="interval", seconds=5)
scheduler.start()

# Shut down the scheduler when exiting the app
atexit.register(lambda: scheduler.shutdown())

if __name__ == "__main__":
    app.run(debug=True)