import { useForm } from 'react-hook-form'
import '../Register/register.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useEffect, useState } from 'react'

function EditUser() {
  const [user, setUser] = useState()
  const dataUser = JSON.parse(sessionStorage.getItem('loguedUser'))
  const token = dataUser?.accesstoken
  const id = localStorage.getItem('id')
  const { register, handleSubmit, formState: { errors},setValue} = useForm()
  const fetchUser = async () => {
    const response = await fetch(`https://menu-arabe-api.onrender.com/api/users/${id}`,{
      method: 'GET',
      headers: {
        'accesstoken': `${token}`
      }
    }
    )
    const data = await response.json()
    setUser(data.user)
    setValue('isActive',data.user.isActive)
    if(data.user.isActive){
      setValue('isActive',"Available")
    }else {
      setValue('isActive',"Unavailable")
    }
    setValue('isAdmin',data.user.isAdmin)
    if(data.user.isAdmin){
      setValue('isAdmin',"AvailableM")
    }else {
      setValue('isAdmin',"UnavailableM")
    }
  }
  useEffect(() => {
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const editUser = async (body) => {
    if (body.isActive==='Available'){
      body.isActive=true
    }else{
      body.isActive=false
    }
    if (body.isAdmin==='AvailableM'){
      body.isAdmin=true
    }else{
      body.isAdmin=false
    }
    try {
      const response = await fetch(`https://menu-arabe-api.onrender.com/api/users/${id}`, {
        method: 'PUT',
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
      }else if (response.status===400){
        toast.error(`${data.message}`, {
          theme: 'dark'
        })
      } 
      else {
        toast.success(`Usuario ${body.name} Editado`, {
          theme: 'dark'
        })
        setTimeout(moveback,2000)
      }
    } catch (error) {
      toast.error('No se puedo editar el Usuario', {
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
              value={user?.name}
              maxLength={30}
              type='text'{...register('name', { required: true, minLength: 3, maxLength: 30 })}
            />
            {errors.name?.type === 'required' && <span>Campo requerido</span>}
            {errors.name?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
            <label for='isActive'>Estado-Actividad</label>
            <div className='d-flex flex-fill align-items-center justify-content-center pt-3'>
              <input name="isActive" value="Unavailable" type="radio" {...register('isActive')} />
              <label className='py-0 px-3' for="isActive">Inactivo</label>
              <input name="isActive" value="Available" type="radio" {...register('isActive')} />
              <label className='py-0 px-3' for="isActive">Activo</label>
              {errors.isActive?.type === 'required' && <span>Campo requerido</span>}
            </div>
            <label for='email'>Email</label>
            <input
              value={user?.email}
              maxLength={40}
              type='email' {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
            />
            {errors.email?.type === 'required' && <span>Campo requerido</span>}
            {errors.email?.type === 'pattern' && <span>El formato de mail no es válido</span>}
            <label for='adress'>Dirección</label>
            <input
              value={user?.adress}
              maxLength={30}
              type='text' {...register('adress', { required: true, minLength: 5 })}
            />
            {errors.adress?.type === 'required' && <span>Campo requerido</span>}
            {errors.adress?.type === 'minLength' && <span>Longitud mínima de 5 caracteres</span>}
            <label for='phoneNumber'>Número de teléfono</label>
            <input
              value={user?.phoneNumber}
              maxLength={18}
              type='text' {...register('phoneNumber', { required: true, minLength: 7, pattern: /^[0-9]+$/ })}
            />
            {errors.phoneNumber?.type === 'required' && <span>Campo requerido</span>}
            {errors.phoneNumber?.type === 'minLength' && <span>Longitud mínima de 7 caracteres</span>}
            {errors.phoneNumber?.type === 'pattern' && <span>Solo números</span>}
            <label for='isAdmin'>Estado-admin</label>
            <div className='d-flex flex-fill align-items-center justify-content-center pt-3'>
              <input name="isAdmin" value="UnavailableM" type="radio" {...register('isAdmin')} />
              <label className='py-0 px-3' for="isAdmin">No es admin</label>
              <input name="isAdmin" value="AvailableM" type="radio" {...register('isAdmin')} />
              <label className='py-0 px-3' for="isAdmin">Es admin</label>
              {errors.isAdmin?.type === 'required' && <span>Campo requerido</span>}
            </div>
              <div className='d-flex justify-content-center mt-5'>
                <Button name='Editar'>
                  <input className='mt-5 register-form-submit' type='submit' value='Editar' />
                </Button>
              </div>
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
