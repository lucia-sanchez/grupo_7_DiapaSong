const $ = (i) => document.querySelector(i);
const btnPrev = $("#btn-prev");
const btnNext = $("#btn-next");
const containerItemsPages = $("#container-items-page");
const containerProducts = $("#container-products");

const countProduct = document.getElementById("countProduct");


const apiGetProducts = "http://localhost:3000/api/products";





let pageActive = 1;

/* fetch */
const getProducts = ({ page = 1 } = {}) => {
  return fetch(`${apiGetProducts}?page=${page}`).then((res) => res.json());
};

/* Pinta los prouctos */
const paintProducts = (products) => {
  containerProducts.innerHTML = "";

  products.forEach(({ id, images, categories, price, title, subtitle }) => {
    const template = `<div>
                        <article class="dashboard-product">
                          <h6 class="dashboard-product-id">${id}</h6> 
                          <h6 class="dashboard-product-title">${title}</h6> 
                          <h6 class="dashboard-product-subtitle">${subtitle}</h6>
                          <h6 class="dashboard-product-category">${categories.category}</h6>
                          <h6>$ ${price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h6>
                          <h6><a href="/products/detail/${id}">VER</a></h6>
                          <a class="dashboard-button-edit" href="/products/edit/${id}"><i class="fa-solid fa-pen-to-square"></i></a>
                          <form id="form_delete_${id}" action="/products/remove/${id}?_method=DELETE" method="POST">
                            <button type="submit" class="dashboard-button-delete" onclick="confirmarBorrado(event, ${id})"><i class="fa-solid fa-trash"></i></button>
                          </form>
                        </article>
                      </div>`

    containerProducts.innerHTML += template;
  });
};

function confirmarBorrado(event, id) {
  event.preventDefault();

  Swal.fire({
    title: '¿Estás seguro de eliminar este producto?',
    text: "No podrás revertir esta acción!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SI, ELIMINAR!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'ELIMINADO!',
        'El producto ha sido borrado con éxito',
        'success'
      ).then(() => {
        eliminarProducto(id); // Llamar a la función para eliminar el producto
      });
    }
  });
}

function eliminarProducto(id) {
  const form = document.getElementById(`form_delete_${id}`);
  fetch(form.action, {
    method: form.method
  })
    .then(response => {
      if (response.ok) {
        // Recargar la página después de eliminar el producto
        location.reload();
      } else {
        // Mostrar un mensaje de error si la eliminación falla
        console.error('Error al eliminar el producto');
      }
    })
    .catch(error => {
      console.error('Error al eliminar el producto', error);
    });
}

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
  pageActive = pag;
  const {
    data: { page, totalPages, products },
  } = await getProducts({ page: pag });
  paintProducts(products);
  paintItemPage({ numberPages: totalPages, itemActive: page });
  statusPrevAndNex({ page, totalPages });
};

/* deshabilita next y prev */
const statusPrevAndNex = ({ page, totalPages }) => {
  if (page === totalPages) {
    btnNext.hidden = true;
  } else {
    btnNext.hidden = false;
  }
  if (page === 1) {
    btnPrev.hidden = true;
  } else {
    btnPrev.hidden = false;
  }
};

window.addEventListener("load", async () => {
  try {
    const {
      data: { page, totalPages, products, count },
    } = await getProducts();

    paintProducts(products);
    paintItemPage({ numberPages: totalPages, itemActive: page });
    statusPrevAndNex({ page, totalPages });
   
    countProduct.textContent = count.toString(); // Actualiza el valor del contador
  } catch (error) {
    console.log(error);
  }
});


/* Funcionalidad al botón next */
btnNext.addEventListener("click", async () => {
  try {
    const {
      data: { page, totalPages, products },
    } = await getProducts({ page: ++pageActive });

    paintProducts(products);
    paintItemPage({ numberPages: totalPages, itemActive: page });
    statusPrevAndNex({ page, totalPages });
  } catch (error) {
    console.log(error);
  }
});

/* Funcionalidad al botón prev */
btnPrev.addEventListener("click", async () => {
  try {
    const {
      data: { page, totalPages, products },
    } = await getProducts({ page: --pageActive });

    paintProducts(products);
    paintItemPage({ numberPages: totalPages, itemActive: page });
    statusPrevAndNex({ page, totalPages });
  } catch (error) {
    console.log(error);
  }
});
/* USERS */
const containerUsers  = $("#container-users");
const countUsers = document.getElementById("countUsers");
const apiGetUsers = "http://localhost:3000/api/users";
const getUsers = ({ page = 1 } = {}) => {
  return fetch(`${apiGetUsers}?page=${page}`).then((res) => res.json());
};

const paintUsers= (users) => {
  containerUsers.innerHTML = "";

  users.forEach(({ id, name, email,  phone}) => {
    const template = `<div>
                        <article class="dashboard-product">
                          <h6 class="dashboard-product-id">${id}</h6> 
                          <h6 class="dashboard-product-title">${name}</h6> 
                          <h6 class="dashboard-product-subtitle">${email}</h6>
                          <h6 class="dashboard-product-category">${ phone}</h6>
                          
                          <h6><a href="#">VER</a></h6>
                          <a class="dashboard-button-edit" href="#"><i class="fa-solid fa-pen-to-square"></i></a>
                          <form id="" action="" method="">
                            <button type="" class="dashboard-button-delete"><i class="fa-solid fa-trash"></i></button>
                          </form>
                        </article>
                      </div>`

                      containerUsers.innerHTML += template;
  });
}; 

window.addEventListener("load", async () => {
  try {
    const {
      data: { users },
    } = await getUsers();

    paintUsers(users);
  
  
  } catch (error) {
    console.log(error);
  }
});

window.addEventListener("load", async () => {
  try {
    const {
      data: { count },
    } = await getUsers();
    countUsers.textContent = count.toString(); // Actualiza el valor del contador
  } catch (error) {
    console.log(error);
  }
});

