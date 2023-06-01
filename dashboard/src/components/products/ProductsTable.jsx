import { ProductsRow } from "./ProductsRow";
import PropTypes from "prop-types";

export const ProductsTable = ({ products, page, totalPages, handlerGetPage }) => {
  const pagination = [];
  for (let i = 1; i <= totalPages; i++) {
    pagination.push(i)
    
  }
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Lista de productos</h4>
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm">
            {
              page > 1 && (
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous" onClick={() => handlerGetPage(page - 1)}>
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              )
            }
        
            {
              pagination.map((pag, index) => (
                <li className={`page-item ${pag === page && 'active'}`} key={index}>
                <a className="page-link" href="#" onClick={() => handlerGetPage(pag)}>
                  {pag}
                </a>
              </li>
              ))
            }
          
            {
              page !== totalPages && (
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next" onClick={() => handlerGetPage(page + 1)}> 
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
              )
            }
           
          </ul>
        </nav>
      </div>
      <hr />

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulo</th>
              <th scope="col">Stock</th>
              <th scope="col">Precio</th>
              <th scope="col">Desc</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductsRow key={index} {...product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
ProductsTable.propTypes = {
  products: PropTypes.array,
};
