from flask import Flask, render_template, redirect, jsonify, request
from flask_pymongo import PyMongo
import os


# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/cityDB")


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
 
    #bring in the city data

    cursor = mongo.db.tourData.find()
    
    results = []
    for city in cursor:

        if city['selcity'] == selcity:
        
            del city['_id']
            results.append(city)

    

    datadic = {"top5":top5, "tourdata":results }

    return(datadic)


if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'), 
            port=int(os.getenv('PORT', 4444)),
            debug=True)
