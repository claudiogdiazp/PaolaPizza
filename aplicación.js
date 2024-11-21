// Variables para los elementos
let tamañoSeleccionado = '';
let ingredientesSeleccionados = [];

// Función para seleccionar tamaño de pizza
document.getElementById('pizzaPequena').addEventListener('click', function() {
    tamañoSeleccionado = 'Pequeña';
    this.style.transform = 'scale(1.2)';
    alert('Has seleccionado una pizza pequeña.');
});

document.getElementById('pizzaMediana').addEventListener('click', function() {
    tamañoSeleccionado = 'Mediana';
    this.style.transform = 'scale(1.2)';
    alert('Has seleccionado una pizza mediana.');
});

document.getElementById('pizzaGrande').addEventListener('click', function() {
    tamañoSeleccionado = 'Grande';
    this.style.transform = 'scale(1.2)';
    alert('Has seleccionado una pizza grande.');
});

// Función para seleccionar ingredientes
document.getElementById('ingrediente1').addEventListener('click', function() {
    if (!ingredientesSeleccionados.includes('Champiñones')) {
        ingredientesSeleccionados.push('Champiñones');
        actualizarCarrito();
    }
});

document.getElementById('ingrediente2').addEventListener('click', function() {
    if (!ingredientesSeleccionados.includes('Carne')) {
        ingredientesSeleccionados.push('Carne');
        actualizarCarrito();
    }
});

document.getElementById('ingrediente3').addEventListener('click', function() {
    if (!ingredientesSeleccionados.includes('Maíz')) {
        ingredientesSeleccionados.push('Maíz');
        actualizarCarrito();
    }
});

// Función para actualizar el carrito
function actualizarCarrito() {
    const articulosCarrito = document.getElementById('articulosCarrito');
    articulosCarrito.innerHTML = `<p>Tamaño de pizza: ${tamañoSeleccionado}</p>`;
    ingredientesSeleccionados.forEach(ingrediente => {
        articulosCarrito.innerHTML += `<p>${ingrediente}</p>`;
    });
}

// Función para realizar el pedido
document.getElementById('realizarPedido').addEventListener('click', function() {
    if (tamañoSeleccionado && ingredientesSeleccionados.length > 0) {
        alert(`Pedido confirmado! Pizza ${tamañoSeleccionado} con ingredientes ${ingredientesSeleccionados.join(', ')}.\nRecoge tu pizza en el local en 30 minutos.`);
    } else {
        alert('Por favor, selecciona un tamaño de pizza y al menos un ingrediente.');
    }
});
