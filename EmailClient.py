
from __future__ import print_function
import httplib2
import os

from apiclient import discovery
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage

#New Imports
from email.mime.text import MIMEText
import base64
from apiclient import errors
import random
import time
from flask import Flask, render_template, redirect, url_for, request, flash, session
app = Flask(__name__, static_url_path='')
app.config['SECRET_KEY'] = 'secret!'

try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None

# If modifying these scopes, delete your previously saved credentials
# at ~/.credentials/gmail-python-quickstart.json
SCOPES = 'https://www.googleapis.com/auth/gmail.send'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'Python Gmail API'


def get_credentials():

    home_dir = os.path.expanduser('~')
    credential_dir = os.path.join(home_dir, '.credentials')
    if not os.path.exists(credential_dir):
        os.makedirs(credential_dir)
    credential_path = os.path.join(credential_dir,
                                   'gmail-python-quickstart.json')

    store = Storage(credential_path)
    credentials = store.get()
    if not credentials or credentials.invalid:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = APPLICATION_NAME
        if flags:
            credentials = tools.run_flow(flow, store, flags)
        else: # Needed only for compatibility with Python 2.6
            credentials = tools.run(flow, store)
        print('Storing credentials to ' + credential_path)
    return credentials

#Create Message
def create_message(sender, to, subject, message_text):

  message = MIMEText(message_text)
  message['to'] = to
  message['from'] = sender
  message['subject'] = subject
  return {'raw': base64.urlsafe_b64encode(message.as_string())}

#Send message
def send_message(service, user_id, message):

    try:
        message = (service.users().messages().send(userId=user_id, body=message).execute())
        print('Message Id: %s' % message['id'])
        return message
    except errors.HttpError as error:
        print('An error occurred: %s' % error)

@app.route("/sendEmail", methods=['GET', 'POST'])
def composeEmail():
    #name, email, body
    #request.form.get
    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    service = discovery.build('gmail', 'v1', http=http)

    sender = "jdefossett@gmail.com"
    subject = "Message from JDeffo-Web"
    to = "jdefosse@umail.iu.edu"
    #message_text = input.name + "\n\n" + input.body + "\n\n" + input.email
    message_text = "This is a test"

    msg = create_message(sender, to, subject, message_text)
    send_message(service, "me", msg)

@app.route('/')
def main():

    composeEmail()

if __name__ == '__main__':
        app.run(host=os.getenv('IP', '0.0.0.0'), port =int(os.getenv('PORT', 8080)), debug=True)
