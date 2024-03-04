from flask import Flask, jsonify, request
from flask_cors import CORS
import spacy

nlp = spacy.load("en_core_web_sm")


app = Flask(__name__)
CORS(app)

@app.route('/')
def hello(): 
    return 'hello world'

@app.route('/api/data', methods=['GET'])
def give_data():
    data= {"message" : "Hello from Flask API!",
           "rule":"hey"}
    return jsonify(data)

@app.route('/api/similarity', methods=['POST'])
def similarity():
    request_data = request.get.json()
    text1 = request_data['text1']
    text2 = request_data['text2']

    doc1 = nlp(text1)
    doc2 = nlp(text2)

    similarity_score = doc1.similarity(doc2)
    response = {
    'sim_score': similarity_score
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)

