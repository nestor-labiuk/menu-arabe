import { useForm } from 'react-hook-form'
import '../Register/register.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useEffect, useState } from 'react'

function EditMenu() {
  const [menu, setMenus] = useState([])
  const id = localStorage.getItem('id')
  const fetchMenu = async () => {
    const response = await fetch(`http://localhost:8080/api/menu/${id}`)
    const data = await response.json()
    setMenus(data.menu)
  }

  useEffect(() => {
    fetchMenu()
  }, [])

  const preloadMenu = {
    namen: menu.name,

  }

  const { register, handleSubmit, formState: { errors }, reset} = useForm({defaultValues : preloadMenu})


  const EditMenu = async (body) => {
    try {
      const response = await fetch(`http://localhost:8080/api/menu/%${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()

      if (data?.errors) {
        toast.error(`${data.errors[0].msg}`, {
          theme: 'dark'
        })
      } else {
        toast.success(`Menú ${body.name} creado`, {
          theme: 'dark'
        })
      }

    } catch (error) {
      toast.error('No se puede registrar el Menú', {
        theme: 'dark'
      })
    }
  }
  const moveback = () => {
    window.location.href = 'http://localhost:3000/admin/menu'
  }
  const onSubmit = body => {
    EditMenu(body)
    reset()
    moveback()
  }

  return (
    <div>
      <div className='register-main p-5'>
        <h1 className='text-center p-3 register-title'>Editar Menú</h1>
        <div className=' d-flex justify-content-center'>
          <form className='d-flex flex-column  register-form' onSubmit={handleSubmit(onSubmit)}>
          <label for='idn'>ID</label>
            <input
              value={id}
              type='text'{...register('idn', { required: true, minLength: 3, maxLength: 30 })}
            />
            <label for='namen'>Nombre</label>
            <input
              // defaultValue={menu.name}
              placeholder={menu.name}
              maxLength={50}
              type='text'{...register('namen', { required: true, minLength: 3, maxLength: 50 })}
            />
            {errors.namen?.type === 'required' && <span>Campo requerido</span>}
            {errors.namen?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <label for='staten'>Estado</label>
            <input
              defaultValue={menu.state}
              placeholder={menu.state}
              maxLength={30}
              type='text' {...register('staten', { required: true, minLength: 3, maxLength: 30 })}
            />
            {errors.staten?.type === 'required' && <span>Campo requerido</span>}
            {errors.staten?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <label for='pricen'>Precio</label>
            <input
              defaultValue={menu.price}n
              placeholder={menu.price}
              maxLength={7}
              type='text' {...register('pricen', { required: true, minLength: 2, pattern: /^[0-9]+$/, maxLength: 7})}
            />
            {errors.pricen?.type === 'required' && <span>Campo requerido</span>}
            {errors.pricen?.type === 'minLength' && <span>Longitud mínima de 2 caracteres</span>}
            {errors.pricen?.type === 'pattern' && <span>Solo números</span>}
            <label for='detailn'>Detalle</label>
            <input
              defaultValue={menu.detail}
              placeholder={menu.detail}
              maxLength={50}
              type='text' {...register('detailn', { required: false, minLength: 4})}
            />
            {errors.detailn?.type === 'minLength' && <span>Longitus mínima de 4 caracteres</span>}
            <label for='categoryn'>Categoría</label>
            <input
              defaultValue={menu.category}
              placeholder='vegetariano'
              maxLength={30}
              type='text' {...register('categoryn', { required: true, minLength: 3, maxLength: 30 })}
            />
            {errors.categoryn?.type === 'required' && <span>Campo requerido</span>}
            {errors.categoryn?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <label for='imagen'>Imagen</label>
            <input
              defaultValue={menu.image}
              placeholder='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'
              maxLength={200}
              type='text' {...register('imagen', { required: true, minLength: 3, maxLength: 200 })}
            />
            {errors.imagen?.type === 'required' && <span>Campo requerido</span>}
            {errors.imagen?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <input className='mt-5 register-form-submit' type='submit' value='Editar' />
          </form>
        </div>
        <div className='d-flex justify-content-center p-5'>
          <Link to='/admin/menu'><Button name='Volver' /></Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default EditMenu
