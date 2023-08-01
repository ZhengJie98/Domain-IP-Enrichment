from flask import Flask, request, jsonify, flash, redirect, url_for, render_template, send_file, make_response, session 
from flask_paginate import Pagination, get_page_args
from flask_bootstrap import Bootstrap
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
from apscheduler.triggers.cron import CronTrigger
from flask_login import LoginManager, UserMixin, login_user, logout_user
import bcrypt



# import os


# UPLOAD_FOLDER = '/uploaded_files'
UPLOAD_FOLDER = join(dirname(realpath(__file__)), 'upload_folder')
ALLOWED_EXTENSIONS = {'csv'}
# DAILY_LIMIT = 500
# TASK_QUEUE = [] ## Array of Arrays [filename,]
X_DAYS_AGO = 7


# client = MongoClient('localhost',27017)
client = MongoClient('mongodb://readWrite:%20mongo1DB%20@18.141.141.56:27017/')

# db = client['filtered_sg_ip_list']
# col = db["ip"]
    

app = Flask(__name__)
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

# db = client['michelle_list']
# db=client.get_database('michelle_list')
# records = db.register

# crontab = Crontab(app)
# db = client['michelle_list']
# collection = "mirai_aurora_deimos"



@app.route('/test')
def test():
    return "testing test"

@app.route('/home')
def home():
    if "email" not in session:
        return redirect(url_for("login"))
    
    return render_template('home.html')


@app.route('/uploadcsv', methods=['GET','POST'])
def uploadcsv():
   if "email" not in session:
        return redirect(url_for("login"))
   
   if request.method == 'POST':
        # Check if a file was uploaded
        if 'csv_file' in request.files:
            csv_file = request.files['csv_file']
            # Process the uploaded CSV file
            # For example, you can save it to a specific directory or perform further operations
            
            # Assuming you want to save the file in a folder called "uploads"
            # csv_file.save('uploads/' + csv_file.filename)

            # Get the selected radio button value
            data_type = request.form.get('data_type')

            # Perform further processing based on the radio button value
            if data_type == 'ip_address':
                # Include IP address in processing logic
                return_json = save_ipfile(csv_file)
                # pass
            elif data_type == 'domain_url':
                # Include domain/URL in processing logic
                return_json = save_domainfile(csv_file)
                # pass

            # Redirect to a success page or perform further processing
            return render_template('success.html', filename=return_json['filename'])
        
        # If no file was uploaded, display an error message
        return 'No CSV file selected.'
   return render_template('uploadcsv.html')

# def get_records(page_number, page_size):
#     db = client['michelle_list']
#     # collection = db['may12_ips']
#     # collection = db['mirai_aurora_deimos']
#     collection = db["testing"]

#     skip_count = (page_number - 1) * page_size
#     records = collection.find().skip(skip_count).limit(page_size)
#     return records

# @app.route('/showrecords')
# def showrecords():
#     print("hello")
#     page = int(request.args.get('page', 1))
#     print("current page:",page)
#     page_size = 10  # Number of records per page
#     records = get_records(page, page_size)
#     # print(records)

#     db = client['michelle_list']
#     # collection = db['may12_ips']
#     # collection = db['mirai_aurora_deimos']
#     collection = db["testing"]

#     total_records = len(list(collection.find()))  # Total number of records in your database
#     total_pages = (total_records + page_size - 1) // page_size
#     # print("total_pages:", total_pages)

#     has_prev = page > 1
#     prev_page = page - 1 if has_prev else None

#     has_next = page < total_pages
#     next_page = page + 1 if has_next else None

#     pages = range(1, total_pages + 1)

#     # paginated_records = records  # Modify this based on your pagination logic
#     start_index = (page - 1) * page_size
#     print("start index:", start_index)
#     end_index = start_index + page_size
#     print("end index:", end_index)
#     paginated_records = records[start_index:end_index]

#     return render_template('showrecords.html', paginated_records=paginated_records, has_prev=has_prev,
#                            prev_page=prev_page, has_next=has_next, next_page=next_page,
#                            current_page=page, pages=pages, total_pages = total_pages)

# @app.route('/uploadcsv', methods=['GET','POST'])
# def uploadcsv():
#    if request.method == 'POST':
#         # Check if a file was uploaded
#         if 'csv_file' in request.files:
#             csv_file = request.files['csv_file']
#             # Process the uploaded CSV file
#             # For example, you can save it to a specific directory or perform further operations
            
#             # Assuming you want to save the file in a folder called "uploads"
#             # csv_file.save('uploads/' + csv_file.filename)

#             # Get the selected radio button value
#             data_type = request.form.get('data_type')

#             # Perform further processing based on the radio button value
#             if data_type == 'ip_address':
#                 # Include IP address in processing logic
#                 return_json = save_ipfile(csv_file)
#                 # pass
#             elif data_type == 'domain_url':
#                 # Include domain/URL in processing logic
#                 return_json = save_domainfile(csv_file)
#                 # pass

#             # Redirect to a success page or perform further processing
#             return render_template('success.html', filename=return_json['filename'])
        
#         # If no file was uploaded, display an error message
#         return 'No CSV file selected.'
#    return render_template('uploadcsv.html')

def get_iprecords(page_number, page_size):
    
    db = client['michelle_list']
    # collection = db['may12_ips']
    # collection = db['mirai_aurora_deimos']
    collection = db["testing"]


    skip_count = (page_number - 1) * page_size
    records = collection.find({"ip_address": {"$exists":"true"}}).skip(skip_count).limit(page_size)
    return records

@app.route('/showiprecords')
def showiprecords():
    if "email" not in session:
        return redirect(url_for("login"))
    print("hello")
    page = int(request.args.get('page', 1))
    # print("current page:",page)
    page_size = 10  # Number of records per page
    records = get_iprecords(page, page_size)
    # keys = get_keys(records)
    # print("keys:", keys)
    # print(records)

    db = client['michelle_list']
    # collection = db['may12_ips']
    # collection = db['mirai_aurora_deimos']
    collection = db["testing"]

    total_records = len(list(collection.find({"ip_address": {"$exists":"true"}})))  # Total number of records in your database
    
    documents = collection.find({"ip_address": {"$exists":"true"}})
    unique_keys = set()
    for document in documents:
        unique_keys.update(document.keys())
    unique_keys = list(unique_keys)

    # print("unique_keys:", unique_keys)
    total_pages = (total_records + page_size - 1) // page_size
    # print("total_pages:", total_pages)

    has_prev = page > 1
    prev_page = page - 1 if has_prev else None

    has_next = page < total_pages
    next_page = page + 1 if has_next else None

    pages = range(1, total_pages + 1)

    # paginated_records = records  # Modify this based on your pagination logic
    start_index = (page - 1) * page_size
    print("start index:", start_index)
    end_index = start_index + page_size
    print("end index:", end_index)
    paginated_records = records[start_index:end_index]

    return render_template('showiprecords.html', paginated_records=paginated_records, has_prev=has_prev,
                           prev_page=prev_page, has_next=has_next, next_page=next_page,
                           current_page=page, pages=pages, total_pages = total_pages, unique_keys=unique_keys, type_header="ip_address")


def get_filtered_records(filter_header, filter_value, page, page_size, type_header):
    # collection = db['mirai_aurora_deimos']
    collection = db["testing"]
    print("type_header in get_filtered_records:", type_header)
    # print("filter_header", filter_header)
    # print("filter_value:", filter_value)
    # retrieved_records = collection.find({type_header: {"$exists":"true"}})
    # filtered_records = []
    # for record in retrieved_records:
    #     print("str(record[filter_header]", str(record[filter_header]))
    #     if filter_header in record and str(record[filter_header]) == filter_value:
    #         filtered_records.append(record)
    filtered_records = [record for record in collection.find({type_header: {"$exists":"true"}}) if filter_header in record and str(record[filter_header]) == filter_value]
    print("retrieved get_filtered_records", len(filtered_records))
    return filtered_records

@app.route('/filter')
def apply_filter_route():
    if "email" not in session:
        return redirect(url_for("login"))
    filter_header = request.args.get('filter_header')
    filter_value = request.args.get('filter_value')
    type_header = request.args.get('type_header')
    print("filter_header:", filter_header)
    print("filter_value:", filter_value)
    print("typeheader in apply_filter_route:", type_header)

    page = int(request.args.get('page', 1))
    page_size = 10  # Number of records per page
    print("current page in filter:", page)

    filtered_records = get_filtered_records(filter_header, filter_value, page, page_size, type_header)

    documents = filtered_records
    unique_keys = set()
    for document in documents:
        unique_keys.update(document.keys())
    unique_keys = list(unique_keys)


    total_records = len(filtered_records)
    print("in apply filter route, len(filtered_records)", total_records)
    total_pages = (total_records + page_size - 1) // page_size

    has_prev = page > 1
    prev_page = page - 1 if has_prev else None

    has_next = page < total_pages
    next_page = page + 1 if has_next else None

    pages = range(1, total_pages + 1)

    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    paginated_records = filtered_records[start_index:end_index]

    return render_template('showfilteredrecords.html', paginated_records=paginated_records, has_prev=has_prev,
                       prev_page=prev_page, has_next=has_next, next_page=next_page,
                       current_page=page, pages=pages, total_pages=total_pages,
                       filter_header=filter_header, filter_value=filter_value, type_header=type_header, unique_keys=unique_keys)


def get_domainrecords(page_number, page_size):
    db = client['michelle_list']
    # collection = db['may12_ips']
    # collection = db['mirai_aurora_deimos']
    collection = db["testing"]

    skip_count = (page_number - 1) * page_size
    records = collection.find({"domain": {"$exists":"true"}}).skip(skip_count).limit(page_size)
    return records

@app.route('/showdomainrecords')
def showdomainrecords():
    if "email" not in session:
        return redirect(url_for("login"))
    # print("hello")
    page = int(request.args.get('page', 1))
    # print("current page:",page)
    page_size = 10  # Number of records per page
    records = get_domainrecords(page, page_size)
    # print(records)

    db = client['michelle_list']
    # collection = db['may12_ips']
    # collection = db['mirai_aurora_deimos']
    collection = db["testing"]

    total_records = len(list(collection.find({"domain": {"$exists":"true"}})))  # Total number of records in your database
    total_pages = (total_records + page_size - 1) // page_size
    # print("total_pages:", total_pages)

    documents = collection.find({"domain": {"$exists":"true"}})
    unique_keys = set()
    for document in documents:
        unique_keys.update(document.keys())
    unique_keys = list(unique_keys)


    has_prev = page > 1
    prev_page = page - 1 if has_prev else None

    has_next = page < total_pages
    next_page = page + 1 if has_next else None

    pages = range(1, total_pages + 1)

    # paginated_records = records  # Modify this based on your pagination logic
    start_index = (page - 1) * page_size
    print("start index:", start_index)
    end_index = start_index + page_size
    print("end index:", end_index)
    paginated_records = records[start_index:end_index]

    return render_template('showdomainrecords.html', paginated_records=paginated_records, has_prev=has_prev,
                           prev_page=prev_page, has_next=has_next, next_page=next_page,
                           current_page=page, pages=pages, total_pages = total_pages, unique_keys=unique_keys, type_header="domain")

# def get_filtered_records(filter_header, filter_value, page, page_size):
#     # collection = db['mirai_aurora_deimos']
#     collection = db["testing"]
#     filtered_records = [record for record in collection.find() if filter_header in record and str(record[filter_header]) == filter_value]
#     print("retrieved get_filtered_records", len(filtered_records))
#     return filtered_records

# @app.route('/filter')
# def apply_filter_route():
#     filter_header = request.args.get('filter_header')
#     filter_value = request.args.get('filter_value')
#     print("filter_header:", filter_header)
#     print("filter_value:", filter_value)

#     page = int(request.args.get('page', 1))
#     page_size = 10  # Number of records per page
#     print("current page in filter:", page)

#     filtered_records = get_filtered_records(filter_header, filter_value, page, page_size)

#     total_records = len(filtered_records)
#     print("in apply filter route, len(filtered_records)", total_records)
#     total_pages = (total_records + page_size - 1) // page_size

#     has_prev = page > 1
#     prev_page = page - 1 if has_prev else None

#     has_next = page < total_pages
#     next_page = page + 1 if has_next else None

#     pages = range(1, total_pages + 1)

#     start_index = (page - 1) * page_size
#     end_index = start_index + page_size
#     paginated_records = filtered_records[start_index:end_index]

#     return render_template('showfilteredrecords.html', paginated_records=paginated_records, has_prev=has_prev,
#                        prev_page=prev_page, has_next=has_next, next_page=next_page,
#                        current_page=page, pages=pages, total_pages=total_pages,
#                        filter_header=filter_header, filter_value=filter_value)


@app.route('/exportcsv')
def export_csv():
    db = client['michelle_list']
    # collection = db['mirai_aurora_deimos']
    collection = db["testing"]

    type_header = request.args.get('type_header')
    print("type in exportcsv:", type_header)

    records = list(collection.find({type_header: {"$exists":"true"}}))

    documents = records
    unique_keys = set()
    for document in documents:
        unique_keys.update(document.keys())
    unique_keys = list(unique_keys)
    # Define the CSV file path
    csv_file = 'records.csv'

    # Define the column to exclude
    excluded_column = 'files_log'

    # Prepare the CSV file
    with open(csv_file, 'w', newline='') as file:
        writer = csv.writer(file)

        # Get the header row excluding the excluded column
        # header_row = list(records[0].keys())
        header_row = unique_keys
        header_row.remove(excluded_column)
        writer.writerow(header_row)

        # Write the data rows excluding the excluded column
        for record in records:
            row_list = []
            for key in header_row:
                if key in record:
                    row_list.append(record[key])
                else:
                    row_list.append("")
            # values = list(record.values())
            # values.remove(record.get(excluded_column, ''))
            # writer.writerow(values)
            writer.writerow(row_list)

    # Set the Content-Disposition header
    headers = {
        "Content-Disposition": "attachment; filename=records.csv"
    }

    # Create a response with the CSV file
    response = make_response(send_file(csv_file, mimetype='text/csv'))
    response.headers = headers

    return response

@app.route('/export_filtered_csv')
def export_filtered_csv():
    print("export filtered csv starts")
    filter_header = request.args.get('filter_header')
    filter_value = request.args.get('filter_value')
    type_header = request.args.get('type_header')

    print("filter_header:", filter_header)
    print("filter_value:", filter_value)
    print("type_header:", type_header)

    db = client['michelle_list']
    # collection = db['mirai_aurora_deimos']
    collection = db["testing"]


    # filtered_records = list(collection.find({filter_header: filter_value}))
    filtered_records = list(collection.find({"$and": [{filter_header: filter_value}, 
                          {type_header: {'$exists': True}}]}))
    filtered_records = [record for record in filtered_records if all(key is not None for key in record.keys())]
    if not filtered_records:
        return "No records found."


    documents = filtered_records
    unique_keys = set()
    for document in documents:
        unique_keys.update(document.keys())
    unique_keys = list(unique_keys)
    # Define the CSV file path
    csv_file = 'records.csv'

    # Define the column to exclude
    excluded_column = 'files_log'

    # Prepare the CSV file
    with open(csv_file, 'w', newline='') as file:
        writer = csv.writer(file)

        # Get the header row excluding the excluded column
        # header_row = list(records[0].keys())
        header_row = unique_keys
        header_row.remove(excluded_column)
        writer.writerow(header_row)

        # Write the data rows excluding the excluded column
        for record in filtered_records:
            row_list = []
            for key in header_row:
                if key in record:
                    row_list.append(record[key])
                else:
                    row_list.append("")
            # values = list(record.values())
            # values.remove(record.get(excluded_column, ''))
            # writer.writerow(values)
            writer.writerow(row_list)
            ########

    # Set the Content-Disposition header
    headers = {
        "Content-Disposition": "attachment; filename=filtered_records.csv"
    }

    # Create a response with the CSV file
    response = make_response(send_file(csv_file, mimetype='text/csv'))
    response.headers = headers

    return response

@app.route('/showrecordstwo', methods=['GET','POST'])
def showrecordstwo():
    # print("Current in showrecordstwo")
    df = showDB()
    print(df['ip_address'])
    page = int(request.args.get('page', 1))
    page_size = 10

    total_records = len(df)
    total_pages = (total_records + page_size - 1) // page_size

    has_prev = page > 1
    prev_page = page - 1 if has_prev else None

    has_next = page < total_pages
    next_page = page + 1 if has_next else None

    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    paginated_df = df.iloc[start_index:end_index]

    print("paginated_df",paginated_df['ip_address'])
    columns = paginated_df.columns.tolist()
    rows = paginated_df.values.tolist()

    return render_template('showrecordstwo.html', columns=columns, rows=rows,
                           has_prev=has_prev, prev_page=prev_page,
                           has_next=has_next, next_page=next_page,
                           current_page=page, pages=range(1, total_pages + 1))

# @app.route('/showrecordstwo', methods=['GET','POST'])
# def showrecordstwo():
#     # print("Current in showrecordstwo")
#     df = showDB()
#     print(df['ip_address'])
#     page = int(request.args.get('page', 1))
#     page_size = 10

#     total_records = len(df)
#     total_pages = (total_records + page_size - 1) // page_size

#     has_prev = page > 1
#     prev_page = page - 1 if has_prev else None

#     has_next = page < total_pages
#     next_page = page + 1 if has_next else None

#     start_index = (page - 1) * page_size
#     end_index = start_index + page_size

#     paginated_df = df.iloc[start_index:end_index]

#     print("paginated_df",paginated_df['ip_address'])
#     columns = paginated_df.columns.tolist()
#     rows = paginated_df.values.tolist()

#     return render_template('showrecordstwo.html', columns=columns, rows=rows,
#                            has_prev=has_prev, prev_page=prev_page,
#                            has_next=has_next, next_page=next_page,
#                            current_page=page, pages=range(1, total_pages + 1))



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

@app.route("/differentiateDomainUrl", methods=['GET'])
def differentiate_Domain_Url():
    result = differentiate_domain_url_only()
    return result

# @app.route("/exportDB", methods=['GET'])
# def export_DB():

#     result = export_db()
   
#     return result

@app.route("/process_without_vtcall", methods=['GET'])
def process_without_vtcall():

    result = process_parent_without_vtcall()
   
    return result

@app.route("/process_only_vtcall", methods=['GET'])
def process_only_vtcall():

    result = process_parent_only_vtcall()
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

# @app.route("/test", methods=['POST'])
# def test():

    
#     print("=====TEST FUNCTION CALLED=====")
#     cursor = retrieve_ips_to_process(3)
#     for each in cursor:
#         print("each:", each)

#             ## COMMENT OUT FOR ACTUAL
#             # break
        


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

## uncomment for scheduler till start
# scheduler = BackgroundScheduler()

# @scheduler.scheduled_job(CronTrigger(hour=20, minute=1))
# def func_to_be_executed():
#     now = datetime.datetime.now()
#     # print("now:", now)
#     process_parent()

# scheduler.start()


# @crontab.job(minute="*", hour="19", day="*", month="*", day_of_week="*")
# def my_scheduled_job():
#     print("hello")

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

def MongoDB():
    client = MongoClient('mongodb://readWrite:%20mongo1DB%20@18.141.141.56:27017/')
    db = client.get_database('testing')
    records = db.register
    return records
# records = MongoDB()


##Connect with Docker Image###
def dockerMongoDB():
    db = client.users
    pw = "test123"
    hashed = bcrypt.hashpw(pw.encode('utf-8'), bcrypt.gensalt())
    records = db.register
    # records.insert_one({
    #     "name": "Test Test",
    #     "email": "test@yahoo.com",
    #     "password": hashed
    # })
    return records

records = dockerMongoDB()

#assign URLs to have a particular route 
@app.route("/", methods=['post', 'get'])
def index():
    message = ''
    #if method post in index
    if "email" in session:
        return redirect(url_for("logged_in"))
    # if request.method == "POST":
    #     user = request.form.get("fullname")
    #     email = request.form.get("email")
    #     password1 = request.form.get("password1")
    #     password2 = request.form.get("password2")
    #     #if found in database showcase that it's found 
    #     user_found = records.find_one({"name": user})
    #     email_found = records.find_one({"email": email})
    #     if user_found:
    #         message = 'There already is a user by that name'
    #         return render_template('index.html', message=message)
    #     if email_found:
    #         message = 'This email already exists in database'
    #         return render_template('index.html', message=message)
    #     if password1 != password2:
    #         message = 'Passwords should match!'
    #         return render_template('index.html', message=message)
    #     else:
    #         #hash the password and encode it
    #         hashed = bcrypt.hashpw(password2.encode('utf-8'), bcrypt.gensalt())
    #         #assing them in a dictionary in key value pairs
    #         user_input = {'name': user, 'email': email, 'password': hashed}
    #         #insert it in the record collection
    #         records.insert_one(user_input)
            
    #         #find the new created account and its email
    #         user_data = records.find_one({"email": email})
    #         new_email = user_data['email']
    #         #if registered redirect to logged in as the registered user
    #         return render_template('logged_in.html', email=new_email)
    # return render_template('index.html')
    return redirect(url_for('login'))


@app.route("/login", methods=["POST", "GET"])
def login():
    message = 'Please login to your account'
    if "email" in session:
        return redirect(url_for("logged_in"))

    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        #check if email exists in database
        email_found = records.find_one({"email": email})
        if email_found:
            email_val = email_found['email']
            passwordcheck = email_found['password']
            #encode the password and check if it matches
            if bcrypt.checkpw(password.encode('utf-8'), passwordcheck):
                session["email"] = email_val
                return redirect(url_for('logged_in'))
            else:
                if "email" in session:
                    return redirect(url_for("logged_in"))
                message = 'Wrong password'
                return render_template('login.html', message=message)
        else:
            message = 'Email not found'
            return render_template('login.html', message=message)
    return render_template('login.html', message=message)

@app.route('/logged_in')
def logged_in():
    if "email" in session:
        email = session["email"]
        # return render_template('logged_in.html', email=email)
        # return render_template('home.html')
        return redirect(url_for("home"))
    else:
        return redirect(url_for("login"))

@app.route("/logout", methods=["POST", "GET"])
def logout():
    if "email" in session:
        session.pop("email", None)
        return render_template("signout.html")
    else:
        return render_template('index.html')



if __name__ == "__main__":
#    app.run(debug=True, port=5000, threaded=True)
    # app.run(debug=True, use_reloader=True, port=5000, threaded=True)
    app.run(debug=True, use_reloader=True, port=5000, threaded=True)
    # app.run(debug=True, use_reloader=True, port=5000, threaded=True, ssl_context='adhoc')

    # app.run(use_reloader=False, port=5000, threaded=True)

    # app.run(debug=True, use_reloader=False, port=5000)
