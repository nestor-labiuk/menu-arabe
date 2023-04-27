import './admUserCard.css'
import ButtonDeleteUser from '../Button/ButtonDeleteUser'
import { Link } from 'react-router-dom'
import ButtonEdit from '../Button/ButtonEdit'

function AdmUserCard({ _id, name, email, adress,phoneNumber,password,isActive,isAdmin }) {
  return (
      <div className="mx-3">
        <tr className="d-flex justify-content-center">
          <td className='border border-black d-flex justify-content-center align-items-center col-4 text-center col-sm-2 ' >{name}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-4 text-center col-sm-2 ' >{email}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-2 text-center borrara' >{adress}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-2 text-center borrara' >{phoneNumber}</td>
          {/* <td className='border border-black d-flex justify-content-center align-items-center col-2 text-center borrara' >{password}</td> */}
          {/* <td className='border border-black d-flex justify-content-center align-items-center col-1 text-center borrara' >{isActive}</td> */}
          <td className='border border-black d-flex justify-content-center align-items-center col-1 text-center borrara' >
            { isActive === true
              ? <p> Activo </p>
              : <p> No Activo </p>
            }
          </td>
          {/* <td className='border border-black d-flex justify-content-center align-items-center col-1 text-center borrara' >{isAdmin}</td> */}
          <td className='border border-black d-flex justify-content-center align-items-center col-1 text-center borrara' >
            { isAdmin === true
              ? <p> Admin </p>
              : <p> Usuario </p>
            }
          </td>
          <td className='border border-black d-flex flex-column justify-content-center align-items-center col-3 text-center col-sm-1 '>
            <ButtonDeleteUser name={_id} />
            <Link to={`/admin/menu/${_id}`}>
              <ButtonEdit name={_id}/>
            </Link>
            </td>
        </tr>
      </div>
  )
}

export default AdmUserCard

