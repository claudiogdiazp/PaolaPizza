document.addEventListener("DOMContentLoaded", () => {
    const sizeSelect = document.getElementById("size");
    const ingredientsList = document.getElementById("ingredients-list");
    const cart = document.getElementById("cart");
    const addToCartButton = document.getElementById("add-to-cart");
    const checkoutButton = document.getElementById("checkout");

    const ingredients = [
        { name: "Champiñón", price: 500 },
        { name: "Carne", price: 2500 },
        { name: "Maíz", price: 400 },
        { name: "Pepperoni", price: 1000 },
        { name: "Pollo", price: 1500 },
        { name: "Aceitunas", price: 800 },
        { name: "Queso extra", price: 1200 },
        { name: "Piña", price: 700 },
        { name: "Tocino", price: 2000 },
        { name: "Salchicha", price: 1300 },
        { name: "Jalapeños", price: 600 },
        { name: "Cebolla", price: 400 },
        { name: "Pimiento", price: 500 },
        { name: "Atún", price: 1800 },
        { name: "Tomate", price: 500 },
        { name: "Albahaca", price: 600 },
        { name: "Anchoas", price: 2000 },
        { name: "Chorizo", price: 1500 },
        { name: "Ajo", price: 300 },
        { name: "Espinaca", price: 500 }
    ];

    // Render ingredients list
    ingredients.forEach((ingredient, index) => {
        const ingredientDiv = document.createElement("div");
        ingredientDiv.innerHTML = `
            <input type="checkbox" id="ingredient-${index}" value="${ingredient.price}">
            <label for="ingredient-${index}">${ingredient.name} - $${ingredient.price}</label>
        `;
        ingredientsList.appendChild(ingredientDiv);
    });

    // Add to cart logic
    addToCartButton.addEventListener("click", () => {
        const selectedSize = sizeSelect.value;
        const selectedIngredients = Array.from(
            ingredientsList.querySelectorAll("input:checked")
        );

        if (selectedIngredients.length > 3) {
            alert("Solo puedes seleccionar hasta 3 ingredientes.");
            return;
        }

        let total = parseInt(selectedSize);
        const selectedItems = selectedIngredients.map(input => {
            const ingredient = ingredients[parseInt(input.id.split("-")[1])];
            total += ingredient.price;
            return ingredient.name;
        });

        cart.innerHTML = `
            <p>Tamaño: $${selectedSize}</p>
            <p>Ingredientes: ${selectedItems.join(", ")}</p>
            <p>Total: $${total}</p>
        `;
    });

    // Checkout logic
    checkoutButton.addEventListener("click", () => {
        const name = prompt("Ingresa tu nombre completo:");
        const rut = prompt("Ingresa tu RUT:");
        const phone = prompt("Ingresa tu número de celular:");
        const email = prompt("Ingresa tu email:");
        const address = prompt("Ingresa tu dirección:");

        if (!name || !rut || !phone || !email || !address) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        alert(`Gracias por tu pedido, ${name}. 
Tu pizza estará lista en 30 minutos. La enviaremos a ${address}.`);
    });
});
