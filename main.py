from EmailClient import *
from flask import Flask, render_template, request, redirect, Response
import random, json
from flask_cors import *
app = Flask(__name__)
CORS(app)
#cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/sendInquiry', methods = ['POST'])
def sendInquiry():
    data = request.get_json()
    print(data)
    subj = "Inquiry"
    msg = """
    Name: {}
    Email: {}
    Message: {}
    """
    send_inquiry(subj, msg.format(data['name'], data['email'], data['message']))
    #send_inquiry(subj, "TestMessage")

if __name__ == "__main__":
	#app.run("0.0.0.0", "5000")
    app.run()
