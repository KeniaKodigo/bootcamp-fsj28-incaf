import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { dbStore } from '../firebase/appConfig'

export default function ListBooks() {
    //estado para mostrar la lista de libros
    const [books, setBooks] = useState([])

    useEffect(() => {
        //mostrar los libros en tiempo real

        //devolviendo los datos en tiempo real
        onSnapshot(
            collection(dbStore, "books"),
            //funcion que nos devuelva la info de los libros
            (snapshot) => {
                //accendiendo al primer libro (documento) de la coleccion de libros
                console.log(snapshot.docs[0].data())

                //mapeando la lista de los libros
                const array_books = snapshot.docs.map((doc) => {
                    //pasando el arreglo al estado
                    return {...doc.data(), id: doc.id}
                })

                //actualizamos el estado con el arreglo que acabamos de crear
                setBooks(array_books)
            }
        )

    }, [])
    //el arreglo vacio indica que solo se ejecuta una vez
    //cuando el arreglo conlleva datos signifa que el efecto se hace por una depedencia
    console.log(books)
    return (
        <div>
            {/** iterar el estado de los libros (titulo, descripcion, genero) */}
        </div>
    )
}
