import React, { useEffect, useState } from 'react'
import { getAll } from '../services/characterServices'

export default function Characters({favorites, setFavorites}) {
    //estado para listar los personajes []
    const [characters, setCharacters] = useState([])
    /**
     * [0] => representa el estado en si
     * [1] => que te ayuda actualizar el estado
     */

    //metodo para agregar a favoritos
    const toggleFavorite = (data_character) => {
        //console.log(data_character); //{}

        //necesitamos verificar si el personaje existe, si existe lo quitamos de favoritos
        //find
        const findCharacter = favorites.find((character) => data_character.id == character.id)
        if(findCharacter){
            //se quita
            setFavorites(favorites.filter((favorite) => favorite.id != data_character.id))
        }else{
            //actualizando el estado de favoritos con el personaje que el usuario agrego
            setFavorites([...favorites, data_character])
        }
        //push()
        //... (spread operator)
        //alert("Agregado!")
    }

    console.log(favorites)

    useEffect(() => {
        const getCharacters = async () => {
            const response = await getAll()
            console.log(response.data.items);
            //actualizando el estado de los personajes
            setCharacters(response.data.items)
        }
        getCharacters()

    }, []) //dependencia

    return (
        <div>
            <h3>Lista de personajes</h3>
            <div>
                {
                    characters.map((character) => {
                        return (
                            <div key={character.id}>
                                <h4>{character.name}</h4>
                                <img src={character.image} alt={character.name} style={{width: "30%"}} />
                                <p><b>KI:</b> {character.ki}</p>
                                <button onClick={() => toggleFavorite(character)}>Agregar a Favorito</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
