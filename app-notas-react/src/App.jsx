import { useState } from 'react'
import './App.css'
import Encabezado from './components/Encabezado'
import FormNotas from './components/FormNotas'
import ListaNotas from './components/ListaNotas'

//componente funcional (index nosotros vamos a modificar)
function App() {
  //hook (gancho que te ayuda hacer algo)
  /**
   * 2 elementos
   * [0] => devolver y guardar el estado
   * [1] => actualizar tu estado (argumento/acciones)
   */
  const [mensaje, setMensaje] = useState("Hola") //inicializas tu estado

  return (
    <>
      {/** fragmento */}
      <Encabezado />
      {/* 
        se puede reutilizar los componentes
        <Encabezado />
        <Encabezado /> */}
      <FormNotas />
      <ListaNotas />
    </>

  )
}

export default App
