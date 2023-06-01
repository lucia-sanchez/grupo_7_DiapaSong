import React from "react";
import logo from '/logoDiapasong.png'
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <ul
      className="main__section__nav"
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="http://localhost:3000"
      >
        <div className="sidebar-brand-icon">
          <img
            className="w-100"
            src={logo}
            alt="Digital House"
          />
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Diapasong</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Navegación</div>

      <li className="nav-item">
        <Link className="nav-link collapsed" to="/">
          <i className="fas fa-fw fa-folder"></i>
          <span>Home</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Productos</span>
        </Link>
      </li>

      {/* <li className="nav-item">
        <Link className="nav-link" to="/chefs">
          <i className="fas fa-fw fa-table"></i>
          <span>Chefs</span>
        </Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          <i className="fas fa-fw fa-table"></i>
          <span>Usuarios</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
};
