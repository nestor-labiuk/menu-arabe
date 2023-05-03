import './adminOrderCard.css'
import ButtonEditOrder from '../Button/ButtonEditOrder'

function AdminOrderCard({ _id, userName, userAddress, menuName, menuPrice, createdAt, status }) {
  const date = new Date(createdAt);
  const optionsDate = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const optionsHora = { hour: '2-digit', minute:'2-digit', hour12: true };
  const dateFormat = `${date.toLocaleDateString('es-AR', optionsDate)} ${date.toLocaleTimeString('es-AR', optionsHora)}`;

  return (
      <div className="mx-3">
        <tr className="d-flex justify-content-center table-responsive">
          <td className='border border-black d-flex justify-content-center align-items-center col-2 text-center borrara' >{userName}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-4 text-center col-sm-2' >{userAddress}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-4 text-center col-sm-2' >{menuName}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-1 text-center borrara' >{menuPrice}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-2 text-center borrara '>{dateFormat}</td>
          <td className='border border-black d-flex justify-content-center align-items-center col-1 text-center borrara m-0' >
            { status === true
              ? <p> Pend </p>
              : <p> Env </p>
            }
          </td>
          <td className='border border-black d-flex flex-column justify-content-center align-items-center col-2 text-center col-sm-1 '>
            { status === true 
              && <ButtonEditOrder name='Env' id={_id} onClick={ButtonEditOrder}  />
            }
          </td>
        </tr>
      </div>
  )
}

export default AdminOrderCard