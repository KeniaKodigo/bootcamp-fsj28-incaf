import { AcademiaKodigo } from "./kodigo"

type tipoEstudiante = "becado" | "no becado"

type bootcampKodigo = "Fullstack Jr" | "Java Developer" | "Data Analyst Jr"

//extends => herencia
export class Estudiante extends AcademiaKodigo{
    //atributos
    //el modificador de acceso en cada atributo (private, protected, public)
    /**
     * 3 alcances (dentro de la clase, fuera de la clase, clases hijas)
     * public (3)
     * protected (2) -> dentro de la clase y clases hijas
     * private (1) -> dentro de la clase
     */
    private tipo_financiamiento:tipoEstudiante //get
    private estado:string
    protected carnet:string
    protected bootcamp:bootcampKodigo

    //heredar constructor del padre
    constructor(nombre:string, edad:number, nacionalidad:string, email:string, tipo:tipoEstudiante, bootcamp:bootcampKodigo){
        //super() => estoy heredando el constructor de mi clase padre
        super(nombre, edad, nacionalidad, email)
        //atributos exclusivos de la clase
        this.tipo_financiamiento = tipo
        this.carnet = "Kodigo2025"
        this.estado = "Activo"
        this.bootcamp = bootcamp
    }

    //getter (obtener info / devuelve), setter (actualizar/registrar un valor al atributo)

    //te devuelve
    // get getEstado(){
    //     return this.estado
    // }

    getEstado(){
        return this.estado
    }

    // set setEstado(nuevo_estado:string){
    //     this.estado = nuevo_estado
    // }

    setEstado(nuevo_estado:string){
        this.estado = nuevo_estado
    }

    getTipoFinanciamiento(){
        return this.tipo_financiamiento
    }

    //sobreescibimos un metodo (polimorfismo)
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