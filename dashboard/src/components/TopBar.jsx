import React from 'react'
import admin from '/user-default.png'

export const TopBar = () => {
  return (
    <nav className="header">
    
    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
      <i className="fa fa-bars"></i>
    </button>

    <ul className="header__section--user-navigation-logged">
  
      <li className="alert">
        <a className="nav-link dropdown-toggle alert" href="/" id="alertsDropdown">
          <i className="fas fa-bell fa-fw"></i>
          <span className="badge badge-danger badge-counter"></span>
        </a>
      </li>
  
      <li className="message">
        <a className="nav-link dropdown-toggle message" href="/" id="messagesDropdown">
          <i className="fas fa-envelope fa-fw"></i>
          <span className="badge badge-danger badge-counter"></span>
        </a>
      </li>

      

      <li className="nav-item dropdown no-arrow admin">
        <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">Hola, Admin</span>
          <img className="img-profile rounded-circle" src={admin} alt="" width="60"/>
        </a>
      </li>
    </ul>

  </nav>		
  )
}
