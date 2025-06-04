type Dificultad = "facil" | "media" | "dificil"
type TipoReceta = "dulce" | "salada"

export class Receta {
    nombre:string;
    ingredientes:string[];
    dificultad:Dificultad;
    tipo:TipoReceta;

    constructor(nombre:string, ingredientes:string[], dificultad:Dificultad, tipo:TipoReceta){
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.dificultad = dificultad;
        this.tipo = tipo
    }

    preparar() {
        return `
            Receta: ${this.nombre}\n
            Ingredientes: ${this.ingredientes}
        `
    }
}