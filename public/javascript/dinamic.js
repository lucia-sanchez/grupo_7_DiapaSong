//Scroll//
window.addEventListener("scroll", function () {
    const main = document.querySelector(".productos__main");
    main.classList.toggle("scroll_main_space_top", window.scrollY > 1);
});
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("header-scroll", window.scrollY > 1);
});

//Menu desplegable//
const btnmenu = document.querySelector("#iconomenu");

const menu = document.querySelector("#header_nav");

btnmenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar-menu")
})
$('.carousel').carousel({
    interval: 0
  })
  