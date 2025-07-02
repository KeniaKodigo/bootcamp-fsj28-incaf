import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Accommodations from './components/Accommodations'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/accommodations' element={<Accommodations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
