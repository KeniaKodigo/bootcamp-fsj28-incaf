import { BrowserRouter } from 'react-router-dom'
import './App.css'
import FormRegister from './components/FormRegister'
import Menu from './components/Menu'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
    {/** El componente menu, engloba todas las rutas de la aplicacion */}
        <Menu />
    </>
  )
}

export default App
