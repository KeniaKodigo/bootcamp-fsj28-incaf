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
  let saludar = "Hola Mundo!"
  //declarando un estado para la lista de notas
  const [listNotes, setListNotes] = useState([]) //inicializando el estado como arreglo vacio
  //listNotes => ver el estado, guardar estado
  //setListNotes => cambiar o actualizar el estado

  return (
    <>
      {/** fragmento, pasando una prop */}
      <Encabezado nombre="Angel" apellido="Moreno" saludar={saludar}/>
      {/* <Encabezado nombre="Valeria" apellido="Flores"/> */}
      {/* 
        se puede reutilizar los componentes
        <Encabezado />
        <Encabezado /> */}

      {/** pasando el estado de la lista de notas como props  */}
      <FormNotas listNotes={listNotes} setListNotes={setListNotes}/>
      <ListaNotas listNotes={listNotes} setListNotes={setListNotes}/>
    </>

  )
}

export default App
