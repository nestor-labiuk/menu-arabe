import React from 'react'
import fondo from '../../assets/img/Gold White and Black Simple Restaurant Logo.png'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

 const Navbar = () => {
  return (
   <nav className="navbar bg-dark">
    <div className="container-fluid">
     <img src={fondo} alt="logo" style={{ width: 100 }} />
     <a className="navbar-brand text-white fs-2" href="/">
      Menú Árabe
     </a>
    <button
       className="navbar-toggler text-bg-secondary p-3"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarNavDropdown"
       aria-controls="navbarNavDropdown"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
     <span className="navbar-toggler-icon"></span>
    </button>
   <div className="collapse navbar-collapse" id="navbarNavDropdown">
     <ul className="navbar-nav ms-auto">
      <li className="nav-item">
         <Link className="btn btn-unstyled" to='admin'><Button name='Admin'/></Link>
      </li>
     </ul>
     <ul className="navbar-nav">
      <li className="nav-item">
         <Link className="btn btn-unstyled" to='register'><Button name='Ingresa'/></Link>
      </li>
     </ul>
     <ul className="navbar-nav">
      <li className="nav-item">
         <Link className="btn btn-unstyled" to='register'><Button name='Registrate'/></Link>
      </li>
     </ul>
     <ul className="navbar-nav">
      <li className="nav-item">
       <a className="nav-link text-white" href="/">
         Productos
       </a>
      </li>
     </ul>
    </div>
    </div>
  </nav>
);
};

export default Navbar;