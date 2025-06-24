import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const TitleForm = styled.h3 `
    color: red !important;
    margin 1rem 0;
    font-size: 2.3rem;
`;

const Form = styled.form`
    margin: 1rem 0;
    padding: 1.5rem;
`


export default function FormHook({listNotes, setListNotes}) {
    const {
        register,//{objeto}
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm()
    /**
     * register: almacenar y guardar la informacion de las entradas de datos
     * handleSubmit: accion o el evento donde se va guardar la informacion
     * watch: testaer las entradas de datos
     * reset: limpiar las entradas de datos
     */

    //funcion para guardar la informacion de la nota en el estado
    const saveNote = (data) => {
        //objeto de la informacion del formulario
        console.log(data)

        //actualizando la lista de notas
        //.push() --- spreed operator (...) (copia de los datos)
        //hacemos una copia de las notas anteriores de la lista y agregamos la nueva
        setListNotes([...listNotes, {
            //generamos un id unico para cada nota
            idNote: uuidv4(),
            titleNote: data.title,
            descriptionNote: data.description
        }])

        //limpiar el formulario
        reset()
    }

    //revisando el campo title
    console.log(watch("title"))

    console.log(listNotes)
    return (
        <div>
            <TitleForm>Registrar Nota</TitleForm>
            <TitleForm>otro tema...</TitleForm>
            <Form action="" onSubmit={handleSubmit(saveNote)}>
                <div>
                    <label htmlFor="">Titulo</label>
                    {/* <input type="text" onChange={(e) => handleTitle(e)}/> */}
                    <input type="text" {...register("title", { required: true, maxLength: 20 })}/>
                    {/** manejando errores de validaciones */}
                    {errors.title && <span>Este campo es obligatorio y debe de contener maximo 20 caracteres</span>}
                </div>

                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" {...register("description", { required:true })}/>
                    {errors.description && <span>Este campo es obligatorio</span>}
                </div>

                <div>
                    <input type="submit" value="Guardar Nota"/>
                </div>
            </Form>
        </div>
    )
}
