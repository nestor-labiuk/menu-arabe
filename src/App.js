import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import AdminMenu from './pages/AdminMenu/AdminMenu'
import RegisterMenu from './pages/RegisterMenu/RegisterMenu'
import EditMenu from './pages/EditMenu/EditMenu'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/menu' element={<AdminMenu />} />
        <Route path='/admin/menu/registermenu' element={<RegisterMenu />} />
        <Route path='/admin/menu/:id' element={<EditMenu />} />
        {/* aca hay que agregar las rutas que faltan */}
      </Routes>
    </>
  );
}

export default App;
