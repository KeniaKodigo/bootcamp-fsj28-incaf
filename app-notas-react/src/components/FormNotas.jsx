import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

//jsx => javascript + xml
export default function FormNotas({listNotes, setListNotes}) {
    //creando estado para las entradas de datos
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleTitle = (e) => {
        console.log(e.target.value)
        //codigo
    }

    //funcion para guardar la informacion de la nota en el estado
    const saveNote = (e) => {
        //cancelar brevemente el submit
        e.preventDefault()

        //actualizando la lista de notas
        //.push() --- spreed operator (...) (copia de los datos)
        //hacemos una copia de las notas anteriores de la lista y agregamos la nueva
        setListNotes([...listNotes, {
            //generamos un id unico para cada nota
            idNote: uuidv4(),
            titleNote: title,
            descriptionNote: description
        }])
    }

    console.log(listNotes)
    return (
        <div>
            <h3>Registrar Nota</h3>
            <form action="" onSubmit={saveNote}>
                <div>
                    <label htmlFor="">Titulo</label>
                    {/* <input type="text" onChange={(e) => handleTitle(e)}/> */}
                    <input type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)}/>
                </div>

                <div>
                    <input type="submit" value="Guardar Nota"/>
                </div>
            </form>
        </div>
    )
}
