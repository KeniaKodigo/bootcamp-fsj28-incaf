
//declaracion de variables

//tipado estatico
export let name = "Kenia Paiz"; //string
export let isStudent = false;

//asignando tipo de dato
let lastname:string = "Paiz";
let num:number = 23.5;
let isCoach:boolean = true;
let data:null = null;
let data2:undefined;

const PI:number = 3.1416;

//arreglo y objetos
//uso de arreglos
export let list_persons:string[] = ["marvin","valeria","katherine","angel","erick"]

export let list:any = [true, 23.4, "hola"]

//colocando el tipo de dato para cada elemento de tu arreglo
export let list2:Array<string> = ["dato1", "dato2"]

//limitando la longitud (Tupla) => son arreglos que ya se define la longitud del mismo
export let list3:[number, number, string] = [2.5,100,"dato"]

//uso de los objetos
export let person:object = {
    name: "Juanito Perez",
    phone: 76895634,
    isEmployee: false
}

//mencionar que elementos son opcionales
//campo address es opcional, lo colocamos con el signo de ?
export let student:{name:string, carnet:string, age:number, address?:string} = {
    name: "Juanito Perez",
    carnet: "JP2025",
    age: 21
}

//types => son elementos personalizado (definen una estructura o valores)
//usuarios => tienen que cumplir con una estructura de datos 

//definiendo valores estaticos
type Rol = "admin" | "employee"; 

//definiendo una estructura especifica para tus objetos
type User = {
    name:string,
    email:string,
    isActive:boolean,
    password?:string,
    rol:Rol
}

//crear los usuarios
export let rodrigo:User = {
    name: "Rodrigo",
    email: "rodrigo.test@example.test",
    isActive:true,
    rol: "admin"
}

export let jennifer:User = {
    name: "Jennifer",
    email: "jennifer.test@example.test",
    isActive:true,
    password: "12345",
    rol: "employee"
}

// export let fruits:enum = [
//     fruta1 = "manzana",
//     fruta2 = "uvas"
// ]

// fruits.fruta1 //manzana

