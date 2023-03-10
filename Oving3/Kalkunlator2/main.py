from flask import Flask, Response, request
from flask_cors import CORS

#pip3 install flask
#pip3 install flask_cors
#python3 -m flask --app main run

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        return Response("", status=201, mimetype='application/json')
    else:
        return "<h1>yo</h1>"