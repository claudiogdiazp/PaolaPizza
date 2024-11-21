document.getElementById('agregarAlCarrito').addEventListener('click', function() {
    let total = 0;

    // Obtener el precio de la pizza seleccionada
    let tamaño = parseInt(document.getElementById('tamaño').value);
    total += tamaño;

    // Obtener el precio de los ingredientes seleccionados
    let ingredientes = document.getElementById('ingredientes');
    let seleccionados = Array.from(ingredientes.selectedOptions);
    seleccionados.forEach(function(opcion) {
        total += parseInt(opcion.value);
    });

    // Mostrar el total
    document.getElementById('total').innerText = total;
});

document.getElementById('realizarPedido').addEventListener('click', function() {
    alert('Tu pedido ha sido realizado. El total es: ' + document.getElementById('total').innerText + ' y estará listo en 30 minutos.');
});
