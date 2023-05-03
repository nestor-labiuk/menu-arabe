import React from 'react'
import fondo from '../../assets/img/Gold White and Black Simple Restaurant Logo.png'

function Footer(){
  return (
    <footer className="bg-light text-center text-lg-start bg-dark">
      <div className="d-flex flex-column p-4 flex-sm-row ">
        <div className='col-sm-3 d-flex flex-column justify-content-center align-items-center'>
        <img
          className="rounded-5 pb-3" 
          src={fondo} 
          alt="logo" 
          style={{ width: 100 }} 
        />
        </div>
          <div className="col-sm-3 mb-4 mb-sm-0 d-flex flex-column justify-content-center align-items-center">
            <h5 className="text-white">Menú Árabe</h5>
            <h6 className="text-white">Sabemos lo que te gusta.</h6>
          </div>
          <div className="col-sm-3 mb-4 mb-sm-0 d-flex flex-column justify-content-center align-items-center">
            <h5 className=" text-white">Contacto</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="https://heylink.me/equipoMenuArabe/" className="text-decoration-none text-white">Nuesto equipo</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 mb-4 mb-sm-0 d-flex flex-column justify-content-center align-items-center text-center">
            <h5 className=" mb-0 text-white">Redes Sociales</h5>
            <ul className='m-0 p-0'>
              <li>
                <a href="https://www.facebook.com/" className="text-decoration-none text-white">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className="text-decoration-none text-white">Instagram</a>
              </li>
            </ul>
          </div>
      </div>
    </footer>
  )
}

export default Footer
