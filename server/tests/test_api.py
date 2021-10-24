'''API test suite'''
import sys, json
sys.path.insert(0, 'server')
sys.path.insert(0, '..')
sys.path.insert(0, '.')


# import the Flask module
from server import app, get_subtotal

app.testing = True
app = app.test_client()

# Test subtotals method
def test_get_subtotal():
    subtotal1 = get_subtotal([])
    assert(subtotal1 == 0)

    subtotal2 = get_subtotal([{'price': 5, 'discount': 0.5, 'quantity': 3}])
    assert(subtotal2 == 7.5)
    
    subtotal3 = get_subtotal([{'price': 5, 'discount': 0.5, 'quantity': 3}, {'price': 5, 'discount': 0, 'quantity': 1}])
    assert(subtotal3 == 12.5)

# Test API response given properly formatted json
def test_api_data():
    test_content = {
        'items': [{'price': 5, 'discount': 0.5, 'quantity': 3}],
        'discount': 0.1,
        'tax': 0.1
    }
    response = app.post('/api/v1/total', data=json.dumps(test_content), content_type='application/json').get_data(as_text=True)
    assert(json.loads(response)['total'] == 7.43)

# Test API response for improperly formatted request
def test_api_invalid_type():
    response = app.post('/api/v1/total')
    assert(response.status_code == 400)