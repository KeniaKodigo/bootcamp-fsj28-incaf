
//crear plantilla -> crear personajes de la liga de la justicia
class Personaje {
    //atributo
    poderes:string[]
    nombre:string
    protected enblema:string
    private nacionalidad:string
    genero:string
    debilidad:string[]
    volar:boolean

    //metodo que ya trae la clase
    //objeto predeterminado
    // constructor(){
    //     this.nombre = "Superman"
    //     this.genero = "Masculino"
    //     this.volar = true
    // }

    //this => es la forma de acceder a los atributos y a los metodos de la clase

    //constructor parametrizado
    constructor(personaje:string, genero:string, nacionalidad:string, volar:boolean){
        this.nombre = personaje
        this.genero = genero
        this.nacionalidad = nacionalidad
        this.volar = volar
        this.debilidad = []
        this.poderes = []
        this.enblema = ""
    }

    //metodos
    atacar(){
        let data = ""
        data
        return "Los personajes atacan"
        this.poderes
    }

    obtenerPoderes(){
        //traer y mostrar los poderes del personaje

        //
        this.obtenerDebilidades()

    }

    obtenerDebilidades(){
        //code..
        this.nombre

    }

}

//crear objetos
//instanciar clases => creen objetos de la clase

let personaje4 = new Personaje("flash","masculino","ciudad central",false) //tiene la informacion del constructor
personaje4.atacar()

//objeto
let batman = new Personaje("batman","masculino","ciudad gotica", false) //instancia
batman.atacar()
batman.nombre = "otroooo"
//batman.nacionalidad 
//batman.enblema 

//automatica el constructor se ejecuta
let personaje2 = new Personaje("Mujer Maravilla","femenino","",true)
personaje2.obtenerPoderes()

// let personaje3 = new Personaje()
// personaje3.nombre = "Mujer Halcon"


//Personaje -> Villanos (hija)