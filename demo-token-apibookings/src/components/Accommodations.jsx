import React, { useEffect, useState } from 'react'
import { getAccomodations } from '../services/accomodationServices';

export default function Accommodations() {
    const [accomodations, setAccomodations] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //obtenemos los datos de los alojamientos
    const fetchData = async () => {
        const response = await getAccomodations();
        //mandamos los alojamientos al estado
        setAccomodations(response)
    }

    useEffect(() => {
        //verificamos el token
        const token = sessionStorage.getItem('apiToken')
        if(token){
            setIsAuthenticated(true)
            //si el token existe, devolvemos los alojamientos
            fetchData()
        }
    }, [])

    return (
        <div>
            {
                //verificamos si la persona esta autenticada
                isAuthenticated ? (
                    <>
                        <h1>Lista de alojamientos</h1>
                        <p>Puede ver todos los alojamientos</p>
                    </>
                ) : <h1>No estas autorizado para ver alojamientos 🔏</h1>
            }
            
        </div>
    )
}
