import axios from "axios";

//metodo que obtenga todos los personajes de la API
const getAll = async () => {
    try{
        //tipo peticiones HTTP: GET, POST, PUT, PATCH, DELETE
        const response = await axios.get("https://dragonball-api.com/api/characters")
        return response;
    }catch(error){
        console.error("Error al obtener los datos.", error)
    }
    
}


export { getAll }

/**
 * fetch => metodo nativo
 * axios => libreria
 */