import { useForm } from 'react-hook-form'
import './register.css'

const FormRegister = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const createUsers = async (body) => {
    try {
      const response = await fetch('http://localhost:8080/api/users', {
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
    <div className='register__container'>

      <h1 className='register__title'>Registro</h1>

      <form className='register__form' onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder='Nombre'
          maxLength={12}
          type='text'{...register('name', { required: true, minLength: 3, maxLength: 12 })}
        />
        {errors.name && <span>Longitud mínima es 3 caracteres</span>}

        <input
          maxLength={12}
          placeholder='Email'
          type='email' {...register('email', { required: true, })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          maxLength={12}
          placeholder='Dirección'
          type='text' {...register('adress', { required: true, })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
       
        <input
          maxLength={12}
          placeholder='teléfono'
          type='number' {...register('phoneNumber', { required: true, })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          maxLength={12}
          type='text'
          placeholder='Password' {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type='submit' value='Registrarse' />

        <input type='reset' value='Reset' />

      </form>
    </div>
  )
}

export default FormRegister
