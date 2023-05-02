import './button.css'
import { ToastContainer, toast } from 'react-toastify'

function ButtonDelete(props) {
  const reinicio = () => {
    window.location.reload(true)
  }
  const storageid = () => {
    localStorage.setItem('idd', props.name)
  }

  const dataUser = JSON.parse(sessionStorage.getItem('loguedUser'))
  const token = dataUser?.accesstoken

  const Delete = () => {
    const iddel = localStorage.getItem('idd')
    fetch(`http://localhost:8080/api/menu/${iddel}`, {
      method: 'DELETE',
      headers: {
        'accesstoken': `${token}`
      }
    })
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    toast.success('Eliminando...', {
      theme: 'dark'
    })
    setTimeout(reinicio, 3000)
  }

  return (
    <div>
      <button className='m-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={storageid} >
        <i className="bi bi-trash3-fill px-2 pb-3" ></i>
      </button>
      <ToastContainer />

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-dark" id="exampleModalLabel">Eliminación</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-dark">
              <p>¿Está seguro de eliminar el menú?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={Delete} >Eliminar menú</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default ButtonDelete
