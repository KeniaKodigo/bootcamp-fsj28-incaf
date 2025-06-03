import { AcademiaKodigo } from "./kodigo"

export class Coach extends AcademiaKodigo{
    bootcamp:string[]

    constructor(nombre:string, edad:number, nacionalidad:string, email:string, bootcamps:string[]){
        //super() => estoy heredando el constructor de mi clase padre
        super(nombre, edad, nacionalidad, email)
        this.bootcamp = bootcamps
    }

    //metodo que nos ayude actualizar a lista de bootcamps
    registroBootcamps(bootcamp:string){
        //validar si el bootcamp ya existe
        //recorrer el arreglo (filter, contains, find, for, while)
        let found_bootcamp = this.bootcamp.find(bootcamp => bootcamp == bootcamp)
        if(found_bootcamp){
            //no voy hacer nada
        }else{
            this.bootcamp.push(bootcamp)
        }
    }

}

