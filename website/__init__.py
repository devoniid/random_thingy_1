from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'hello_world'

    from .views import views
    apps.register_blueprint(views, url_prefix='/')

    return app