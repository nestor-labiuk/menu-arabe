import './button.css'
import { ToastContainer, toast } from 'react-toastify'

function ButtonEdit(props) {

  const Storage = () => {
    const id = 'id'
    localStorage.setItem(id,props.name)
  }

  return (
    <div>
      <button onClick={Storage}>
        <i className="bi bi-pencil-fill px-2" ></i>
      </button>
      <ToastContainer />
    </div>
  )
}

export default ButtonEdit
