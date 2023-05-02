import { useForm } from 'react-hook-form'
import '../Register/register.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useEffect, useState } from 'react'

function EditMenu() {
  const [menu, setMenus] = useState()

  const dataUser = JSON.parse(sessionStorage.getItem('loguedUser'))
  const token = dataUser?.accesstoken

  const id = localStorage.getItem('id')
  const { register, handleSubmit, formState: { errors},setValue} = useForm()

  const fetchMenu = async () => {
    const response = await fetch(`http://localhost:8080/api/menu/${id}`)
  
    const data = await response.json()
    setMenus(data.menu)
    setValue('name',data.menu.name)
    setValue('state',data.menu.state)
    setValue('price',data.menu.price)
    setValue('detail',data.menu.detail)
    setValue('category',data.menu.category)
    setValue('image',data.menu.image)
  }

  useEffect(() => {
    fetchMenu()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const editMenu = async (body) => {
    try {
      const response = await fetch(`http://localhost:8080/api/menu/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json',
        'accesstoken': `${token}`,
      }
      })
      const data = await response.json()

      if (data?.errors) {
        toast.error(`${data.errors[0].msg}`, {
          theme: 'dark'
        })
      }else if (response.status===400){
        toast.error(`${data.message}`, {
          theme: 'dark'
        })
      } 
      else {
        toast.success(`Menú ${body.name} Editado`, {
          theme: 'dark'
        })
        setTimeout(moveback,3000)
      }

    } catch (error) {
      toast.error('No se puede registrar el Menú', {
        theme: 'dark'
      })
    }
  }
  const moveback = () => {
    window.history.go(-1)
  }
  const onSubmit = body => {
    editMenu(body)
    
  }

  return (
    <div>
      <div className='register-main p-5'>
        <h1 className='text-center p-3 register-title'>Editar Menú</h1>
        <div className=' d-flex justify-content-center'>
          <form className='d-flex flex-column  register-form w-75' onSubmit={handleSubmit(onSubmit)}>
            <label for='name'>Nombre</label>
            <input
              placeholder={menu?.name}
              maxLength={50}
              type='text'{...register('name', { required: true, minLength: 3, maxLength: 50 })}
            />
            {errors.name?.type === 'required' && <span>Campo requerido</span>}
            {errors.name?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <label for='state'>Estado</label>
            <div className='d-flex flex-fill align-items-center justify-content-center pt-3'>
              <input id="state" name="state" value="0" type="radio" {...register('state')} />
              <label className='py-0 px-3' for="state">No Disponible</label>
              <input id="state" name="state" value="1" type="radio" {...register('state',{ required: true})} />
              <label className='py-0 px-3' for="state">Disponible</label>
              {errors.state?.type === 'required' && <span>Campo requerido</span>}
              {errors.state?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            </div>
            <label for='price'>Precio</label>
            <input
              placeholder={menu?.price}
              maxLength={7}
              type='text' {...register('price', { required: true, minLength: 2, pattern: /^[0-9]+$/, maxLength: 7})}
            />
            {errors.price?.type === 'required' && <span>Campo requerido</span>}
            {errors.price?.type === 'minLength' && <span>Longitud mínima de 2 caracteres</span>}
            {errors.price?.type === 'pattern' && <span>Solo números</span>}
            <label for='detail'>Detalle</label>
            <input
              placeholder={menu?.detail}
              maxLength={50}
              type='text' {...register('detail', { required: false, minLength: 4})}
            />
            {errors.detail?.type === 'minLength' && <span>Longitus mínima de 4 caracteres</span>}
            <label for='category'>Categoría</label>
            <input
              placeholder={menu?.category}
              maxLength={30}
              type='text' {...register('category', { required: true, minLength: 3, maxLength: 30 })}
            />
            {errors.category?.type === 'required' && <span>Campo requerido</span>}
            {errors.category?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <label for='image'>Imagen</label>
            <input
              placeholder='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg'
              maxLength={200}
              type='text' {...register('image', { required: true, minLength: 3, maxLength: 200 })}
            />
            {errors.image?.type === 'required' && <span>Campo requerido</span>}
            {errors.image?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
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
