function calculateCalories() {
    const foodSelect = document.getElementById('food-select').value;
    const itemImage = document.getElementById('item-image');
    const foodCalories = {
        batata: 422,
        milkshake: 425,
        mm: 696,
        combo: 499,
        coxinha: 1540,
        ruffles: 665
    };

    const riceBeanMealCalories = 400;
    const selectedFoodCalories = foodCalories[foodSelect];
    const equivalentMeals = (selectedFoodCalories / riceBeanMealCalories).toFixed(2);

    document.getElementById('result').innerHTML = `
        O item selecionado tem ${selectedFoodCalories} calorias. <br>
        Isso é equivalente a ${equivalentMeals} pratos de comida com arroz, feijão, carne e salada.
    `;

    // Defina o caminho das imagens aqui
    const imagePaths = {
        batata: "static/batata.jpeg",
        milkshake: "static/milkshake.jpeg",
        mm: "static/mm.jpeg",
        combo: "static/combo.jpeg",
        coxinha: "static/coxinha.jpeg",
        ruffles: "static/ruffles.jpeg"
    };

    // Atualize a src da imagem
    if (foodSelect !== 'selecione') {
        itemImage.src = imagePaths[foodSelect];
        itemImage.style.display = 'block'; // Mostrar a imagem
    } else {
        itemImage.style.display = 'none'; // Esconder a imagem se nenhum item for selecionado
    }
}
