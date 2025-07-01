import React from 'react'
import styled from 'styled-components'
import { dbStore } from '../firebase/appConfig'
import { useForm } from 'react-hook-form'
import { addDoc, collection } from 'firebase/firestore'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

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
console.log(dbStore)

export default function FormRegister() {
    const {
        register,
        handleSubmit,
    } = useForm()

    //creando una constante (funcion) para navegar entre rutas
    const navigate = useNavigate()

    //metodo para guardar los datos del libro
    const saveBook = async (data) => {
        console.log(data) //objeto del libro que la persona mande
        //manejando errores
        try{
            //primero solicita la informacion de la bd (dbStore)
            //segundo el nombre de la coleccion
            //tercero los datos que vas a enviar
            await addDoc(collection(dbStore, "books"), data)
            Swal.fire({
                title: "Se ha registrado correctamente!",
                icon: "success",
                draggable: true
            });

            //redireccionando a la lista de libros
            navigate('/books')
        }catch(error){
            console.error("Error al guardar el libro", error)
        }
    }

    return (
        <>
            <Title>Registro de Libros</Title>
            <ContainerForm>
                <form onSubmit={handleSubmit(saveBook)}>
                    <FormGroup>
                        <label>Titulo</label>
                        <FormField type="text" className='form-control' placeholder='Ingresa el titulo del libro' {...register("title")} />
                    </FormGroup>

                    <FormGroup>
                        <label>Autor</label>
                        <FormField type="text" className='form-control' placeholder='Ingresa el autor del libro' {...register("author")} />
                    </FormGroup>

                    <FormGroup>
                        <label>Genero</label>
                        <FormField as="select" {...register("gender")}>
                            <option value="">Seleccionar un genero...</option>
                            <option value="Romance">Romance</option>
                            <option value="Terror">Terror</option>
                            <option value="Accion">Accion</option>
                            <option value="Ciencia Ficcion">Ciencia Ficcion</option>
                        </FormField>
                    </FormGroup>

                    <FormGroup>
                        <label>Fecha de Publicacion</label>
                        <FormField type="date" className='form-control' {...register("date_publication")} />
                    </FormGroup>

                    <FormGroup>
                        <label>Descripcion</label>
                        <FormField type="text" className='form-control' {...register("description")} />
                    </FormGroup>

                    <FormGroup>
                        <Button type="submit" className='btn btn-primary' value='Guardar Libro' />
                    </FormGroup>
                </form>
            </ContainerForm>
        </>
    )
}
