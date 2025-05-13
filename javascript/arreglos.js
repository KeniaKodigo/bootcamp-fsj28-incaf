//listas / arreglo
//metodos (los que ya existen)
function sumArray(array){
    //[2,34,56,8.9] => [0]
    //array[2] = 56
    //array[0] = 2
    //sumar todos los elementos del arreglo utilizando el for
    //index not found
    let total = 0;
    for(let i=0; i < array.length; i++){
        //console.log(array[i])
        total += array[i] //total = array[i] + total
    }
    console.log(`La suma del arreglo es de ${total}`)
}

sumArray([23,45,67,89,90]);


/***** Metodos de arreglos */
let estudiantes = ["Valeria","Diego","Iliana","Angel","Edwin","Luis"];

estudiantes.forEach((estudiante) => console.log(`Nombre del Estudiante: ${estudiante}`))
console.log("************************* uso del map")
//map
/**
 * el primer parametro => representa los elementos del arreglo
 * segundo parametros => representa cada posicion del arreglo
 * 
 * recorres el arreglo
 * devuelvo un nuevo arreglo (si queres lo modifico -> elementos)
 */
estudiantes.map((estudiante, index) => console.log(`Nombre del Estudiante: ${estudiante} + ${index}`))
//copia
let new_array = estudiantes.map((estudiante) => {return `${estudiante} - KODIGO`})
console.log(estudiantes)
console.log(new_array)


/****** filtros (arreglo de objetos) */
let personas = [
    { nombre: 'Isaac', edad: 16 },
    { nombre: 'Cristian', edad: 18 },
    { nombre: 'Edgar', edad: 15 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];

//for / while
personas.map((item) => {
    if(item.edad >= 20){
        console.log(`Persona: ${item.nombre} - Edad: ${item.edad}`)
    }
})

//filter => filtrar datos de un arreglo en base a una condicion
// devolver un nuevo arreglo (te devuelve un arreglo)
console.log("******************** uso del filter")
console.log(personas.filter((item) => item.edad >= 20))

let new_personas = personas.filter((item) => item.edad >= 20);
console.log(new_personas)

//find => encontrar elementos (un objeto, un elemento)
console.log(personas.find((item) => item.edad >= 20)) 

//some, every (booleano)
console.log("*************** uso del some") //(OR)
//some busca por lo menos que un elemento cumpla con la condicion (true / false)
console.log(personas.some((item) => item.edad >= 20)) 

//every busca que todos los elementos cumplan con la condicion (true / false)
console.log("*************** uso del every") //(&&)
console.log(personas.every((item) => item.edad >= 20)) 



