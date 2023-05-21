const $ = (id) => document.getElementById(id);
const msgError = (element, message, { target }) => {
  $(element).innerHTML = message;
  target.classList.add("is-invalid");
  errors=true
};

const cleanError = (element, { target }) => {
  target.classList.remove("is-invalid");
  target.classList.remove("is-valid");
  $(element).innerHTML = null;
  errors=false
};

//  TITULO

$("title").addEventListener("blur", function (event) {
  switch (true) {
    case !this.value.trim():
      msgError("titleError", "El título del producto es obligatorio", event);
      break;
    case this.value.trim().length < 5:
      msgError("titleError", "El título debe tener mínimo 5 caracteres", event);
      break;
    default:
      this.classList.add("is-valid");
      break;
  }
});
$("title").addEventListener("focus", function (event) {
  cleanError("titleError", event);
});

//SUBTITULO

$("subtitle").addEventListener("blur", function (event) {
  switch (true) {
    case !this.value.trim():
      msgError(
        "subTitleError",
        "El subtítulo del producto es obligatorio",
        event
      );
      break;
    case this.value.trim().length < 5:
      msgError(
        "subTitleError",
        "El sub-título debe tener mínimo 5 caracteres",
        event
      );
      break;
    default:
      this.classList.add("is-valid");
      break;
  }
});

$("subtitle").addEventListener("focus", function (event) {
  cleanError("subTitleError", event);
});


//  CATEGORIA

    $("category").addEventListener('blur', function (event) {
      if (!this.value) {
        msgError('categoryError', "Debes indicar una categoría", event)
      } else{
        this.classList.add("is-valid");
      }
        $("category").addEventListener("focus", function (event) {
          cleanError("categoryError", event);
        });
      
    })


//DESCRIPCION

$("description").addEventListener("blur", function (event) {
  switch (true) {
    case !this.value.trim():
      msgError(
        "descriptionError",
        "Tienes que agregar una descripción",
        event
      );
      break;
    case this.value.trim().length <= 20 && this.value.trim().length >=1000 :
      msgError(
        "descriptionError",
        "La descrpcion debe ser de entre 20 y 1000 caracteres",
        event
      );
      break;
    default:
      this.classList.add("is-valid");
      break;
  }
});

$("description").addEventListener("focus", function (event) {
  cleanError("descriptionError", event);
});


//IMAGEN PRINCIPAL
const regExExt = /(.jpg|.jpeg|.png|.gif|.webp)$/i;

$("mainImage").addEventListener('change', function () {
  switch (true) {
    case !regExExt.exec(this.value):
      $('mainImageError').innerHTML = "Solo se admiten imágenes jpg | jpeg | png | gif | webp"
      break;
    default:    
    $('mainImageError').innerHTML = null         
  }})

//IMAGENES SECUNDARIAS
$("images").addEventListener('change', function () {
  switch (true) {
    case !regExExt.exec(this.value):
      $('imagesError').innerHTML = "Solo se admiten imágenes jpg | jpeg | png | gif | webp"
      break;
      case this.files.length > 3:
        $('imagesError').innerHTML = "Solo se admiten un máximo de 3 imagenes"
     alert("asdasdasdasdasdasdasdasd")  
      break;
        
   
    default:        
    $('imagesError').innerHTML = null     
  }})

//COLOR
$("colors").addEventListener('blur', function (event) {
  if (!this.value) {
    msgError('colorsError', "Debes indicar una categoría", event)
  } else{
    this.classList.add("is-valid");
  }
    $("colors").addEventListener("focus", function (event) {
      cleanError("colorsError", event);
    });
})


//STOCK
$("stock").addEventListener("blur", function (event) {
  switch (true) {
    case !this.value.length > 0:
      msgError(
        "stockError",
        "Tienes que ingresar stock disponible",
        event
      );
      break;
    default:
      this.classList.add("is-valid");
      break;
  }
});
$("stock").addEventListener("focus", function (event) {
  cleanError("stockError", event);
});

//PRECIO

$("price").addEventListener("blur", function (event) {
  switch (true) {
    case !this.value.length > 0:
      msgError(
        "priceError",
        "Tienes que ingresar el precio",
        event
      );
      break;
    default:
      this.classList.add("is-valid");
      break;
  }
});

$("price").addEventListener("focus", function (event) {
  cleanError("priceError", event);
});

$('formProducts').addEventListener('submit', function(event){
    if (errors) {
         event.preventDefault();
    }
 
if (errors=false) {
    this.submit()
}
})