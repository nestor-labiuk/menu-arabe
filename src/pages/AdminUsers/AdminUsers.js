import React, { useEffect, useState } from 'react'
import './adminUsers.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import AdmUserCard from '../../components/AdmUserCard/AdmUserCard'

function AdminUsers() {
  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
    const response = await fetch('http://localhost:8080/api/users')
    const data = await response.json()
    setUsers(data.users)
    console.log(data.users)
  }

  useEffect(() => {
    fetchUsers()
  }, [])


    return (
     <main className='mx-0 pt-5 adminMenu'>
       <h1 className='text-center pb-3 '>Administracion de Usuarios</h1>
     <div className='mx-3'>
       <tr className="d-flex justify-content-center">
         <th className='border border-black col-4 text-center col-sm-2'>Nombre</th>
         <th className='border border-black col-4 text-center col-sm-2'>Email</th>
         <th className='border border-black col-2 text-center borrar'>Direccion</th>
         <th className='border border-black col-2 text-center borrar'>Numero de telefono</th>
         {/* <th className='border border-black col-2 text-center col-sm-2'>Contraseña</th> */}
         <th className='border border-black col-1 text-center borrar'>Activo</th>
         <th className='border border-black col-1 text-center borrar'>Usuario Admin</th>
         <th className='border border-black col-3 text-center col-sm-1'>Opc</th>
       </tr>
       
     </div>
     <div className='colorBack' >

     {
       users?.length === 0 || users === undefined
         ? <h3 className='mt-5 text-white text-center'> Cargando Usuarios... </h3>
         : users?.map((user) => (<AdmUserCard key={user._id} {...user} />))
     }    
     </div>
     <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
       <div className='d-flex justify-content-around main-admin-buttons mt-2 mb-5'>
         <Link to='/admin/menu/registermenu'><Button name='Nuevo Menu'/></Link>
       </div>
       <div className='d-flex justify-content-around main-admin-buttons mb-3'>
         <Link to='/admin/menu'><Button name='Menu'/></Link>
         <Link to='/'><Button name='Pedidos'/></Link>
       </div>
     </div>
   </main>
 )
}

export default AdminUsers