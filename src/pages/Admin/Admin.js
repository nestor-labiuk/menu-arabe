import './admin.css'
import fondo from '../../assets/img/background.jpg'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <main className='container-fluid pt-5 px-0 main-admin'>
      <h1 className='text-center pb-3'>Administración</h1>
      <div className='text-center ' >
        <img src={fondo} className='img-fluid m-0 p-0 ' alt='Imagen de comida árabe' />
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <div className='d-flex justify-content-around main-admin-buttons'>
          <Link to='/admin/menu'><Button name='Menú'/></Link>
          <Link to='/admin/users'><Button name='Clientes'/></Link>
          <Link to='/'><Button name='Pedidos'/></Link>
        </div>
      </div>
    </main>
  )
}

export default Admin
