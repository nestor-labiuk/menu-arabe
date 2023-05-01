import { useForm } from 'react-hook-form'
import '../Register/register.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useEffect, useState } from 'react'

function EditUser() {
  const [user, setUser] = useState()
  const id = localStorage.getItem('id')
  console.log(id)
  const { register, handleSubmit, formState: { errors},setValue} = useForm()

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:8080/api/users/${id}`)
    const data = await response.json()
    setUser(data.user)
    console.log(data)
    setValue('name',data.user.name)
    setValue('email',data.user.email)
    setValue('adress',data.user.adress)
    setValue('phoneNumber',data.user.phoneNumber)
    setValue('password',data.user.password)
    setValue('isActive',data.user.isActive)
    setValue('isAdmin',data.user.isAdmin)
  }

  useEffect(() => {
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const editUser = async (body) => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
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
        toast.success(`Usuario ${body.name} Editado`, {
          theme: 'dark'
        })
        setTimeout(moveback,3000)
      }

    } catch (error) {
      toast.error('No se puede registrar el Usuario', {
        theme: 'dark'
      })
    }
  }
  const moveback = () => {
    window.history.go(-1)
  }
  const onSubmit = body => {
    editUser(body)
    
  }

  return (
    <div>
      <div className='register-main p-5'>
        <h1 className='text-center p-3 register-title'>Editar Usuario</h1>
        <div className=' d-flex justify-content-center'>
          <form className='d-flex flex-column  register-form w-75' onSubmit={handleSubmit(onSubmit)}>
            <label for='name'>Nombre</label>
            <input
              placeholder={user?.name}
              maxLength={30}
              type='text'{...register('name', { required: true, minLength: 3, maxLength: 30 })}
            />
            {errors.name?.type === 'required' && <span>Campo requerido</span>}
            {errors.name?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <label for='state'>Estado</label>
            <div className='d-flex flex-fill align-items-center justify-content-center pt-3'>
              <input id="state" name="state" value="0" type="radio" {...register('state')} />
              <label className='py-0 px-3' for="state">Activo</label>
              <input id="state" name="state" value="1" type="radio" {...register('state',{ required: true})} />
              <label className='py-0 px-3' for="state">Inactivo</label>
              {errors.state?.type === 'required' && <span>Campo requerido</span>}
              {errors.state?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            </div>
            <label for='email'>Email</label>
            <input
              placeholder='email@email.com'
              maxLength={40}
              type='email' {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
            />
            {errors.email?.type === 'required' && <span>Campo requerido</span>}
            {errors.email?.type === 'pattern' && <span>El formato de mail no es válido</span>}
            <label for='adress'>Dirección</label>
            <input
              placeholder='Mi dirección 1234'
              maxLength={30}
              type='text' {...register('adress', { required: true, minLength: 5 })}
            />
            {errors.adress?.type === 'required' && <span>Campo requerido</span>}
            {errors.adress?.type === 'minLength' && <span>Longitud mínima de 5 caracteres</span>}
            <label for='phoneNumber'>Número de teléfono</label>
            <input
              placeholder='123456789'
              maxLength={18}
              type='text' {...register('phoneNumber', { required: true, minLength: 7, pattern: /^[0-9]+$/ })}
            />
            {errors.phoneNumber?.type === 'required' && <span>Campo requerido</span>}
            {errors.phoneNumber?.type === 'minLength' && <span>Longitud mínima de 7 caracteres</span>}
            {errors.phoneNumber?.type === 'pattern' && <span>Solo números</span>}
            <label for='password'>Contraseña</label>
            <input
              maxLength={12}
              placeholder='Muysegura1234'
              type='password' {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Longitus mínima de 8 caracteres</span>}
            <label for='isActive'>Estado admin</label>
            <div className='d-flex flex-fill align-items-center justify-content-center pt-3'>
              <input id="isActive" name="isActive" value="0" type="radio" {...register('isActive')} />
              <label className='py-0 px-3' for="isActive">No es admin</label>
              <input id="isActive" name="isActive" value="1" type="radio" {...register('isActive',{ required: true})} />
              <label className='py-0 px-3' for="isActive">Es admin</label>
              {errors.isActive?.type === 'required' && <span>Campo requerido</span>}
            </div>
              <input className='mt-5 register-form-submit' type='submit' value='Editar' />
            </form>
        </div>
        <div className='d-flex justify-content-center p-5'>
          <Link to='/admin/users'><Button name='Volver' /></Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default EditUser
