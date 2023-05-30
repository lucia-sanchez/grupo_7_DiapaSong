let productImage = document.querySelector("#product-image");
let imageView = document.querySelector(".imageView");

productImage.addEventListener("click", () => {
  productImage.classList.toggle("imageView");
});
imageView.addEventListener("click", () => {
  productImage.classList.toggle("imageView");
});
