import React, { useEffect, useState } from 'react'
import './adminMenu.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import AdmMenuCard from '../../components/AdmMenuCard/AdmMenuCard'

function AdminMenu() {
  const [menus, setMenus] = useState([])
  const [currentMenus, setCurrentMenus] = useState(0)
  const [totalMenus, setTolalMenus] = useState(0)
  const dataUser = JSON.parse(sessionStorage.getItem('loguedUser'))
  const token = dataUser?.accesstoken
  const fetchMenus = async (from) => {
    const response = await fetch(`https://menu-arabe-api.onrender.com/api/menu?from=${from}`,{
      method: 'GET',
      headers: { 
        'accesstoken': `${token}`
      }
    })
    const data = await response.json()
    setTolalMenus(data.total)
    setMenus(data.menus)
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
  useEffect(() => {
    fetchMenus(currentMenus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentMenus,token])

  return (
    <main className='mx-0 pt-5 adminMenu'>
      <h1 className='text-center pb-3 '>Menú Admin</h1>
      <div className='mx-3'>
        <tr className="d-flex justify-content-center">
          <th className='border border-black col-4 text-center col-sm-2'>Nombre</th>
          <th className='border border-black col-2 text-center borrar'>Estado</th>
          <th className='border border-black col-1 text-center borrar'>$</th>
          <th className='border border-black col-2 text-center borrar'>Detalle</th>
          <th className='border border-black col-2 text-center borrar'>Categoría</th>
          <th className='border border-black col-4 text-center col-sm-2'>Imagen</th>
          <th className='border border-black col-4 text-center col-sm-1'>Opc</th>
        </tr>
      </div>
      <div className='colorBack' >
      {
        menus?.length === 0 || menus === undefined
          ? <h3 className='mt-5 text-white text-center'> Cargando Menús... </h3>
          : menus?.map((menu) => (<AdmMenuCard key={menu._id} {...menu} />))
      }    
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <div className='d-flex justify-content-around main-admin-buttons mt-2 mb-5'>
          <Link to='/admin/menu/registermenu'><Button name='Nuevo Menú'/></Link>
        </div>
        <div className='d-flex justify-content-around main-admin-buttons mb-3'>
          <Link to='/admin/users'><Button name='Clientes'/></Link>
          <Link to='/admin/orders'><Button name='Pedidos'/></Link>
        </div>
        <div className='d-flex justify-content-around main-admin-buttons mb-3 mt-3'>
          <Button name='Anterior' onClick={handlePrevPage}></Button>
          <h4>{currentMenus}-{(currentMenus)+10} </h4>
          <Button name='Siguiente' onClick={handleNexPage}></Button>
        </div>
      </div>
    </main>
  )
}

export default AdminMenu
