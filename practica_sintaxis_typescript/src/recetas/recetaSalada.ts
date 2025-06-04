import { Receta } from "./receta"

type Dificultad = "facil" | "media" | "dificil"
//type TipoReceta = "dulce" | "salada"

export class RecetaSalada extends Receta{

    constructor(nombre:string, ingredientes:string[], dificultad:Dificultad){
        super(nombre, ingredientes, dificultad, "salada")
    }

    preparar() {
        return `
            Receta ${this.tipo}\n
            Titulo: ${this.nombre}\n
            Ingredientes: ${this.ingredientes}\n
            Dificultad: ${this.dificultad}
        `
    }
}