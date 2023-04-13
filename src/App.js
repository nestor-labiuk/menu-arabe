import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register/Register'

function App() {
  return (
    <div className="App">
      <h1>Menú Árabe</h1>
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
