import React from 'react'
import './menucard.css'
import Button from '../Button/Button'
import { ToastContainer, toast } from 'react-toastify'

const MenuCard = ({
  name, id, category, detail, image, price, user, menu,
}) => {
  
  const makeOrder = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/orders', {
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
        console.log(data)
  
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
        console.log(error)
      }
    }

  return (
    <main className='menumain'>

      <article className='menu-card gap-3 px-3' id={id} >

        <section className='card-body d-flex flex-column gap-2'>
          <hr/>
          <h5>{name}</h5>
          <img src={image} alt={name}/>
          <div>
            <span className='badge text-bg-secondary'>{category}</span>
          </div>
          <p>{detail}</p>
        </section>

        <footer className='card-footer pb-2'>
          <h5>${Number(price).toFixed(2)}</h5>
          <Button name='Pedir menú' onClick={makeOrder} />
        </footer>
      </article>
      <div><ToastContainer/></div>

    </main>
  )
}

export default MenuCard

