import React from 'react';
import fondo from '../../assets/img/Gold White and Black Simple Restaurant Logo.png'

function Footer(){
  return (
    <footer className="bg-light text-center text-lg-start bg-dark">
      <div className="container p-4">
      <img src={fondo} alt="logo" style={{ width: 100 }} />
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Menú Árabe</h5>
            <h6 className="text-uppercase text-white">Sabemos lo que te gusta.</h6>
            <p className="text-white">
             En esta calida casa encotraras las mejores recetas árabes, realmente los sabores que te harán sentir bien.  
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase text-white">Contacto</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-decoration-none text-white">Nicolas Cordoba</a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-white">Cristhian Leal</a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-white">Gabriela Mansilla</a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-white">Nestor Labiuk</a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-white">Leandro Herrera</a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-white">Adrian Lescano</a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-white">Federico Carrizo</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0 text-white">Redes Sociales</h5>

            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com/" className="text-decoration-none text-white">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="text-decoration-none text-white">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} MyWebsite.com
      </div>
    </footer>
  );
};

export default Footer;