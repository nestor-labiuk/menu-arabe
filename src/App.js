import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/login'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        {/* aca hay que agregar las rutas que faltan */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
