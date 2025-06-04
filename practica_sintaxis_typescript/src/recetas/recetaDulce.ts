import { Receta } from "./receta";

type Dificultad = "facil" | "media" | "dificil"

export class RecetaDulce extends Receta{

    constructor(nombre:string, ingredientes:string[], dificultad:Dificultad){
        super(nombre, ingredientes, dificultad, "dulce")
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