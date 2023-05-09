const $ = (id) => document.getElementById(id)

let regExLetter = /^[A-Z]+$/i;
let regExPass =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}[^'\s]/;
let regExEmail =
  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

  const msgError = (element, message, { target }) => {
    $(element).innerHTML = message;
    target.classList.add("is-invalid");
  };
  
  const cleanError = (element, { target }) => {
    target.classList.remove("is-invalid");
    target.classList.remove("is-valid");
    $(element).innerHTML = null;
  };

$('name').addEventListener('blur', function(e){
switch (true) {
    case this.value.trim():
        msgError('errorName', 'El nombre es obligatorio', e)  
        break;

    default:
        break;
}
})

