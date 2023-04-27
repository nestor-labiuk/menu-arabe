import React from 'react'
import './menucard.css'
import { Link } from 'react-router-dom'

const MenuCard = ({
  name, id, category, detail, image, price 
}) => {

  return (
    <main className='menumain'>

      <article className='menu-card gap-3 px-3' id={id}>

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
          <Link to='/order' className='link-menu'>Pedir Menú</Link>
        </footer>
      </article>

    </main>
  )
}

export default MenuCard

//<Link to={`/product/}${id}`}>