import { ProductsRow } from "./ProductsRow";
import PropTypes from 'prop-types'

export const ProductsTable = ({products}) => {

  return (
    <>
      <div className='d-flex justify-content-between'>
        <h4>Lista de productos</h4>
      </div>
      <hr />

      <div className='table-responsive'>
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
            {
              products.map((product, index) => (
                <ProductsRow
                key={index}
                  {...product}
                />
              ))
            }

          </tbody>
        </table>
      </div>
    </>
  )
}
ProductsTable.propTypes = {
  products : PropTypes.array
}
