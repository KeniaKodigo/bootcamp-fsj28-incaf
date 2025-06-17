import React from 'react'
import Prueba from '../Prueba'

//recibiendo props
export default function Encabezado({nombre, apellido, saludar}) {
    //codigo
    console.log(apellido)
    return (
        <div>
            <h1>App de Notas</h1>
            {/** pasando el nombre de una persona de manera dinamica (se va recibir una prop)*/}
            <h3>Bienvenido a nuestra pagina! {nombre} {apellido}</h3>
            <h5>{saludar}</h5>
        </div>
    )
}

//rfc, rcc
