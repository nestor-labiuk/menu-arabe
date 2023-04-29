import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Nav from './components/Navbar/Navbar'
import Foot from './components/Footer/Footer'

function App() {
 
  return (
    <>
        <Nav/>  
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
        {/* aca hay que agregar las rutas que faltan */}
      </Routes>
       <Foot/>
    </>
  );
}

export default App;
