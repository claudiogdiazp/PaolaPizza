// Lista de ingredientes y sus precios
const ingredients = [
    { name: 'Champiñón', price: 500 },
    { name: 'Carne', price: 2500 },
    { name: 'Maíz', price: 400 },
    { name: 'Pepperoni', price: 800 },
    { name: 'Queso Extra', price: 1000 },
    { name: 'Aceitunas', price: 600 },
    { name: 'Tocino', price: 1500 },
    { name: 'Tomate', price: 700 },
    { name: 'Cebolla', price: 300 },
    { name: 'Pimiento', price: 400 },
    { name: 'Pollo', price: 1800 },
    { name: 'Piña', price: 500 },
    { name: 'Jalapeño', price: 600 },
    { name: 'Orégano', price: 200 },
    { name: 'Chorizo', price: 1700 },
    { name: 'Salami', price: 900 },
    { name: 'Anchoas', price: 2000 },
    { name: 'Espinaca', price: 500 },
    { name: 'Albahaca', price: 400 },
    { name: 'Queso Azul', price: 3000 },
];

const ingredientsList = document.getElementById('ingredients-list');
const cartItems = document.getElementById('cart-items');
const cartSection = document.getElementById('cart');
const checkoutForm = document.getElementById('checkout-form');

let selectedIngredients = [];
let cart = [];

// Crear lista de ingredientes
ingredients.forEach((ingredient, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="checkbox" id="ingredient-${index}" value="${ingredient.name}" data-price="${ingredient.price}">
        <label for="ingredient-${index}">${ingredient.name} - $${ingredient.price}</label>
    `;
    ingredientsList.appendChild(div);
});

// Agregar pizza al carrito
document.getElementById('add-to-cart').addEventListener('click', () => {
    const size = document.getElementById('pizza-size').value;
    const selectedCheckboxes = Array.from(
        document.querySelectorAll('#ingredients-list input[type="checkbox"]:checked')
    );

    if (selectedCheckboxes.length > 3) {
        alert('Por favor, selecciona máximo 3 ingredientes.');
        return;
    }

    selectedIngredients = selectedCheckboxes.map((checkbox) => ({
        name: checkbox.value,
        price: parseInt(checkbox.dataset.price),
    }));

    const basePrice = size === 'small' ? 10000 : size === 'medium' ? 12000 : 14000;
    const totalPrice = basePrice + selectedIngredients.reduce((sum, ing) => sum + ing.price, 0);

    cart.push({ size, ingredients: selectedIngredients, totalPrice });
    updateCart();
});

function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Pizza ${item.size} con ${item.ingredients
            .map((ing) => ing.name)
            .join(', ')} - Total: $${item.totalPrice}`;
        cartItems.appendChild(li);
    });
    cartSection.style.display = 'block';
}

// Ir a pago
document.getElementById('checkout').addEventListener('click', () => {
    checkoutForm.style.display = 'block';
    cartSection.style.display = 'none';
});

// Confirmar compra
document.getElementById('confirm-purchase').addEventListener('click', () => {
    const fullName = document.getElementById('full-name').value;
    const rut = document.getElementById('rut').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (!fullName || !rut || !phone || !email || !address) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    alert(`¡Compra confirmada!\nNombre: ${fullName}\nRUT: ${rut}\nCelular: ${phone}\nEmail: ${email}\nDirección: ${address}`);
    location.reload();
});
