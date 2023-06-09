import React, { useEffect, useState } from "react";
import { UseFetch } from "../hooks/UseFetch";
import lastProduct from '/logoDiapasong.png'


export const LastProductInDb = () => {
  const [state, setState] = useState({
    loading: true,
    products: []
  });

  useEffect(() => {
    UseFetch("/products/last")
      .then(({ ok, data }) => {
        const { products } = data;
        setState({
          loading: false,
          products
        });
      })
      .catch(() => console.error);
  }, []);
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo producto agregado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: "40rem" }}
              src={state.products.length >0 ? state.products[0].images[0].urlImage:''}
              alt={state.products.length >0 ? state.products[0].title : ''}
            />
          </div>
          <p>
            {state.products.length >0 ? state.products[0].description : ''}
          </p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            Ver Detalles
          </a>
        </div>
      </div>
    </div>
  );
};
