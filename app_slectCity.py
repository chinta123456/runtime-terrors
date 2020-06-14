from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import os

# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/cityDB")


# Route that will trigger the scrape function
@app.route("/home")
# def home():

# if __name__ == "__main__":
#     app.run(debug=True)

@app.route("/selectedCity")
def busyMonths():
    city = "NYC"
    query_results = mongo.db.busyMonths_VF.find({city: { "$exists": True }})
    top5 = {"result": []}
    i = 0
    for item in query_results:
        if (i < 5):
            top5["result"].append(item[city])
            i = i + 1
    return(top5)

    # Redirect back to home page
    return redirect("/")

if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'), 
            port=int(os.getenv('PORT', 4444)),
            debug=True)

