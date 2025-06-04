import type { Receta } from "./receta";

type Dificultad = "facil" | "media" | "dificil"

export class LibroRecetas{
    recetas:Receta[] = []

    agregarReceta(receta:Receta){
        this.recetas.push(receta)
    }

    filtrarRecetasByDificultad(dificultad:Dificultad){
        return this.recetas.filter(receta => receta.dificultad == dificultad)
    }
}