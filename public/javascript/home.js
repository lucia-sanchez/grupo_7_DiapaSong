
document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('suscripcionForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      // obtengo datos del formulario
      let nombre = form.nombre.value;
      let email = form.email.value;
  
      // Envía los datos al servidor utilizando Fetch
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre: nombre, email: email })
      })
        .then(function(response) {
          if (response.ok && nombre && email) {
            Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Suscrpcion exitosa!',
  showConfirmButton: false,
  timer: 1500
  })
          } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Debes ingresar tu nombre y correo electronico',
                showConfirmButton: false,
                timer: 2500
                })
          }
        })
        .catch(function(error) {
          // Ocurrió un error durante la solicitud Fetch
          alert('Error en la solicitud Fetch: ' + error);
        });
    });
  });

