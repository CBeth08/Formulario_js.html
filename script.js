document.getElementById('cliente-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    // Crear un mensaje con los datos ingresados por el usuario
    var mensaje = `Cliente registrado:<br>
                   Nombre: ${nombre}<br>
                   Correo electrónico: ${email}<br>`;
    if (telefono) {
        mensaje += Teléfono: ${telefono};
    }

    // Mostrar el mensaje en el div de mensaje
    document.getElementById('mensaje').innerHTML = mensaje;
});