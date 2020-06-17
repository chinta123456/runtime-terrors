from flask import Flask, render_template, redirect, jsonify, request
from flask_pymongo import PyMongo
import os
from flask_cors import CORS

# Create an instance of Flask
app = Flask(__name__)
CORS(app)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb+srv://marissacasazza:1234567890@cluster0-bmjvi.mongodb.net/<dbname>?retryWrites=true&w=majority")

#Route that will take you to home page
@app.route('/')
def index():
    return render_template('/index.html')

# Route that will trigger the scrape function

@app.route("/citydata", methods=["GET", "POST"])
def city():

    selcity = request.args.get("city")

    # # bring in the busiest month data
    query_results = mongo.db.busyMonths_VF.find({selcity: { "$exists": True }})
    top5 = {"result": []}
    i = 0
    for item in query_results:
        if (i < 5):
            del item['_id']
            top5["result"].append(item[selcity])
            i = i + 1

    ##bringing in pub data
    pub_results = mongo.db.pubs.find({selcity: { "$exists": True }})
    top5pubs = {"result": []}
    i = 0
    for pub in pub_results:
        if (i < 5):
            del pub['_id']
            top5pubs["result"].append(pub[selcity])
            i = i + 1
 
    #bring in the city data

    cursor = mongo.db.tourData.find()
    
    results = []
    for city in cursor:

        if city['selcity'] == selcity:
        
            del city['_id']
            results.append(city)

    datadic = {"top5":top5, "top5pubs": top5pubs, "tourdata":results}

    return(datadic)


if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'), 
            port=int(os.getenv('PORT', 4444)),
            debug=True)