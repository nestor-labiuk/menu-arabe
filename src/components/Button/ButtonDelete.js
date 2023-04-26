import './button.css'
import { ToastContainer, toast } from 'react-toastify'

function ButtonDelete(props) {
  const reinicio = () => {
    window.location.reload(true)
  }
  const Delete = () => {
    fetch(`http://localhost:8080/api/menu/${props.name}`, { method: 'DELETE' })
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
      setTimeout(reinicio,3000)
  }

  return (
    <div>
      <button onClick={Delete}>
        <i className="bi bi-trash3-fill px-1" ></i>
      </button>
      <ToastContainer />
    </div>
  )
}
export default ButtonDelete
