import React, { useEffect, useState } from 'react'
import './adminOrders.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import AdminOrderCard from '../../components/AdminOrderCard/AdminOrderCard'

function AdminOrders() {
  const [orders, setOrders] = useState([])
  const fetchOrders = async () => {
    const response = await fetch('https://menu-arabe-api.onrender.com/api/orders')
    const data = await response.json()
    setOrders(data.orders)
  }
  useEffect(() => {
    fetchOrders()
  }, [])
  
  return (
    <main className='mx-0 pt-5 adminMenu'>
      <h1 className='text-center pb-3 '>Administración de Pedidos</h1>
      <div className='mx-3'>
        <tr className="d-flex justify-content-center table-responsive">
          <th className='border border-black col-2 text-center col-sm-2'>Nombre</th>
          <th className='border border-black col-2 text-center borrar'>Dirección</th>
          <th className='border border-black col-2 text-center borrar'>Menú</th>
          <th className='border border-black col-1 text-center borrar'>$</th>
          <th className='border border-black col-2 text-center col-sm-2'>Fecha</th>
          <th className='border border-black col-1 text-center borrar'>Estado</th>
          <th className='border border-black col-1 text-center borrar'>Accion</th>
        </tr>
      </div>
      <div className='colorBack' >
      {
        orders?.length === 0 || orders === undefined
          ? <h3 className='mt-5 text-white text-center'> Cargando Pedidos... </h3>
          : orders?.map((order) => (<AdminOrderCard key={order._id} {...order} />))
      }    
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <div className='d-flex justify-content-around main-admin-buttons mt-2 '>
          <Link to='/admin'><Button name='Volver' /></Link>
          <Link to='/'><Button name='Inicio' /></Link>
        </div>
      </div>
    </main>
  )
}

export default AdminOrders
