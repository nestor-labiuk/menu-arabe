import { useForm } from 'react-hook-form'
import './register.css'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormRegister = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const createUsers = async (body) => {
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      toast('hola')
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const onSubmit = body => {
    createUsers(body)
    reset()
  }

  return (
    <div>
      <div className='register-main p-5'>
        <h1 className='text-center p-3 register-title'>Registro</h1>
        <div className=' d-flex justify-content-center'>
          <form className='d-flex flex-column  register-form' onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder='Nombre'
              maxLength={30}
              type='text'{...register('name', { required: true, minLength: 3, maxLength: 12 })}
            />
            {errors.name && <span>Longitud mínima es 3 caracteres</span>}
            <input
              placeholder='Email'
              maxLength={30}
              type='email' {...register('email', { required: true, })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              placeholder='Dirección'
              maxLength={30}
              type='text' {...register('adress', { required: true, })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              placeholder='teléfono'
              maxLength={12}
              type='textsfd' {...register('phoneNumber', { required: true, })}
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              maxLength={12}
              placeholder='Password'
              type='text' {...register('password', { required: true })}
            />
            {errors.password && <span>This field is required</span>}
            <input type='submit' value='Registrarse' />
            <input type='reset' value='Reset' />
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
