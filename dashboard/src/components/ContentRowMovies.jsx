import React, { useEffect, useState } from "react";
import { Metric } from "./Metric";

export const ContentRowMovies = () => {

  const [state, setState] = useState({
    courses : {
      title: "Cursos",
      color: "primary",
      value: 0,
      icon: "fa-film",
    },
    chefs : {
      title: "Chefs",
      color: "success",
      value: 0,
      icon: "fa-award",
    },
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
            const {totalCourses,totalChefs,totalUsers} = data;
            setState({
              ...state,
              courses : {
                ...state.courses,
                value : totalCourses
              },
              chefs : {
                ...state.chefs,
                value : totalChefs
              },
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
    
    <Metric {...state.courses}/>
    <Metric {...state.chefs}/>
    <Metric {...state.users}/>
    
    
    </div>
  );
};
