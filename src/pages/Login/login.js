import { useForm } from 'react-hook-form';
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const createUsers = async (body) => {
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
      })
      const data = await response.json()
      console.log(data)
      console.log(data.message)
      if (data.messageError) {
        toast.error((data.messageError), {
          theme: 'dark'
        })
      } else {
        toast.success((data.messageAccess), {
          theme: 'dark'
        })
        sessionStorage.setItem('loguedUser', JSON.stringify(data) )
        setTimeout(moveback,3000)
        
      }
    } catch (error) {
      console.log(error)
      console.log(error.message)
    }


  }
  
  const moveback = () => {
    window.history.go(-1)
  }


  const onSubmit = body => {
    createUsers(body)
    reset()
  }
  return (
    <div>
      <div className='login-main p-5'>
        <h1 className='text-center p-3 login-title'>Logueo</h1>
        <div className=' d-flex justify-content-center'>
          <form className='d-flex flex-column  login-form' onSubmit={handleSubmit(onSubmit)}>
            <label for='email'>Correo electrónico</label>
            <input
              placeholder='email@email.com'
              maxLength={40}
              type='email' {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
            />
            {errors.email?.type === 'required' && <span>Este campo es obligatorio</span>}
            <label for='password'>Contraseña</label>
            <input
              maxLength={12}
              placeholder='Contraseña'
              type='password' {...register('password', { required: true })}
            />
            {errors.password?.type === 'required' && <span>Este campo es obligatorio</span>}
            <div className='d-flex justify-content-center pt-5'>
      
              <Button name='Ingresar' >
                <input type='submit' value='Registrarse' /></Button>
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
export default Login
