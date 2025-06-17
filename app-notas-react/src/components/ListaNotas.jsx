import React from 'react'

//componente para mostrar las notas del arreglo
export default function ListaNotas({listNotes, setListNotes}) {
    
    return (
        <div>
            <h2>Lista de Notas</h2>

            {
                //validar si hay notas o no...
                listNotes.length > 0 ?
                    //iterar el arreglo (map, for, while, foreach)
                    listNotes.map((note) => {
                        //desestructuracion de objetos
                        const {titleNote, descriptionNote, idNote} = note
                        return (
                            <>
                                <div>
                                    <button>X</button>
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
