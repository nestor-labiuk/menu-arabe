import React, { useEffect, useState } from 'react'
import './adminMenu.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
// import Card from '../../components/Card/Card'

function AdminMenu() {
  const [menus, setMenus] = useState([])

  const fetchMenus = async () => {
    const response = await fetch('http://localhost:8080/api/menu')
    const data = await response.json()
    setMenus(data.menus)
    console.log(data.menus)
  }

  useEffect(() => {
    fetchMenus()
  }, [])


  return (
    <main className='container-fluid pt-5 px-0 main-admin'>
      <h1 className='text-center pb-3'>Menú Admin</h1>
      <div className='mt-3 d-flex justify-content-center gap-3 flex-wrap'>
        <p>{menus.menus}</p>        
      </div>
      
      <div className='d-flex justify-content-center mt-5'>
        <div className='d-flex justify-content-around main-admin-buttons'>
          <Link to='/'><Button name='Clientes'/></Link>
          <Link to='/'><Button name='Pedidos'/></Link>
        </div>
      </div>
    </main>
  )
}

export default AdminMenu
