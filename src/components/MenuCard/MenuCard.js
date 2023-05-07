import React from 'react'
import './menucard.css'
import Button from '../Button/Button'
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
      <article className='menu-card gap-3 px-3' id={id} >
        <section className=' card-body d-flex flex-column gap-2'>
          <hr/>
          <h5>{name}</h5>
          <img src={image} alt={name}/>
          <div>
            <span className='badge text-bg-secondary'>{category}</span>
          </div>
          <p>{detail}</p>
        </section>
        <footer className='card-footer pb-2 mt-2'>
          <h5>${Number(price).toFixed(2)}</h5>
          <Button name='Pedir menú' onClick={makeOrder} />
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
              <p>¿Confirma el pedido?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary"  data-bs-dismiss="modal" onClick={makeOrder}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MenuCard
