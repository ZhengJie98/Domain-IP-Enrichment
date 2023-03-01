msg = "hello"

def test():
    global msg
    msg = "bye"
    print("msg inside function", msg)

print(msg)
test()
print(msg)