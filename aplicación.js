let tamañoSeleccionado = null;
let ingredientesSeleccionados = [];

function seleccionarPizza(tamaño) {
    tamañoSeleccionado = tamaño;
    document.querySelectorAll(".pizza").forEach(pizza => {
        pizza.classList.remove("seleccionada");
    });
    document.getElementById(tamaño).classList.add("seleccionada");

    // Muestra la sección de ingredientes
    document.getElementById("seleccionar-ingredientes").style.display = "block";
}

function agregarIngrediente(ingrediente) {
    if (ingredientesSeleccionados.length < 3) {
        ingredientesSeleccionados.push(ingrediente);
        alert(`Has agregado ${ingrediente}`);
    } else {
        alert("¡Solo puedes agregar hasta 3 ingredientes!");
    }
}

function añadirAlCarrito() {
    if (tamañoSeleccionado && ingredientesSeleccionados.length > 0) {
        document.getElementById("resumen-carrito").innerText = `
            Pizza ${tamañoSeleccionado} con: ${ingredientesSeleccionados.join(", ")}.
        `;
        document.getElementById("carrito").style.display = "block";
    } else {
        alert("Selecciona un tamaño y al menos un ingrediente.");
    }
}

function confirmarPedido() {
    alert("Pedido confirmado. Retira tu pizza en 30 minutos.");
}
