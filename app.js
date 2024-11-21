// Definir los ingredientes y precios
const toppings = [
    { name: 'Champiñón', price: 500 },
    { name: 'Carne', price: 2500 },
    { name: 'Maíz', price: 400 },
    { name: 'Pechuga de pollo', price: 1000 },
    { name: 'Jamon', price: 1200 },
    { name: 'Olivas', price: 800 },
    { name: 'Cebolla', price: 600 },
    { name: 'Pimientos', price: 700 },
    { name: 'Tomate', price: 400 },
    { name: 'Bacon', price: 2000 },
    { name: 'Queso extra', price: 1500 },
    { name: 'Piña', price: 900 },
    { name: 'Atún', price: 1800 },
    { name: 'Salchichón', price: 1300 },
    { name: 'Salsa barbacoa', price: 700 },
    { name: 'Salsa picante', price: 600 },
    { name: 'Albahaca', price: 400 },
    { name: 'Pepperoni', price: 2500 },
    { name: 'Anchoas', price: 2300 },
    { name: 'Huevo', price: 800 }
];

let selectedSize = '';
let selectedToppings = [];

// Función para seleccionar tamaño de pizza
function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.pizza-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`.pizza-option img[alt="Pizza ${size}"]`).parentElement.classList.add('selected');
    document.querySelector('.choose-toppings').classList.remove('hidden');
}

// Función para cargar los ingredientes
function loadToppings() {
    const toppingsContainer = document.querySelector('.toppings-list');
    toppings.forEach(topping => {
        const toppingElement = document.createElement('div');
        toppingElement.classList.add('topping');
        toppingElement.innerHTML = `
            <input type="checkbox" id="topping-${topping.name}" value="${topping.price}">
            <label for="topping-${topping.name}">${topping.name} - $${topping.price}</label>
        `;
        toppingsContainer.appendChild(toppingElement);
    });
}

// Función para agregar al carrito
function addToCart() {
    const cartItems = document.getElementById('cart-items');
    let total = 0;
    selectedToppings = [];
    document.querySelectorAll('.toppings-list input:checked').forEach(input => {
        selectedToppings.push(input.value);
        total += parseInt(input.value);
    });

    const sizePrice = { 'pequeña': 10000, 'mediana': 12000, 'grande': 14000 };
    total += sizePrice[selectedSize];

    const cartHTML = `
        <li>${selectedSize} pizza - $${sizePrice[selectedSize]}</li>
        <li>Ingredientes: ${selectedToppings.map(price => `$${price}`).join(', ')}</li>
        <li>Total: $${total}</li>
    `;
    cartItems.innerHTML = cartHTML;
    document.querySelector('.cart').classList.remove('hidden');
}

// Función para proceder al pago
function checkout() {
    const form = document.getElementById('customer-info');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('¡Gracias por tu compra! Tu pizza estará lista para retirar en 30 minutos en el local.');
    });
}

// Cargar los ingredientes al cargar la página
document.addEventListener('DOMContentLoaded', loadToppings);
