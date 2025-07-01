import { doc, getDoc, updateDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { dbStore } from '../firebase/appConfig'
import Swal from 'sweetalert2'

const ContainerForm = styled.section`
    margin: 1rem 3rem;
    color: #fff;
    padding: 1rem 0;
`

const Title = styled.h1`
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 1.5rem 0;
`

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
`;

const FormField  = styled.input`
    width: 50%;
    padding: .8rem;
    margin: .5rem 0;
    border-radius: 10px;
    border: 1px solid #214a3c;
    background-color: #17352b;
    color: #669b88;
`

const Button = styled.input`
    width: 10%;
    color: #fff;
    background-color: #019863;
    padding: .5rem;
    border: none;
`

export default function EditBook() {
    const {
        register, //captura
        handleSubmit,
        setValue //devuelve el valor a la entrada de dato
    } = useForm()

    //como capturo el argumento de la ruta R/ utilizando useParams
    const { id_book } = useParams()

    const navigate = useNavigate()
    
    //se monta en un efecto secundario para que devuelva el libro que selecciono la persona
    useEffect(() => {
        //obteniendo la informacion del libro
        const getBookById = async () => {
            const book = await getDoc(doc(dbStore, "books", id_book))
            console.log(book.data())

            //devolviendo la informacion del libro al formulario
            if(book.exists()){
                const data_book = book.data() //el objeto con la informacion del libro
                setValue("title", data_book.title)
                setValue("author", data_book.author)
                setValue("description", data_book.description)
            }
        }
        getBookById()
    }, [])
    
    //metodo para actualizar el libro
    const updateBook = async (data) => {
        try{
            await updateDoc(doc(dbStore, "books", id_book), data)
            Swal.fire({
                title: "Se ha actualizado correctamente!",
                icon: "success",
                draggable: true
            });

            navigate("/books")
        }catch(error){
            console.error("Error al actualizar datos", error)
        }
    }

    return (
        <>
            <Title>Editar Libro</Title>
            <ContainerForm>
                <form onSubmit={handleSubmit(updateBook)}>
                    <FormGroup>
                        <label>Titulo</label>
                        <FormField type="text" className='form-control'  {...register("title")} />
                    </FormGroup>

                    <FormGroup>
                        <label>Autor</label>
                        <FormField type="text" className='form-control'  {...register("author")} />
                    </FormGroup>

                    <FormGroup>
                        <label>Descripcion</label>
                        <FormField type="text" className='form-control' {...register("description")} />
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit" className='btn btn-primary' value='Actualizar Libro' />
                    </FormGroup>
                </form>
            </ContainerForm>
        </>
    )
}
