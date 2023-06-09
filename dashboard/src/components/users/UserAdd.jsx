import { useState } from "react";

export const UserAdd = () => {

  const [categories, setCategories] = useState([]);
  const [chefs, setChefs] = useState([]);


  return (
    <>
      <div className='d-flex justify-content-between'>

        <h4>Agregar Usuario </h4>
      </div>
      <hr />
      <form className="row">
        <div className="col-12 mb-3">
          <label htmlFor="name" className="form-label">
            Nombre *
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
          />
        </div>
        
        
        
        
        <div className="col-12 mb-3">
          <label htmlFor="description" className="form-label">
            Domicilio *
          </label>
          <textarea
            className="form-control"
            name="description"
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div className="col-12 mb-3">
          <div className="d-flex justify-content-around">
            <div className="form-check form-switch">
              <input className="form-check-input" name="free" type="checkbox" role="switch"
                id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">intereses</label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" name="visible" type="checkbox" role="switch"
                id="flexSwitchCheckChecked" checked />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
            </div>
          </div>

        </div>
        <div className="col-12 mb-3">

          <input
            className="form-control"
            type="file"
            name="image"
            id="image"
            hidden
          />
          <div className="d-flex align-items-center justify-content-around">
            <label className="btn btn-success my-1" htmlFor="image" >
              Cargar imagenes *
            </label>
            <button className="btn btn-dark my-1 " type="reset" >
              Limpiar
            </button>
            <button className="btn btn-primary my-1" type="submit" disabled>
              Guardar
            </button>

          </div>

        </div>

        <div className="col-12">

        </div>

      </form>
    </>
  );
};
