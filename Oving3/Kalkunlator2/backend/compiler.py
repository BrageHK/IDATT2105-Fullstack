from flask import Flask, Response, request
from flask_cors import CORS

import subprocess

app = Flask(__name__)
CORS(app)

@app.route("/compiler", methods=["GET", "POST"])
def hello_world():
    if request.method == "POST":
        input = request.json["code"]
        
        # Write the input to a file
        with open("./app.py", "w") as f:
            f.write(input)

        # Build and run the Docker image
        subprocess.run(["docker", "build", "-t", "my-image", "."])
        output = subprocess.run(["docker", "run", "my-image"], capture_output=True, text=True).stdout

        return Response(output, status=201, mimetype='text/plain')
    else:
        return "<h1>123</h1>"