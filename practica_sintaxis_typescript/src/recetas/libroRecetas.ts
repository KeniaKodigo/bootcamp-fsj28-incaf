import type { Receta } from "./receta";

type Dificultad = "facil" | "media" | "dificil"

export class LibroRecetas{
    recetas:Receta[] = [] //va recibir objetos de tipo receta, objetos de las hijas
    //recetadulce, recetasalada

    agregarReceta(receta:Receta){
        this.recetas.push(receta)
    }

    filtrarRecetasByDificultad(dificultad:Dificultad){
        return this.recetas.filter(receta => receta.dificultad == dificultad)
    }
}