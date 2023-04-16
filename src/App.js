import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/register' element={<Register />} />
        {/* aca hay que agregar las rutas que faltan */}
      </Routes>
    </>
  );
}

export default App;
