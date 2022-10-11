from flask import Flask
def create_app(__Iodah__):
    app = Flask(__Iodah__)
    app.config['SECRET_KEY'] = 'the secret key is this'
    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    return app
