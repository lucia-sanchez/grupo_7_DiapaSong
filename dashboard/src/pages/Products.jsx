import { useEffect, useState } from "react";
import { ProductAdd } from "../components/products/ProductAdd";
import { ProductsTable } from "../components/products/ProductsTable";
import { UseFetch } from "../hooks/UseFetch";

export const Products = () => {
  const [state, setState] = useState({
    loading: true,
    products: [],
  });

  useEffect(() => {
    UseFetch('/products')/* ?limit=1000 */
      .then(({ok, data}) => {
        ok &&
        setState({
          loading : false,
          products : data.products
        })
      })
      .catch(() => console.error)
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-7">
              <ProductsTable products = {state.products}/>
            </div>
            <div className="col-12 col-md-5">
              <ProductAdd />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
