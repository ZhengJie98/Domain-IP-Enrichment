import os 
# os.mkdir('resources/js')

print(os.path.exists('resources/js'))

with open('/resources/js/hehe.js', "w") as f:
                    
        # text_file = open(js_file_path, "w+")
    f.write("heheafdasf")
    f.close()