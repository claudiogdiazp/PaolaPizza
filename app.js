document.addEventListener("DOMContentLoaded", () => {
    const pizzaOptions = document.querySelectorAll(".pizza-option");
    const chosenPizzaDiv = document.getElementById("chosen-pizza");
    const ingredientsList = document.getElementById("ingredients-list");
    const cart = document.getElementById("cart");
    const addToCartButton = document.getElementById("add-to-cart");
    const checkoutButton = document.getElementById("checkout");

    let selectedPizza = null;

    // Ingredientes
    const ingredients = [
        { name: "Champiñón", price: 500 },
        { name: "Carne", price: 2500 },
        { name: "Maíz", price: 400 },
        { name: "Pepperoni", price: 1000 },
        { name: "Pollo", price: 1500 },
        { name: "Aceitunas", price: 800 },
        { name: "Queso extra", price: 1200 },
        { name: "Piña", price: 700 },
        { name: "Tocino", price: 2000 }
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

    // Handle pizza selection
    pizzaOptions.forEach(option => {
        option.addEventListener("click", () => {
            const price = option.dataset.price;
            const size = option.dataset.size;
            const imgSrc = option.querySelector("img").src;

            selectedPizza = { price, size };

            chosenPizzaDiv.innerHTML = `
                <img src="${imgSrc}" alt="${size} pizza">
                <h3>${size} - $${price}</h3>
            `;
            chosenPizzaDiv.style.display = "block";
        });
    });

    // Add to cart logic
    addToCartButton.addEventListener("click", () => {
        if (!selectedPizza) {
            alert("Por favor selecciona un tamaño de pizza.");
            return;
        }

        const selectedIngredients = Array.from(
            ingredientsList.querySelectorAll("input:checked")
        );

        if (selectedIngredients.length > 3) {
            alert("Solo puedes seleccionar hasta 3 ingredientes.");
            return;
        }

        let total = parseInt(selectedPizza.price);
        const selectedItems = selectedIngredients.map(input => {
            const ingredient = ingredients[parseInt(input.id.split("-")[1])];
            total += ingredient.price;
            return ingredient.name;
        });

        cart.innerHTML = `
            <p>Tamaño: ${selectedPizza.size} - $${selectedPizza.price}</p>
            <p>Ingredientes: ${selectedItems.join(", ")}</p>
            <p>Total: $${total}</p>
        `;
    });

    // Checkout logic
    checkoutButton.addEventListener("click", () => {
        const name = prompt("Ingresa tu nombre completo:");
        const address = prompt("Ingresa tu dirección:");

        if (!name || !address) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        alert(`Gracias por tu pedido, ${name}. 
Tu pizza estará lista en 30 minutos. La enviaremos a ${address}.`);
    });
});
