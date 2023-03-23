import subprocess
import datetime
import requests
import re


now = datetime.datetime.now()
dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
# ip_address = str(ip_doc["ip_address"])
ip_address = "1.1.1.1"
# ip_address = "2.1.1.1"
# db_id = ip_doc['_id']  


for protocol in ["http", "https"]:

        if protocol == "http":
                filepath = "resources/html/*ip*_http_*dt_string*.html"
                filepath = filepath.replace('*ip*', ip_address)
                filepath = filepath.replace('*dt_string*', dt_string)
                query = "curl -i http://{ip} --create-dirs -o {filepath}".format(ip=ip_address, filepath = filepath)

        elif protocol == "https":
                filepath = "resources/html/*ip*_https_*dt_string*.html"
                filepath = filepath.replace('*ip*', ip_address)
                filepath = filepath.replace('*dt_string*', dt_string)
                query = "curl -i https://{ip} --create-dirs -o {filepath}".format(ip=ip_address, filepath = filepath)
                # query = "curl -i https://{ip}".format(ip=ip_address)


        try:
                response = subprocess.run(query, shell=False, capture_output=True, text=True)
        except Exception as e:
                print("grab_html_js() exception triggered:", e)
                e

        returncode = response.returncode

        if returncode == 0:

                ## extract javascripts
                with open(filepath) as f:
                        contents = f.read()
                        scriptlis = re.findall('(?si)src="(.*?).js"', contents)
                        print(scriptlis)
                        # >>> re.search(r'Part 1\.(.*?)Part 3', s).group(1)
# src="/site-16bcc13e690cc771698c.js"></script></body></html>

                       

        # returncode = response.returncode
        # stdout = response.stdout
        # stderr = response.stderr
        # print("response;", response)
        # print("response.returncode:", returncode)
        # print("response.stderr++++++:", stderr)
        # print("response.stdout++++++:", stdout) ## nothing for 2.1.1.1 , INFO WE WANT FOR 1.1.1.1

# if returncode == 0:
#         ip_doc['has_html'] = 1
#         to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "file_location":filepath}
#         ip_doc['files_log'].append({protocol:to_append})

# # ## else indicate its not good 
# else:
#         ip_doc['has_html'] = 0
#         to_append = {"type": protocol, "stderr": response.stderr, "stdout": response.stdout, "file_location": None}
#         # ip_doc['files'] = [to_append]
#         ip_doc['files_log'].append({protocol:to_append})




#     print("response.stderr++++++:", response.stderr)  ## timeout for 2.1.1.1 , Info we dont really want for 1.1.1.1cu


#     print("response.stdout++++++:", response.stdout) ## nothing for 2.1.1.1 , INFO WE WANT FOR 1.1.1.1

    # if returncode == 0:
    #     ip_doc['has_html'] = 1
    #     to_append = {"type":"html", "stderr": response.stderr, "stdout": response.stdout, "file_location":filepath}

    # #     # to_append = {"type":"screenshot", "stderr": response.stderr, "stdout": response.stdout, "file_location":filepath}
    # #     # ip_doc['files'] = [to_append]

    # # # ## else indicate its not good 
    # else:
    #     ip_doc['has_html'] = 0
    #     # to_append = {"type":"screenshot", "stderr": response.stderr, "stdout": response.stdout, "file_location": None}
    #     # ip_doc['files'] = [to_append]



# # # query.replace

# # response = subprocess.run(query_https)
# # response = subprocess.run(query_http, stdout=subprocess.DEVNULL)
# result = subprocess.run(query_http, shell=False, capture_output=True, text=True)
# print("result.stderr++++++:", result.stderr)
# print("result.stdout++++++:", result.stdout)
# print("return code:", result.returncode)
# # # print(response)
# # for each in response:
# #     print(each)


# #screenshot code
# now = datetime.datetime.now()
# dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
# input_ip = "1.1.1.1"

# filepath = "resources/shot-scraper/*ip*_*dt_string*.png"
# filepath = filepath.replace('*ip*', input_ip)
# filepath = filepath.replace('*dt_string*', dt_string)



# # shot_scraper_query = "shot-scraper {ip} --wait 3000 -o {filepath}".format(ip=input_ip, filepath = filepath)
# shot_scraper_query = "shot-scraper {ip} -o {filepath}".format(ip=input_ip, filepath = filepath)


# # print(shot_scraper_query)

# try:
#     return_code = subprocess.run(shot_scraper_query, shell=False, capture_output= True , text=True)
# except Exception as e:
#     print("exception triggered e:", e)
#     print(type(e))
#     print(e)
    
# print("return_code.stderr++++++:", return_code.stderr)
# print("return_code.stdout++++++:", return_code.stdout)

# # print("stderr:", return_code.stderr.decode())
# # print("stdout:", return_code.stdout.decode())
# # print("hello")
# # print("return_code:", return_code)
# # print("type:", type(return_code))
# # print("return_code:", return_code.returncode)

