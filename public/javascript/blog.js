/* no envia el form vacio */
const formBlog = document.querySelector('#form-blog')
const formBlogImput = document.querySelector('#exampleFormControlInput1')
const formBlogComents = document.querySelector('exampleFormControlTextarea1')
formBlog.addEventListener('submit', function(event){
if (formBlogImput.value===""|| formBlogComents.value==="") {
    event.preventDefault();     
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Debes ingresar tu nombre y comentarios',
        showConfirmButton: false,
        timer: 1500
      })
}
    })