import React from 'react';
import { Link } from 'react-router-dom';
import fondo from '../../assets/img/Gold White and Black Simple Restaurant Logo.png';
import Button from '../../components/Button/Button';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <img
          className="rounded-5"
          src={fondo}
          alt="logo"
          style={{ width: '100px', marginLeft: '20px' }}
        />
        <Link to="/" className="mx-4 navbar-brand text-white fs-2">
          Menú Árabe
        </Link>
        <button
          className="navbar-toggler text-bg-secondary p-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <Button name="Logueo" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <Button name="Registrate" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;