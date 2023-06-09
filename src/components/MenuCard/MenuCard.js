import React from 'react'
import './menucard.css'
import { ToastContainer, toast } from 'react-toastify'

const MenuCard = ({
  name, id, category, detail, image, price, user,
}) => {
  const makeOrder = async () => {
    try {
      const response = await fetch('https://menu-arabe-api.onrender.com/api/orders', {
        method: 'POST',
        body:JSON.stringify({ 
          userName: user.user.name,
          userAddress: user.user.adress,
          menuName: name,
          menuPrice: price            
        }),
          headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()
        if (data?.errors) {
          toast.error(`${data.errors[0].msg}`, {
            theme: 'dark'
          })
        } else {
          toast.success('Pedido creado', {
            theme: 'dark'
          })
        }
      } catch (error) {
        toast.error('No se puede realizar el pedido. Se requiere iniciar sesión', {
          theme: 'dark'
        })
      }
    }
  return (
    <main className='menumain'>
      <article className='menu-card text-center mt-3' id={id} >
          <h5 className='d-flex justify-content-center mt-3 title-card'>{name}</h5>
        <section className='card-body d-flex flex-column gap-2'>
          <img src={image} alt={name} className=''/>
          <div>
            <span className='badge text-bg-secondary'>{category}</span>
          </div>
          <p>{detail}</p>
        </section>
        <footer className='card-footer pb-2 mb-2'>
          <h5>${Number(price).toFixed(2)}</h5>
          <button className='m-2 buttonMenu' data-bs-toggle="modal" data-bs-target="#exampleModal">Pedir Menú</button>
        </footer>
      </article>
      <div><ToastContainer/></div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Confirmación</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-dark">
              <p>¿Está seguro de que confirma el pedido?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={makeOrder} >Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MenuCard
