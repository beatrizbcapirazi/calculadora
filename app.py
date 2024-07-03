from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Rota para renderizar a página HTML
@app.route('/')
def index():
    return render_template('index.html')

# Rota para calcular as calorias
@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.json
    food_item = data.get('food_item')
    # Adicione a lógica de cálculo de calorias aqui
    calories = calculate_calories(food_item)
    return jsonify({'calories': calories})

def calculate_calories(food_item):
    caloric_values = {
        'batata': 340,
        'milkshake': 600,
        'mm': 230,
        'combo': 700
    }
    return caloric_values.get(food_item, 0)

if __name__ == '__main__':
    app.run(debug=True)
