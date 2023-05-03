import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/login'
import AdminMenu from './pages/AdminMenu/AdminMenu'
import RegisterMenu from './pages/RegisterMenu/RegisterMenu'
import EditMenu from './pages/EditMenu/EditMenu'
import AdminUsers from './pages/AdminUsers/AdminUsers'
import Menu from './pages/Menu/Menu'
import EditUser from './pages/EditUser/EditUser'
import Nav from './components/Navbar/Navbar'
import Foot from './components/Footer/Footer'
import AdminOrders from './pages/AdminOrders/AdminOrders'

function App() {
  return (
    <>
      <Nav/>  
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/menu' element={<AdminMenu />} />
        <Route path='/admin/menu/registermenu' element={<RegisterMenu />} />
        <Route path='/admin/menu/:id' element={<EditMenu />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/users' element={<AdminUsers />} />
        <Route path='/admin/users/:id' element={<EditUser />} />
        <Route path='/admin/orders' element={<AdminOrders />} />
      </Routes>
      <Foot/>
    </>
  )
}

export default App
