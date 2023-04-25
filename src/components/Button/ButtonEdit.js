import './button.css'
import { ToastContainer, toast } from 'react-toastify'

function ButtonEdit(props) {
  return (
    <div>
      <button>
        <i className="bi bi-pencil-fill px-2" ></i>
      </button>
      <ToastContainer />
    </div>
  )
}

export default ButtonEdit
