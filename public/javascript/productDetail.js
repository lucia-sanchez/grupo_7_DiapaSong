
let productImage = document.querySelector("#product-image")


productImage.addEventListener("click", () =>{
    productImage.classList.add("imageView")
})
let imageView = document.querySelector(".imageView")

imageView.addEventListener("click", () =>{
    imageView.classList.remove("imageView")
})