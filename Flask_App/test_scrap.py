from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import requests

# from PIL import Image
# from Screenshot import Screenshot

# driver = webdriver.Chrome(executable_path = "Flask_App\resources\chromedriver.exe")
# url = "https://1.1.1.1/"
# driver.get(url)
# driver.save_screenshot("ss.png")
# screenshot = Image.open("ss.png")
# screenshot.show()


# ob = Screenshot.Screenshot()
# options = webdriver.ChromeOptions()
# options.add_experimental_option('excludeSwitches', ['enable-logging'])
# driver = webdriver.Chrome(options=options)
# # driver = webdriver.Chrome()
# url = "https://1.1.1.1"
# driver.get(url)
# img_url = ob.full_Screenshot(driver, save_path=r'.', image_name='Myimage.png')
# print(img_url)
# driver.close()

# driver.quit()

# def save_screenshot(driver: webdriver.Chrome, path: str = 'screenshot.png') -> None:
#     # Ref: https://stackoverflow.com/a/52572919/
#     original_size = driver.get_window_size()
#     required_width = driver.execute_script('return document.body.parentNode.scrollWidth')
#     required_height = driver.execute_script('return document.body.parentNode.scrollHeight')
#     driver.set_window_size(required_width, required_height)
#     # driver.save_screenshot(path)  # has scrollbar
#     driver.find_element(By.TAG_NAME, "body").screenshot(path)# avoids scrollbar
#     driver.set_window_size(original_size['width'], original_size['height'])

# driver = webdriver.Chrome()
# driver.get("https://1.1.1.1")
# time.sleep(5)
# save_screenshot(driver)

# URL = 'http://1.1.1.1'

# options = webdriver.ChromeOptions()
# options.headless = True

# driver = webdriver.Chrome(options=options)
# driver.get(URL)

# S = lambda X: driver.execute_script('return document.body.parentNode.scroll'+X)
# driver.set_window_size(S('Width'),S('Height')) # May need manual adjustment
# # driver.find_element_by_tag_name('body').screenshot('web_screenshot.png')
# driver.find_element(By.TAG_NAME, "body").screenshot("screenshot.png")# avoids scrollbar


# driver.quit()


#coding=utf-8                                                                                                                                                                              
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options


options = webdriver.ChromeOptions()
options.headless = True
driver = webdriver.Chrome(options=options)

# URL = 'https://pythonbasics.org'
URL = 'https://1.1.1.1'


driver.get(URL)

S = lambda X: driver.execute_script('return document.body.parentNode.scroll'+X)
driver.set_window_size(S('Width'),S('Height')) # May need manual adjustment                                                                                                                
# driver.find_element_by_tag_name('body').screenshot('web_screenshot.png')
driver.find_element(By.TAG_NAME, "body").screenshot("screenshot.png")# avoids scrollbar
pageurl=driver.current_url
page = requests.get(pageurl)
pagecontent=page.content

# print(pagecontent)

driver.quit()