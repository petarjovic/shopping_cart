import flask, flask_cors
from flask import request, jsonify, send_from_directory
from flask_cors import CORS

app = flask.Flask(__name__, static_folder='build', static_url_path='')
app.config["DEBUG"] = False
CORS(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

# A route that calculates the thing, given all of the stuff
@app.route('/api/v1/total', methods=['POST'])
def get_total():
    content = request.get_json()
    if content is None:
        return "JSON error", 400
    items = content['items']
    subtotal = get_subtotal(items)
    total = round(subtotal * (1-float(content['discount'])) * (1+float(content['tax'])), 2)
    response = jsonify({'total': total})
    return response

# Gets the item subtotal
def get_subtotal(items) -> float:
    subtotal = 0
    for item in items:
        discounted_price = float(item['price']) * (1-float(item['discount']))
        subtotal += discounted_price * int(item['quantity'])
    return subtotal

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)