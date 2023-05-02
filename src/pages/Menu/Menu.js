import React from 'react'
import './menu.css'
import { useState, useEffect } from 'react'
import MenuCard from '../../components/MenuCard/MenuCard'
import Button from '../../components/Button/Button'

const Menu = () => {
  const user = JSON.parse(sessionStorage.getItem('loguedUser'))
  console.log(user)

  const [menus, setMenus] = useState([])
  const [currentMenus, setCurrentMenus] = useState(0)
  const [totalMenus, setTolalMenus] = useState(0)

  const fetchMenus = async (from)=>{
    const response = await fetch(`http://localhost:8080/api/menu?from=${from}`)
    const data = await response.json()
    setMenus(data.menus)
    setTolalMenus(data.total)
  }

  const handleNexPage = async () => {
    if(totalMenus > currentMenus + 10){
      setCurrentMenus(currentMenus => currentMenus + 10)    
  }

  }
  const handlePrevPage = async () => {
    if (currentMenus > 10) {
      setCurrentMenus(currentMenus => currentMenus - 10)
    }else{
      setCurrentMenus(currentMenus => currentMenus = 0)
    }
  }
  
  useEffect(()=>{
    fetchMenus(currentMenus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMenus])

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
      <div className='d-flex align-items-center justify-content-center'>
        <div className='d-flex justify-content-around main-admin-buttons mb-3 mt-3'>
          <Button name='Anterior' onClick={handlePrevPage} className='button-menu'></Button>
          <h4>{currentMenus}-{(currentMenus)+10} </h4>
          <Button name='Siguiente' onClick={handleNexPage} className='button-menu'></Button>
        </div>
      </div>
    </main>
  )
}

export default Menu