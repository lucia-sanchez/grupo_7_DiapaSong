//Scroll//
window.addEventListener("scroll", function () {
    const main = document.querySelector("main");
    const header = document.querySelector("header");
    const navBar = document.querySelector(".menufixed");
      main.classList.toggle("scroll_main_space_top", window.scrollY > 1);
      header.classList.toggle("header-scroll", window.scrollY > 1);
      navBar.classList.toggle("fixed", window.scrollY > 1);
});


//Menu desplegable header//
const btnmenu = document.querySelector("#iconomenu");
const menu = document.querySelector("#header_nav");
btnmenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar-menu")
})

const menuCategoria = document.querySelector(".main__section__nav--titulo");
const menuOculto = document.querySelector(".menuCatMobile");
menuCategoria.addEventListener("click", function () {
  menuOculto.classList.toggle("showCategories")
})


