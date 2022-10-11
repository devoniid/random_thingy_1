from flask import Flask
def create_app(__Iodah__):
    app = Flask(__Iodah__)
    app.config['SECRET_KEY'] = 'the secret key is this'
    return app
