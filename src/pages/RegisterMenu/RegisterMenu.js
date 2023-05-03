import { useForm } from 'react-hook-form'
import '../Register/register.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

const FormRegister = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const dataUser = JSON.parse(sessionStorage.getItem('loguedUser'))
  const token = dataUser?.accesstoken
  const createMenu = async (body) => {
    try {
      const response = await fetch('https://menu-arabe-api.onrender.com/api/menu', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 
          'Content-Type': 'application/json',
          'accesstoken': `${token}`
      }
      })
      const data = await response.json()
      if (data?.errors) {
        toast.error(`${data.errors[0].msg}`, {
          theme: 'dark'
        })
      } else if (response.status===400){
        toast.error(`${data.message}`, {
          theme: 'dark'
        })
      }
      else {
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
  const onSubmit = body => {
    createMenu(body)
    reset()
  }

  return (
    <div>
      <div className='register-main p-5'>
        <h1 className='text-center p-3 register-title'>Registro de Menúes</h1>
        <div className=' d-flex justify-content-center'>
          <form className='d-flex flex-column  register-form w-75' onSubmit={handleSubmit(onSubmit)}>
            <label for='nombre'>Nombre</label>
            <input
              placeholder='Sfijas'
              maxLength={30}
              type='text'{...register('name', { required: true, minLength: 3, maxLength: 30 })}
            />
            {errors.name?.type === 'required' && <span>Campo requerido</span>}
            {errors.name?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <label for='state'>Estado</label>
            <div className='d-flex flex-fill align-items-center justify-content-center pt-3'>
            <div className='d-flex flex-fill align-items-center justify-content-center pt-3'>
              <input id="state" name="state" value="0" type="radio" {...register('state')} />
              <label className='py-0 px-3' for="state">No Disponible</label>
              <input id="state" name="state" value="1" type="radio" {...register('state',{ required: true})} />
              <label className='py-0 px-3' for="state">Disponible</label>
              {errors.state?.type === 'required' && <span>Campo requerido</span>}
              {errors.state?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            </div>
            </div>
            <label for='price'>Precio</label>
            <input
              placeholder='1000'
              maxLength={7}
              type='text' {...register('price', { required: true, minLength: 2, pattern: /^[0-9]+$/, maxLength: 7})}
            />
            {errors.price?.type === 'required' && <span>Campo requerido</span>}
            {errors.price?.type === 'minLength' && <span>Longitud mínima de 2 caracteres</span>}
            {errors.price?.type === 'pattern' && <span>Solo números</span>}
            <label for='detail'>Detalle</label>
            <input
              maxLength={20}
              placeholder='Sin picante'
              type='text' {...register('detail', { required: false, minLength: 4 })}
            />
            {errors.detail?.type === 'minLength' && <span>Longitus mínima de 4 caracteres</span>}
            <label for='category'>Categoría</label>
            <input
              placeholder='Carnes'
              maxLength={30}
              type='text' {...register('category', { required: true, minLength: 3, maxLength: 30 })}
            />
            {errors.category?.type === 'required' && <span>Campo requerido</span>}
            {errors.category?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <label for='image'>Imagen</label>
            <input
              placeholder='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'
              maxLength={100}
              type='text' {...register('image', { required: true, minLength: 3, maxLength: 100 })}
            />
            {errors.image?.type === 'required' && <span>Campo requerido</span>}
            {errors.image?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <input className='mt-5 register-form-submit' type='submit' value='Registrarse' />
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

export default FormRegister
