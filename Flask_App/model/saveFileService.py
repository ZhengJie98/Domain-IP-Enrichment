from flask import Flask, request, jsonify, flash, redirect, url_for
from os.path import join, dirname, realpath
from werkzeug.utils import secure_filename
from model.ipService import *



