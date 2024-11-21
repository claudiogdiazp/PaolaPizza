const ingredients = [
    { name: 'Champiñón', price: 500 },
    { name: 'Carne', price: 2500 },
    { name: 'Maíz', price: 400 },
    { name: 'Jamon', price: 1500 },
    { name: 'Pimiento', price: 1200 },
    { name: 'Aceitunas', price: 900 },
    { name: 'Anchoas', price: 1800 },
    { name: 'Piña', price: 1100 },
    { name: 'Bacon', price: 2500 },
    { name: 'Pechuga de Pollo', price: 2000 },
    { name: 'Queso extra', price: 1300 },
    { name: 'Tomates', price: 800 },
    { name: 'Espinacas', price: 1000 },
    { name: 'Pavo', price: 2200 },
    { name: 'Salmón', price: 2800 },
    { name: 'Albahaca', price: 600 },
    { name: 'Ajo', price: 400 },
    { name: 'Cebolla', price: 500 }
];

let selectedIngredients = [];
let basePrice = 10000;

const sizeSelect = document.getElementById('size');
const ingredientsList = document.getElementById('ingredients-list');
const cartItems = document.getElementById('cart-items');
const total = document.getElementById('total');
const checkoutForm = document.getElementById('checkout-form');
const checkoutButton = document.getElementById('checkout');
const confirmPurchaseButton = document.getElementById('confirm-purchase');

sizeSelect.addEventListener('change', updatePrice);
document.getElementById('add-to-cart').addEventListener('click', addToCart);
checkoutButton.addEventListener('click', showCheckoutForm);
confirmPurchaseButton.addEventListener('click', confirmPurchase);

function updatePrice() {
    basePrice = parseInt(sizeSelect.value);
    updateCart();
}

function addToCart() {
    if (selectedIngredients.length < 3) {
        alert("Selecciona 3 ingredientes como máximo.");
        return;
    }
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    let totalPrice = basePrice;
    selectedIngredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = `${ingredient.name} - $${ingredient.price}`;
        cartItems.appendChild(li);
        totalPrice += ingredient.price;
    });
    total.textContent = `Total: $${totalPrice}`;
}

function showCheckoutForm() {
    checkoutForm.style.display = 'block';
}

function confirmPurchase() {
    alert('¡Compra confirmada! Gracias por tu pedido.');
    location.reload();
}

// Generar lista de ingredientes
ingredients.forEach((ingredient, index) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `ingredient-${index}`;
    checkbox.addEventListener('change', () => toggleIngredient(ingredient, checkbox.checked));

    const label = document.createElement('label');
    label.textContent = `${ingredient.name} - $${ingredient.price}`;
    label.setAttribute('for', `ingredient-${index}`);

    const div = document.createElement('div');
    div.appendChild(checkbox);
    div.appendChild(label);
    ingredientsList.appendChild(div);
});

function toggleIngredient(ingredient, isSelected) {
    if (isSelected) {
        if (selectedIngredients.length < 3) {
            selectedIngredients.push(ingredient);
        } else {
            alert('No puedes seleccionar más de 3 ingredientes.');
            document.getElementById(`ingredient-${ingredients.indexOf(ingredient)}`).checked = false;
        }
    } else {
        selectedIngredients = selectedIngredients.filter(i => i !== ingredient);
    }
}
