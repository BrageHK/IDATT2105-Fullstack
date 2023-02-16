from flask import Flask, Response, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        return Response("", status=201, mimetype='application/json')
    else:
        return "<h1>yo</h1>"