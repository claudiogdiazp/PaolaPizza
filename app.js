// Nueva función para capturar los datos del cliente
function confirmPurchase() {
    const fullName = document.getElementById('full-name').value;
    const rut = document.getElementById('rut').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    if (!fullName || !rut || !phone || !email || !address) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    alert(`¡Compra confirmada!\n\nDetalles del cliente:\nNombre: ${fullName}\nRUT: ${rut}\nCelular: ${phone}\nEmail: ${email}\nDirección: ${address}`);
    location.reload(); // Recarga la página después de la confirmación
}

// Asignar el evento a "Confirmar compra"
confirmPurchaseButton.addEventListener('click', confirmPurchase);
