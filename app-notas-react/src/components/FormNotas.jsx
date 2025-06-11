import React from 'react'

export default function FormNotas() {
    return (
        <div>
            <h3>Registrar Nota</h3>
            <form action="">
                <div>
                    <label htmlFor="">Titulo</label>
                    <input type="text" />
                </div>

                <div>
                    <label htmlFor="">Descripcion</label>
                    <input type="text" />
                </div>

                <div>
                    <input type="submit" value="Guardar Nota"/>
                </div>
            </form>
        </div>
    )
}
