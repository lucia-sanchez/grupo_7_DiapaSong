const $ = (id) => document.getElementById(id);

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
        console.error
    }
};

  const checkedFields = () => {
    const elements = $("formRegister").elements;
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
        msgError('errorName', 'El nombre es obligatorio', e)  
        break;

    case this.value.trim().length < 2 || this.value.trim().length > 50:
        msgError('errorName', "Entre 2 y 50 caracteres",e)
          break
    case !regExLetter.test(this.value.trim()):
        msgError('errorName', "Solo caracteres alfabeticos",e)
          break
    default:
        this.classList.add('validInput')
        checkedFields()
          break;
      }
    });
  
    $('name').addEventListener('focus', function(e) {
      cleanError('errorName', e)
    });

    //EMAIL VALIDATION
    $("email").addEventListener("blur", async function (e) {
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
            "Debe ser entre 6 y 12 caracteres y tener una mayúscula, una minúscula y un número",
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
    
    const exRegs = {
      exRegMayu: /[A-Z]/,
      exRegMinu: /[a-z]/,
      exRegNum: /[0-9]/,
      exRegEsp: /[$@!%*?&_-]/,
      exRegMin: /.{6,}/,
      exRegMax: /.{13}/,
    };
    
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
      validPassword("mayu", exRegs.exRegMayu, this.value);
      validPassword("minu", exRegs.exRegMinu, this.value);
      validPassword("num", exRegs.exRegNum, this.value);
      validPassword("esp", exRegs.exRegEsp, this.value);
      validPassword("min", exRegs.exRegMin, this.value);
      validMaxPassword("max", exRegs.exRegMax, this.value);
    });
    