import React from 'react'
import './menu.css'
import { useState, useEffect } from 'react'
import MenuCard from '../../components/MenuCard/MenuCard'

const Menu = () => {
  const user = JSON.parse(sessionStorage.getItem('loguedUser'))
  console.log(user)

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
          menus?.length === 0
            ? <h3 className="mt-5 text-white"> Cargando menus... </h3>
            : menus?.map((menu, index)=>
              (<MenuCard key={index} {...menu}
              user={user}
              />              
            ))
        }

      </div>
    </main>
  )
}

export default Menu