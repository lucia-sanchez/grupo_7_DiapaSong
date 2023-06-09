const $ = id => document.getElementById(id)
const emptyCart = $('emptyCart')
const buyCart = $('buyCart')
/* const noLogged = $('noLogged') */

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

buyCart.addEventListener('submit', function (event) {
    event.preventDefault()
    Swal.fire({
        title: '¿Estás seguro de la compra?',
        text: "Se confirmará tu compra",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI, COMPRAR!',
        cancelButtonText: 'NO'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Haz finalizado tu compra, puedes verla en tu perfil',
                showConfirmButton: false,
                timer: 1500
            })
            buyCart.submit()
        }
    })

})



