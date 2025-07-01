import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { dbStore } from '../firebase/appConfig'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

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
                console.log(snapshot.docs) //arreglo de datos
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

    //funcion para eliminar un libro
    const deleteBook = (id_book) => {
        console.log(id_book)
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            //eliminamos el libro
            deleteDoc(doc(dbStore, "books", id_book));
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
        });
        
    }

    return (
        <div>
            {/** iterar el estado de los libros (titulo, descripcion, genero) */}
            <section>
                {
                    books.map((book, index) => {
                        return (
                            <div key={index} style={{color: "#fff", marginBottom: "1rem"}}>
                                <h3>{book.title}</h3>
                                <p>{book.description}</p>
                                <p><strong>Genero: </strong>{book.gender}</p>
                                <Link to={`/book/edit/${book.id}`}>Editar</Link>
                                <button onClick={() => deleteBook(book.id)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
