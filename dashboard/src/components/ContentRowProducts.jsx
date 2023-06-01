import React, { useEffect, useState } from "react";
import { Metric } from "./Metric";

export const ContentRowProducts = () => {

  const [state, setState] = useState({
    products : {
      title: "Productos",
      color: "primary",
      value: 0,
      icon: "fa-guitar", /* <i class="fa-solid fa-guitars"></i> */
    },
    /* chefs : {
      title: "Chefs",
      color: "success",
      value: 0,
      icon: "fa-award",
    }, */
    users : {
      title: "Usuarios",
      color: "warning",
      value: 0,
      icon: "fa-user",
    }
  });

  useEffect(() => {
    // el pedido por fetch

      fetch('http://localhost:3000/api/metrics')
        .then(response => {
          return response.json()
        })
        .then(({ok, data}) => {
          if(ok){
            const {totalProducts,/* totalChefs, */totalUsers} = data;
            setState({
              ...state,
              products : {
                ...state.products,
                value : totalProducts
              }/* ,
              chefs : {
                ...state.chefs,
                value : totalChefs
              } */,
              users : {
                ...state.users,
                value : totalUsers
              }
            })
          }
          
        })

        .catch(error => console.error)
      
   
   
  }, []);


 
  return (
  <div className="row">
    
    <Metric {...state.products}/>
   {/*  <Metric {...state.chefs}/> */}
    <Metric {...state.users}/>
    
    
    </div>
  );
};
