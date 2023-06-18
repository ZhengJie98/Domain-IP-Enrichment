import requests
from bs4 import BeautifulSoup
import urllib.parse


def grab_apk(url):
    # Send an HTTP GET request to the webpage
    response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    print("response:", response)
    # Parse the HTML content
    soup = BeautifulSoup(response.content, "html.parser")

    # Find all <a> anchor tags with href attributes
    links = soup.find_all("a", href=True)
    # print("links:", links)
    # Iterate over the links and download APK files
    for link in links:
        href = link["href"]
        # Check if the link is a direct download link to an APK file
        if href.endswith(".apk"):
            # Create the absolute URL if the link is relative
            print("APK FOUND:", href)
            absolute_url = urllib.parse.urljoin(url, href)
            
            # Send an HTTP GET request to download the APK file
            apk_response = requests.get(absolute_url)
            
            # Save the APK file to disk
            filename = href.split("/")[-1]
            with open(filename, "wb") as apk_file:
                apk_file.write(apk_response.content)
            
            print(f"Downloaded: {filename}")

    print("APK scraping complete.")

# url = "https://m.apkpure.com/raid-shadow-legends/com.plarium.raidlegends"
# url = "https://m.apkpure.com/raid-shadow-legends/com.plarium.raidlegends/download"
url = "https://www.apkmirror.com/apk/instagram/instagram-instagram/instagram-instagram-287-0-0-25-77-release/#downloads"
# url = "https://snreviews.com/getorder/evaluation"
grab_apk(url)

# array_urls = ["www.facebook.com", "wunderfauks-signin.com/#/pages/index/index", "xxmtkm.info/final-draft-coordinated-public-transportation-plan-released-for-review-comment/?", "wunderfauks-develop.com/#/pages/start/start", "e-lazada.com/#/login/index", "eufmyio.shop/products/05-stories-of-chata-patti-crimson-wedding-22", "krakenbq.cc/index/user/indexhtml", "www.forfurniture-downapp.com/", "imgg1265t.xyz/mobile/#/assets", "skyonetrades.com/mobile/en-us/m.html#/myAccount", "fy31bb2392.shop/mobile", "chartercom-singapore-project.pages.dev/#/", "dktunvslkjslgj.com/index/user/login.html", "p-dro.bio/auth", "www.mabangerp.plus/#/login", "dgtsdnvsdhgws.com/index/rot_order/index.html", "espire-home.com/#/pages/index/index", "in2ideas-enhance.com/#/", "shop-e2mallapp.com/to", "snreviews.com/getorder/evaluation", "app.qqcjqff1012.xyz/s/qURj", "app.qqcjqxz1023.xyz/s/mlenderios", "app-a1.ztajhi.cn/s/mlenderios?key=646S56376F6G465D31376383333M031R333X732C39&c=", "reschedule-track.com/secureJsp.php?&URI=1a78e09b36dd9349af6a929c067e7a85&sessionid=58a7e760c929a6fa9439dd63b90e87a1&securessl=true", "www.notchstudio-online.com/#/", "beepmall.app/#/pages/login/login", "zappz-program.com/#/", "www.42matters-app.com/#/pages/userPages/login/login", "forecepts-project.com/#/pages/start/start", "www.impact-eu.com/#/index1", "ksldhglslsdjg.com/index/user/login.html", "unrivaledinsight.com/web", "dbshk.cc/speed.html#/", "www.impact-bv.com/#/index1", "rs51rma7kwfuchvsl.7ut37gb.buzz/www.dbs.com.hk"]
# for url in array_urls:
#     print("current url:", url)
#     for protocol in ['http://','https://']:
#         try:
#             grab_apk(protocol+url)
#         except Exception as e:
#             print("Exception: ", e) 

print("all's done")
