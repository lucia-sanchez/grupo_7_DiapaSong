import React, { useEffect, useState } from "react";
import { UseFetch } from "../hooks/UseFetch";
import { CategoryCard } from "./CategoryCard";

export const CategoriesInDb = () => {
  const [state, setState] = useState({
    loading: true,
    categories: [],
  });

  useEffect(() => {
    UseFetch("/categories")
      .then(({ ok, data }) => {
        const { categories } = data;
        setState({
          loading: false,
          categories,
        });
      })
      .catch(() => console.error);
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
        </div>
        <div className="card-body">
          <div className="row">
            {state.loading ? (
              <p>cargando...</p>
            ) : (
              state.categories.map((categorie, index) => (
                <CategoryCard key={categorie.name + index} {...categorie} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
