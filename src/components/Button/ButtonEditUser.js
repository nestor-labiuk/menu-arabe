import './button.css'
import { ToastContainer,} from 'react-toastify'

function ButtonEditUser(props) {
  const Storage = () => {
    const id = 'id'
    localStorage.setItem(id,props.name)
  }
  return (
    <div>
      <button className='m-2' onClick={Storage}>
        <i className="bi bi-pencil-fill px-2 pb-3" ></i>
      </button>
      <ToastContainer />
    </div>
  )
}

export default ButtonEditUser
