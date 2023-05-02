import './button.css'
import { ToastContainer, toast } from 'react-toastify'

function ButtonEditOrder(props) {
  
  console.log(props.id)
  const Id = props.id

  const EditStatus = async (body) => {
    const Body = {
      "status":  false
    }
    try {
      const response = await fetch(`http://localhost:8080/api/orders/${Id}`, {
        method: 'PUT',
        body: JSON.stringify(Body),
        headers: { 'Content-Type': 'application/json' }

      })
      const data = await response.json()

      if (data?.errors) {
        toast.error(`${data.errors[0].msg}`, {
          theme: 'dark'
        })
      } else if (response.status === 400) {
        toast.error(`${data.message}`, {
          theme: 'dark'
        })
      }
      else {
        toast.success(`Pedido enviado`, {
          theme: 'dark'
        })
        setTimeout(restart,3000)
        
      }

    } catch (error) {
      toast.error('No se puede editar el pedido', {
        theme: 'dark'
      })
    }
  }

  const restart = () => {
    window.location.reload()
  }

  return (
    <div>
      <button className='m-2' onClick={EditStatus}>
        {props.name}
      </button>
      <ToastContainer />
    </div>
  )
}

export default ButtonEditOrder
