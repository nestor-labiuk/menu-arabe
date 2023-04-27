import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Menu from './pages/Menu/Menu'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/menu' element={<Menu />} />
        {/* aca hay que agregar las rutas que faltan */}
      </Routes>
    </>
  );
}

export default App;
