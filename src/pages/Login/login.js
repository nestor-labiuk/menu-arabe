
import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

import './login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const createUsers = async (body) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = body => {
    createUsers(body)
  }

  return (
      <div>
      <form className="login__container " onSubmit={handleSubmit(onSubmit)}>
      <h1 className='login__title'>Logueo</h1>
    
      <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
        <input
          maxLength={30}
          placeholder='Email'
          type='email' {...register('email', { required: true, })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          maxLength={30}
          type='text'
          placeholder='Password' {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </form>
        <div className="mx-auto pt-2 form-group d-flex my-4 justify-content-end">
        <input type="submit" className="mt-2 btn btn-outline-pink-login" value="Iniciar sesión" />
        </div>
       <div className='d-flex justify-content-around main-buttons'>
        <Link to='/'><Button name='Volver' /></Link>
      </div>
      </form>
      
    </div>
  )
}

export default Login
