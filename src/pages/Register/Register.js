import { useForm } from 'react-hook-form'
import './register.css'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { React, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormRegister = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigateTo = useNavigate()
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const createUsers = async (body) => {
    try {
      setIsLoading(true)
      const response = await fetch('https://menu-arabe-api.onrender.com/api/users', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      if (data?.errors) {
        toast.error(`${data.errors[0].msg}`, {
          theme: 'dark'
        })
      } else {
        toast.success(`Usuario ${data.user} creado`, {
          theme: 'dark'
        })
        setTimeout(navigate, 2500)
      }
    } catch (error) {
      toast.error('No se puede registrar el usuario', {
        theme: 'dark'
      })
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  const navigate = () => {
    navigateTo('/login')
  }
  const onSubmit = body => {
    createUsers(body)
  }
  const handleclick = () => {
    reset()
  }


  return (
    <div>
      <div className='register-main p-5'>
        <h1 className='text-center p-3 register-title'>Registro</h1>
        <div className=' d-flex justify-content-center'>
          <form className='d-flex flex-column  register-form' onSubmit={handleSubmit(onSubmit)}>
            <label for='nombre'>Nombre</label>
            <input
              placeholder='Pedro Picapiedras'
              maxLength={30}
              type='text'{...register('name', { required: true, minLength: 3, maxLength: 30 })}
            />
            {errors.name?.type === 'required' && <span>Campo requerido</span>}
            {errors.name?.type === 'minLength' && <span>Longitud mínima es 3 caracteres</span>}
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
              placeholder='Entre 8 y 12 caracteres'
              type='password' {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password?.type === 'required' && <span>Campo requerido</span>}
            {errors.password?.type === 'minLength' && <span>Longitus mínima de 8 caracteres</span>}
            <div className='d-flex justify-content-between pt-5'>
              <Button name='Registrate' disabled={isLoading}>
                <input type='submit' value='Registrarse' />
              </Button>
              <Button name='Limpiar' onClick={handleclick}></Button>
            </div>
          </form>
        </div>
        <div className='d-flex justify-content-center p-5'>
          <Link to='/'><Button name='Volver' /></Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default FormRegister
