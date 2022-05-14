from flask import Flask
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder="build", static_url_path="/")


@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/api")
def hello_world():
    return {"data": "hello esowc!"}
