const $ = (i) => document.querySelector(i);
const btnPrev = $("#btn-prev");
const btnNext = $("#btn-next");
const containerItemsPages = $("#container-items-page");
const containerProducts = $("#container-products");

const apiGetProducts = "http://localhost:3000/api/products";

let pageActive=1;
/* fetch */
const getProducts = ({ page = 1 } = {}) => {
  return fetch(`${apiGetProducts}?page=${page}`).then((res) => res.json());
};
/* Pinta los prouctos */
const paintProducts = (products) => {
  containerProducts.innerHTML = "";

  products.forEach(({ id, images, category, price, title, subtitle }) => {
    const template = `<div class="Products--all">
                        <article class="main__section__productos--producto">
                      <a href="/products/detail/${id}">
                        <figure class="main__section__productos__producto--imagen">
                          <img src="${images[0].urlImage}" alt="${category}">
                        </figure>
                        <div class="datos_productos">
                          <span class="agregar-al-carrito"> Más información
                            <i class="fa-sharp fa-solid fa-circle-info carrito_prod"></i> </span>
                          <h3 class="main__section__productos__producto--precio">$ ${price}
                          </h3>
                          <h4 class="main__section__productos__producto--marca">
                          ${title}
                          </h4>
                          <p class="main__section__productos__producto--modelo">
                          ${subtitle}
                          </p>
                        </div>
                      </a>
                    </article>
                  </div>`;

    containerProducts.innerHTML += template;
  });
};

/* Pinta los numeros de pagina */
const paintItemPage = ({ numberPages, itemActive }) => {
  containerItemsPages.innerHTML = "";
  for (let i = 1; i <= numberPages; i++) {
    containerItemsPages.innerHTML += `<li class="page-item ${
      itemActive === i && "active"
    }"><a class="page-link" onclick="getPage({pag: ${i}})">${i}</a></li>`;
  }
};

/* funcionalidad a botones de numeros de pagina */
const getPage = async ({ pag }) => {
  pageActive = pag
  const {
    data: { page, totalPages, products },
  } = await getProducts({page: pag});
 /*  console.log(pageActive) */
  paintProducts(products);
  paintItemPage({ numberPages: totalPages, itemActive: page });
  statusPrevAndNex({page, totalPages})
};

/* deshabilita next y prev */
const statusPrevAndNex = ({page, totalPages}) =>{
  if (page === totalPages) {
    btnNext.hidden = true
  }else{btnNext.hidden = false}
  if (page === 1) {
    btnPrev.hidden = true
  }else{btnPrev.hidden = false}
}

window.addEventListener("load", async () => {
  try {
    const {
      data: { page, totalPages, products },
    } = await getProducts();
    paintProducts(products);
    paintItemPage({ numberPages: totalPages, itemActive: page });
    statusPrevAndNex({page, totalPages})
  } catch (error) {
    console.log(error);
  }
});
/* FUncionalidad a boton next */
btnNext.addEventListener("click", async () => {
  try {
    const {
      data: { page, totalPages, products },
    } = await getProducts({page: ++pageActive});
    console.log(pageActive);

    paintProducts(products);
    paintItemPage({ numberPages: totalPages, itemActive: page });
    statusPrevAndNex({page, totalPages})
    
  } catch (error) {
    console.log(error);
    
  }

})
/* FUncionalidad a boton prev */
btnPrev.addEventListener("click", async () => {
  try {
    const {
      data: { page, totalPages, products },
    } = await getProducts({page: --pageActive});
    console.log(pageActive);

    paintProducts(products);
    paintItemPage({ numberPages: totalPages, itemActive: page });
    statusPrevAndNex({page, totalPages})
    
  } catch (error) {
    console.log(error);
    
  }

})