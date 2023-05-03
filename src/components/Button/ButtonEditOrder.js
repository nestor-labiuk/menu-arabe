import './button.css'
import { ToastContainer, toast } from 'react-toastify'

function ButtonEditOrder(props) {
  const storageid = () => {
    localStorage.setItem('id', props.id)
  }
  const EditStatus = async (body) => {
    const id = localStorage.getItem('id')
    const Body = {
      "status":  false
    }
    try {
      const response = await fetch(`https://menu-arabe-api.onrender.com/api/orders/${id}`, {
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
      <button className='m-2'
      data-bs-toggle="modal"
      onClick={storageid}
      data-bs-target="#exampleModal">
        {props.name}
      </button>
      <ToastContainer />
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Enviar</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-dark">
              <p>¿Está seguro de enviar el pedido?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={EditStatus} >Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonEditOrder
