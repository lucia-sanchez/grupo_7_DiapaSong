/* CAPTURO ELEMENTOS DEL FORMLARIO */
const $ = id => document.getElementById(id)

const loginForm = $('login-form')
const email = $('email')
const password = $('password')
const errorForm = $('error-form')
const loginBtn = $('login-btn')
/* DEFINO MENSAJE DE ERROR */
const msgError = (element, message, { target }) => {
  $(element).innerHTML = message;
  target.classList.add("is-invalid");
};
/* LIMPIO LOS ESTADOS DEL INPUT */
const cleanError = (element, { target }) => {
  target.classList.remove("is-invalid");
  target.classList.remove("is-valid");
  $(element).innerHTML = null;
};
/* VERIFICO EMAIL */
const verifyEmail = async (email) => {
  try {
    let response = await fetch("/api/users/verify-email", {
      method: "POST",
      body: JSON.stringify({
        email: email
      }),
      headers: { "Content-Type": "application/json" }
    });

    let result = await response.json();
    return result.data.existUser

  } catch (error) {
    console.log(error)
  }
};
/* VERFICO QUE NO HAYA ERRORES */
const checkedFields = () => {
  const elements = loginForm.elements;
  errorForm.innerHTML = null;

  for (let i = 0; i < elements.length - 2; i++) {
    if (elements[i].classList.contains("is-invalid")) {
      errorForm.innerHTML = "Hay campos con errores o están vacíos";
    }
  }
};
/* VALIDO EMAIL */
let regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

email.addEventListener("blur", async function (e) {
  verifyEmail(this.value.trim())
  switch (false) {

    case regExEmail.test(this.value.trim()):
      msgError("error-email", "Ingresa un email válido", e);
      break;
    case await verifyEmail(this.value.trim()):
      msgError("error-email", "El email no se encuentra registrado", e)
      break
    default:

      checkedFields();
      break;
  }
})


email.addEventListener("focus", function (e) {
  cleanError("error-email", e);
});

/* VALIDO PASSWORD */
password.addEventListener("blur", function (e) {

  switch (true) {
    case !this.value.trim():
      msgError("error-password", "El password es obligatorio", e);
      break;
    default:

      checkedFields();
      break;
  }
});
password.addEventListener("focus", function (e) {
  cleanError("error-password", e);

});
/* VALIDO QUE NO HAYA ERRORES ANTES DE ENVIAR FORMULARIO*/
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let error = false;


  for (let i = 0; i < this.elements.length - 2; i++) {
    if (
      !this.elements[i].value.trim() ||
      this.elements[i].classList.contains("is-invalid")
    ) {
      error = true;
      this.elements[i].classList.add("is-invalid");
      errorForm.innerHTML = "Hay campos con errores o están vacíos";
    }
  }

  !error && this.submit();
});