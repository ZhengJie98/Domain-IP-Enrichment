from urllib.parse import urlparse


# url = 'www.mabangerp.plus/#/login'
# url = 'beepmall.app/#/pages/login/login'
url = "app-a1.ztajhi.cn/s/mlenderios?key=646S56376F6G465D31376383333M031R333X732C39&c=reschedule-track.com/secureJsp.php?&URI=1a78e09b36dd9349af6a929c067e7a85&sessionid=58a7e760c929a6fa9439dd63b90e87a1&securessl=true"
# url = "www.facebook.com/hehe"
# url = "xxmtkm.info/final-draft-coordinated-public-transportation-plan-released-for-review-comment/?"
o = urlparse(url)
print(o)
# domain = o.path
# print(domain == url)
# print(o.geturl())

def screenshot(doc):
    
    print("===== screenshot function start =====")
    with open(config.CURR_LOGFILE,'a+') as logfile:
        logfile.write("===== screenshot function start =====\n")


        tic = time.perf_counter()
        now = datetime.datetime.now()
        dt_string = now.strftime("%Y%m%d_%H%M%S.%f")[:-3]   
        
        if "ip_address" in doc:
            # is_ip = 1 # if its ip 
            ip_or_domain = str(doc["ip_address"])
        
        elif "domain" in doc:
            # is_domain = 1 #if its domain
            ip_or_domain = str(doc["domain"])
            
        db_id = doc['_id']  

        for protocol in ["http", "https"]:

            filepath = "resources/shot-scraper/*ip_or_domain*_*protocol*_*dt_string*.png"
            filepath = filepath.replace('*ip_or_domain*', ip_or_domain)
            filepath = filepath.replace('*protocol*', protocol)
            filepath = filepath.replace('*dt_string*', dt_string)

            query = "shot-scraper {protocol}://{ip_or_domain} --wait 3000 -o {filepath}".format(protocol=protocol, ip_or_domain=ip_or_domain, filepath = filepath)
            
            try:
                response = subprocess.run(query, shell=False, capture_output=True, text=True)
            except Exception as e:
                print("screenshot() exception triggered:", e)
                logfile.write("screenshot() exception triggered: {e}\n".format(e=e))

                e
            
            returncode = response.returncode

            # ## store in db
            if returncode == 0:
                doc['has_screenshot'] = 1
                to_append = {"type": protocol + "_screenshot", "stderr": response.stderr, "stdout": response.stdout, "ss_file_location":filepath}

                ## proceed to extract js 


                # ip_doc['files_log'] = [to_append]

            # ## else indicate its not good 
            else:
                if doc['has_screenshot'] != 1:
                    doc['has_screenshot'] = 0
                to_append = {"type": protocol + "_screenshot", "stderr": response.stderr, "stdout": response.stdout, "ss_file_location": None}
                # ip_doc['files'] = [{"screenshot":to_append}]
                # ip_doc['files_log'] = [{"screenshot":to_append}]
                # ip_doc['files_log'] = [to_append]

            #first iteration
            if protocol == "http":
                doc['files_log'] = [to_append]
            else:
                doc['files_log'].append(to_append)

        toc = time.perf_counter()
        doc['duration_log']['screenshot'] = toc-tic
        logfile.write("duration_log screenshot: {time}\n".format(time=toc-tic))

            # print("screenshot() ip_doc:", ip_doc)
        print("===== screenshot function end =====")
        logfile.write("===== screenshot function end =====\n")
        return doc