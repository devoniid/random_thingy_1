from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/math')
def math():
    return render_template("math.html")
@views.route('/reading')
def reading():
    return render_template("reading.html")
@views.route('/science')
def science():
    return render_template("science.html")
@views.route('/social_studies')
def social_studies():
    return render_template("social_studies.html")