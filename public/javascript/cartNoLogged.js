const $ = id => document.getElementById(id)

const noLogged = $('noLogged')
const emptyCart = $('emptyCart')

emptyCart.addEventListener('submit', function (event) {
    event.preventDefault()
    Swal.fire({
        title: '¿Estás seguro de vaciar el carrito?',
        text: "No podrás revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, VACIAR!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'ATENCIÓN!',
                'El carrito ha sido borrado con éxito',
                'success', 2000)
            emptyCart.submit()
        }
    })

})


noLogged.addEventListener('click', (event) => {
    // Previene el comportamiento predeterminado de navegación del enlace
    event.preventDefault();

    // Muestra el Sweet Alert personalizado
    Swal.fire({
      title: 'Debes iniciar sesión',
      text: 'Inicia sesión para confirmar la compra',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      // Si se hace clic en "Sí, continuar", redirige al enlace
      if (result.isConfirmed) {
        window.location.href = noLogged.href;
      }
    });
  });




