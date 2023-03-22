import subprocess
import datetime

now = datetime.datetime.now()
dt_string = now.strftime("%Y%m%d")  
input_ip = "2.1.1.1"

filepath = "resources/shot-scraper/*ip*_*dt_string*.png"
filepath = filepath.replace('*ip*', input_ip)
filepath = filepath.replace('*dt_string*', dt_string)



# shot_scraper_query = "shot-scraper {ip} --wait 3000 -o {filepath}".format(ip=input_ip, filepath = filepath)
shot_scraper_query = "shot-scraper {ip} -o {filepath}".format(ip=input_ip, filepath = filepath)


# print(shot_scraper_query)

try:
    return_code = subprocess.run(shot_scraper_query, shell=False, check= True)
except Exception as e:
    print("exception triggered e:", e)
    print(e)

# print(return_code.stderr)
# print(return_code.stdout)
# print("hello")
# print("return_code:", return_code)
# print("type:", type(return_code))
# print("return_code:", return_code.returncode)




# shot_scraper_query2 = "shot-scraper "
# shot_scraper_query2 += "2.1.1.1"

# try:
#     return_code2 = subprocess.run(shot_scraper_query2, shell=False)
# except Exception as e:
#     print(e)
# print("hello")
# print("return_code2:", return_code2)
