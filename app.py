import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify
#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///city_db")

app = Flask(__name__)

#################################################
# Flask Routes
#################################################
@app.route("/tour")
def tour():
    """List all available api routes."""
    tour_data = pd.read_sql("SELECT * FROM tour_data",engine).to_json()
    return (
        tour_data
    )

@app.route("/month")
def month():
    """List all available api routes."""
    tour_data = pd.read_sql("SELECT * FROM tour_data",engine).to_json()
    return (
        month_data
    )

@app.route("/alchol")
def month():
    """List all available api routes."""
    tour_data = pd.read_sql("SELECT * FROM tour_data",engine).to_json()
    return (
        alchol_data
    )