const $ = (id) => document.getElementById(id);

const exRegs = {
  exRegMayu: /[A-Z]/,
  exRegMinu: /[a-z]/,
  exRegNum: /[0-9]/,
  exRegEsp: /[$@!%*?&]/,
  exRegMin: /.{6,}/,
  exRegMax: /.{13}/,
  exRegDate: /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/
};
let regExLetter = /^[A-Z\s\s]+$/i;
let regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,12}[^'\s]/;
let regExEmail= /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;


  const msgError = (element, message, { target }) => {
    $(element).innerHTML = message;
    target.classList.add("is-invalid");
  };
  
  const cleanError = (element, { target }) => {
    target.classList.remove("is-invalid");
    target.classList.remove("is-valid");
    $(element).innerHTML = null;
  };

  const verifyEmail = async (email) => {
    try {
          let response = await fetch("/api/users/verify-email",{
              method: "POST",
              body : JSON.stringify({
              email : email
            }),
            headers : {"Content-Type" : "application/json"}
        });

          let result = await response.json();
          return result.data.existUser
        
        } catch (error) {
        console.log(error)
    }
};

  const checkedFields = () => {
    const elements = $("form-register").elements;
  $("error-form").innerHTML = null;

  for (let i = 0; i < elements.length - 2; i++) {
    if (elements[i].classList.contains("is-invalid")) {
      $("error-form").innerHTML = "Hay campos con errores o están vacíos";
    }
  }
};


//NAME VALIDATION
 
$('name').addEventListener('blur', function(e){
switch (true) {
    case !this.value.trim():
        msgError('error-name', 'El nombre es obligatorio', e)  
        break;

    case this.value.trim().length < 2 || this.value.trim().length > 50:
        msgError('error-name', "Entre 2 y 50 caracteres",e)
          break
    case !regExLetter.test(this.value.trim()):
        msgError('error-name', "Solo caracteres alfabeticos",e)
          break
    default:
        this.classList.add('is-valid')
        checkedFields()
          break;
      }
    });
  
    $('name').addEventListener('focus', function(e) {
      cleanError('error-name', e)
    });

    //IMAGE VALIDATION

    const regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

    $('mainImage').addEventListener('change', function(e){
      switch (true) {
          case !regExExt.exec(this.value):
              $('error-image').innerHTML = "Solo se admiten imágenes jpg | jpeg | png | webp"
              break;
          case this.isDefaultNamespace.length > 1 :   
          $('error-image').innerHTML = "Solo una imagen"
          break
          default:
              this.classList.add('is-valid')
              checkedFields()
              break;
      }
    });
    $('mainImage').addEventListener('focus', function(e) {
      cleanError('error-image', e)
    })
    
    //EMAIL VALIDATION
    $("email").addEventListener("blur", async function (e) {
      verifyEmail(this.value.trim())
      switch (true) {
        case !this.value.trim():
          msgError("error-email", "El email es obligatorio", e);
          break;
        case !regExEmail.test(this.value.trim()):
          msgError("error-email", "Tiene que ser un email válido", e);
          break;
        case await verifyEmail(this.value.trim()) :
            msgError("error-email", "El email ya se encuentra registrado",e)
        break
        default:
          this.classList.add("is-valid");
          checkedFields();
          break;
      }
    });
    
    $("email").addEventListener("focus", function (e) {
      cleanError("error-email", e);
    });

    //PASSWORD VALIDATION
    $("password").addEventListener("blur", function (e) {
      $("msgPassword").hidden = true;
    
      switch (true) {
        case !this.value.trim():
          msgError("error-password", "El password es obligatorio", e);
          break;
        case !regExPass2.test(this.value.trim()):
          msgError(
            "error-password",
            "Debe ser entre 6 y 12 caracteres y tener una mayúscula, una minúscula y un número y un caracter especial",
            e
          );
          break;
        default:
          this.classList.add("is-valid");
          checkedFields();
          break;
      }
    });
    
    $("password").addEventListener("focus", function (e) {
      cleanError("error-password", e);
      $("msgPassword").hidden = false;
    });
    
    
    const validPassword = (element, exReg, value) => {
      if (!exReg.test(value)) {
        $(element).classList.add("text-danger");
      } else {
        $(element).classList.add("text-success");
        $(element).classList.remove("text-danger");
      }
    };
    
    const validMaxPassword = (element, exReg, value) => {
      if (exReg.test(value)) {
        $(element).classList.add("text-danger");
      } else {
        $(element).classList.add("text-success");
        $(element).classList.remove("text-danger");
      }
    };
    
    $("password").addEventListener("keyup", function () {
      validPassword("mayus", exRegs.exRegMayu, this.value);
      validPassword("minus", exRegs.exRegMinu, this.value);
      validPassword("num", exRegs.exRegNum, this.value);
      validPassword("esp", exRegs.exRegEsp, this.value);
      validPassword("min", exRegs.exRegMin, this.value);
      validMaxPassword("max", exRegs.exRegMax, this.value);
    });

    //CONFIRMACION PASSWORD VALIDATION
    $("password2").addEventListener("blur", function (e) {
      switch (true) {
        case !this.value.trim():
          msgError("error-password2", "Debes confirmar el password", e);
          break;
        case this.value.trim() !== $("password").value.trim():
          msgError("error-password2", "La confirmación no coincide", e);
          break;
        default:
          this.classList.add("is-valid");
          checkedFields();
          break;
      }
    });
    
    $("password2").addEventListener("focus", function (e) {
      cleanError("error-password2", e);
    });
     
    //DNI VALIDATION

    $('identifyid').addEventListener('blur', function(e){
      switch (true) {
          case !this.value.trim():
              msgError('error-identifyid', 'El DNI es obligatorio', e)  
              break;
      
          case this.value.trim().length < 8|| this.value.trim().length > 9:
              msgError('error-identifyid', "Entre 8 y 9 caracteres",e)
                break;
          case !regExNum.test(this.value.trim()):
              msgError('error-identifyid', "Ingrese su número de DNI sin puntos, solo carácteres numéricos",e)
                break
          default:
              this.classList.add('is-valid')
              checkedFields()
                break;
            }
          });
        
          $('identifyid').addEventListener('focus', function(e) {
            cleanError('error-identifyid', e)
          });
      
    //  BIRTHDATE VALIDATION 
    $('birthdate').addEventListener('blur', function(e){
      switch (true) {
          case !this.value.trim():
              msgError('error-birthdate', 'La fecha de nacimiento es obligatoria', e)  
              break;
      
          case this.value.trim().length === 8 :
              msgError('error-birthdate', "Ingresa la fecha con formato DD/MM/AAAA",e)
                break
          case !exRegDate.test(this.value.trim()):
              msgError('error-birthdate', "Ingresa la fecha con formato DD/MM/AAAA",e)
                break
          default:
              this.classList.add('is-valid')
              checkedFields()
                break;
              }
            });
          
            $('name').addEventListener('focus', function(e) {
              cleanError('error-name', e)
            });

    //TERMS VALIDATION
    $("terms").addEventListener("click", function (e) {
      this.classList.remove("is-invalid");
      $("error-terms").innerHTML = null;
    });
    
    $("formRegister").addEventListener("submit", function (e) {
      e.preventDefault();
      let error = false;
    
      if (!$("terms").checked) {
        error = true;
        $("error-terms").innerHTML = "Debes aceptar las bases y condiciones";
        $("terms").classList.add("is-invalid");
      }
    
      for (let i = 0; i < this.elements.length - 2; i++) {
        if (
          !this.elements[i].value.trim() ||
          this.elements[i].classList.contains("is-invalid")
        ) {
          error = true;
          this.elements[i].classList.add("is-invalid");
          $("error-form").innerHTML = "Hay campos con errores o están vacíos";
        }
      }
    
      !error && this.submit();
    });