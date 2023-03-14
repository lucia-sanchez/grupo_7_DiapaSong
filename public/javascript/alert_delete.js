
const formDelete = document.getElementById('form_delete')
console.log(formDelete);

formDelete.addEventListener('submit', function(event){
event.preventDefault()
Swal.fire({
    title: '¿Estás seguro de eliminar este producto?',
    text: "No podrás revertir esta acción!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SI, ELIMINAR!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'ELIMINADO!',
        'El producto ha sido borrado con éxito',
        'success', 2000)
        formDelete.submit()
    }
  })

})

