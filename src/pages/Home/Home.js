import './Home.css'
import baba from '../../assets/img/fondo.jpg'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className='container-fluid pt-5 px-0 main'>
        <h1 className='text-center pb-3'>Comida Árabe</h1>
      <div className='text-center ' >
        <img src={baba} className='img-fluid m-0 p-0 ' alt='Imagen de comida árabe' />
      </div>
      <div className='text-center mx-2'>
        <h2 className='pt-5'>Preparáte para degustar la mejor comida árabe en Tucumán</h2>
        <p className='fs-5 p-3 main-p'>Te invitamos a visitar nuestro local en el barrio Gral. Paz. </p>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-around main-buttons'>
          <Link to='register'><Button name='Menú'/></Link>
          <Link to='login'><Button name='Logueo'/></Link>
          <Link to='register'><Button name='Registrate'/></Link>
          <Link to='admin'><Button name='Admin'/></Link>
        </div>
      </div>
    </main>
  )
}

export default Home
