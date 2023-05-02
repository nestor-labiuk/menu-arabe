import React from 'react'
import './menu.css'
import { useState, useEffect } from 'react'
import MenuCard from '../../components/MenuCard/MenuCard'
import { Link } from 'react-router-dom'
// import Button from '../../components/Button/Button'

const Menu = () => {
  const [menus, setMenus] = useState([])

  const fetchMenus = async ()=>{
    const response = await fetch('http://localhost:8080/api/menu')
    const data = await response.json()
    setMenus(data.menus)
  }
  
  useEffect(()=>{
    fetchMenus() 
  }, [])

  return (
    <main className='main-menu'>
      <header className='header-menu'>Toda el sabor de la comida Arabe llevada a tu mesa</header>
      <div className="mt-3 d-flex justify-content-center flex-wrap gap-3">
        {
          menus.length === 0
            ? <h3 className="mt-5 text-white"> Cargando menus... </h3>
            : menus?.map((menu, index)=>
              (<MenuCard key={index} {...menu}/>
            ))
        }

      </div>
      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-around flex-column flex-sm-row  align-items-center main-buttons gap-4'>
          <Link to='/' className='link-menu text-white'>Home</Link>
          <Link to='/register' className='link-menu text-white'>Ingresa</Link>
          <Link to='/tegister' className='link-menu text-white'>Registrate</Link>
          <Link to='/admin' className='link-menu text-white'>Admin</Link>



          {/* <Link to='/'><Button name='Home'/></Link>
          <Link to='register'><Button name='Ingresa'/></Link>
          <Link to='register'><Button name='Registrate'/></Link>
          <Link to='admin'><Button name='Admin'/></Link> */}
        </div>
      </div>
    </main>
  )
}

export default Menu