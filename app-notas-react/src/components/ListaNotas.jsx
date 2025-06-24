import React from 'react'
import styled from 'styled-components'
//estilos para cada componente

const TitleNotes = styled.h2`
    color: red !important;
    margin 1rem 0;
    font-size: 2.3rem;
`

//componente para mostrar las notas del arreglo
export default function ListaNotas({listNotes, setListNotes}) {

    const deleteNote = (id) => {
        console.log(id)
        //filtrar las notas (nuevo arreglo)
        setListNotes(listNotes.filter((note) => note.idNote != id)) //nota a eliminar
    }
    
    return (
        <div>
            <h2>Lista de Notas</h2>

            {
                //validar si hay notas o no...
                listNotes.length > 0 ?
                    //iterar el arreglo (map, for, while, foreach)
                    listNotes.map((note, index) => {
                        //desestructuracion de objetos
                        const {titleNote, descriptionNote, idNote} = note
                        console.log(idNote)
                        return (
                            <>
                                <div key={index}>
                                    <button onClick={() => deleteNote(idNote)}>X</button>
                                    <h3>{titleNote}</h3>
                                    <p>{descriptionNote}</p>
                                </div>
                            </>
                        )
                    })
                
                : <h4>No hay notas registradas...</h4>
            }
        </div>
    )
}
