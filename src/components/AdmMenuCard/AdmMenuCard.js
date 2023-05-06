import './adminMenuCard.css'
import ButtonDelete from '../Button/ButtonDelete'
import { Link } from 'react-router-dom'
import ButtonEdit from '../Button/ButtonEdit'

function AdmMenuCard({ _id, name, state, price, detail,category,image }) {
  return (
      <div className="mx-3">
        <tr className="d-flex justify-content-center">
          <td className='border border-black d-flex justify-content-center align-items-center col-4 text-center col-sm-2 ' >{name}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-2 text-center borrara m-0' >
            { state === true
              ? <p> Disponible </p>
              : <p> No Disponible </p>
            }
          </td>
          <td className='border border-black d-flex justify-content-center align-items-center col-1 text-center borrara' >{price}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-2 text-center borrara' >{detail}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-2 text-center borrara' >{category}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-4 text-center col-sm-2 '><img src={image} alt={name} className="w-100 "/></td>
          <td className='border border-black d-flex flex-column justify-content-center align-items-center col-4 text-center col-sm-1 '>
            <ButtonDelete name={_id} tipo='menú' />
            <Link to={`/admin/menu/${_id}`}>
              <ButtonEdit name={_id}/>
            </Link>
            </td>
        </tr>
      </div>
  )
}
export default AdmMenuCard

