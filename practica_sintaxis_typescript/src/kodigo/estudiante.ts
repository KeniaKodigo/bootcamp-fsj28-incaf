type tipoEstudiante = "becado" | "no becado"

type bootcampKodigo = "Fullstack Jr" | "Java Developer" | "Data Analyst Jr"

export class Estudiante{
    //atributos
    //el modificador de acceso en cada atributo (private, protected, public)
    nombre:string
    edad:number
    nacionalidad:string
    tipo_financiamiento:tipoEstudiante
    estado:string
    carnet:string
    bootcamp:bootcampKodigo

    constructor(nombre:string, edad:number, nacionalidad:string, tipo:tipoEstudiante, bootcamp:bootcampKodigo){
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
        this.tipo_financiamiento = tipo
        this.estado = "Activo"
        this.carnet = "Kodigo2025"
        this.bootcamp = bootcamp
    }

    mostrarDetalles(){
        return `Estudiante: ${this.nombre}, 
            Nacionalidad ${this.nacionalidad}
            Bootcamp: ${this.bootcamp}
            Carnet: ${this.carnet}
            Financiamiento: ${this.tipo_financiamiento}`
    }

    crearCarnet(){
        //code...
    }

    entregarTareas(){
        //code...
    }
}