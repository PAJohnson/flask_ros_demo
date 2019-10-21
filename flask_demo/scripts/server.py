#! /usr/bin/env python

import os
import rospy
import threading

from flask import Flask

from std_msgs.msg import String

hello_str = "test "

def ros_callback(msg):
	global hello_str
	hello_str = msg.data
	print(hello_str)

threading.Thread(target=lambda: rospy.init_node('example_node', disable_signals=True)).start()
rospy.Subscriber('chatter', String, ros_callback)

app = Flask(__name__)

@app.route('/')
def hello_world():
	global hello_str
	return "ros topic chatter says: " + str(hello_str)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4996)
