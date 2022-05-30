from flask import Flask
from flask.helpers import send_from_directory
from waitress import serve

app = Flask(__name__, static_folder="build", static_url_path="/")


@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/api")
def hello_world():
    return {"data": "hello esowc!"}


def run_server():
    print("Starting CliMetLab server.")
    print("Running on http://127.0.0.1:8080 (Press CTRL+C to quit)")
    serve(app, host="127.0.0.1", port=8080)


if __name__ == "__main__":
    run_server()
