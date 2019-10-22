# flask_ros_demo
simple demo of flask and ros interaction. A node, "talker", publishes a message
containing the UNIX time to a ros topic, "chatter". A separate node, "server",
subscribes to this topic and runs a flask web server. This demonstrates a basic
interaction of a web server (flask) and ROS.

prerequisites: ubuntu 16.04, ROS kinetic, web browser, python, pip.

clone this repo into CATKIN_WS/src/

cd into repo (flask_ros_demo/flask_demo)

execute: "python -m virtualenv venv"

execute: ". venv/bin/activate"

execute "pip install -r requirements.txt"

execute "python -m pip install -r requirements.txt"

cd into root directory of catkin workspace

execute: ". devel/setup.bash"

to run:

execute: "roslaunch flask_demo demo.launch"

navigate to http://0.0.0.0:4996 in a web browser!


