const script= document.querySelector('#script')
script.addEventListener('submit', (e)=>{
    e.preventDefault()
    // Obtener los valores de los campos del formulario
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const cedula = document.querySelector('#cedula').value
    const email = document.querySelector('#email').value
    const telefono = document.querySelector('#telefono').value
    const direccion = document.querySelector('#direccion').value
    
    const Cliente= JSON.parse(localStorage.getItem('Cliente')) || []
    const isClienteRegistered = Cliente.find(Cliente => Cliente.cedula === cedula)
    if (isClienteRegistered){
        return alert('El cliente ya esta registrado')
    }

    isClienteRegistered.push((nombre: nombre, apellido: apellido, cedula:  cedula, email: email,
    telefono: telefono, direccion: direccion ))
    localStorage.setItem('Cliente', JSON.stringify(Cliente))
    alert('Registro Existoso')
    window.location.href = 'index.html' 

})
