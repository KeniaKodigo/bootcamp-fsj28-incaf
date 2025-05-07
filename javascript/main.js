"use strict";
console.log("Hello, World!");
console.error("This is an error message.");

//importar
//declarar de variables
/* alcance de variables y constante 
    let => bloque
    var => global (funcion)
*/
let fullname = "Kenia Paiz";
fullname = "5" + "5"; //55.6
Number("5" + "5"); //10
//"45.6"
Number(fullname);
// "100" (string)
// 100 (int)
// 100.50 (float)
parseInt(fullname);
console.log(typeof fullname);
fullname = "Marvin"; //llamando
let lastname
var age = 26 //defasado
var age = 30;
const country = "El Salvador"; //PHP (mayuscula) COUNTRY
const PI = 3.14;
// contar_frutas
// function contarFrutas(){}
let mayor_edad = true;
let dato = null;

console.log(fullname); //kenia paiz


//objetos y arreglos
//objeto => es algo que podemos describir (personal, animal, cosa) (atributo, valor)
let gato = {
    name: "Pancho",
    age: 3,
    color: "amarillo",
    listComidas: ["pollo","carne","guisca"] //arreglo
}

console.log("A mi gato le gusta la " + gato.listComidas[1]);

//arreglo => es una coleccion de datos (posicion 0)(tipo de dato)
let array_frutas = ["manzana", "pera", "sandia", "mora"];
//arreglo indexado
console.log(array_frutas[2]);

//arreglo de objetos

//funcion declarativa
//declarando
function sendMessage(){
    console.log(fullname);
    let message = "Buenas Tardes";
    console.log(message);
}

function sumar(){
    let result = 10 + 20;
    return result;
}

//ejecutando
sendMessage();
sendMessage();

//funcion de flecha
const multiplicar = () => {
    let result = 10 * 20;
    return result;
}

multiplicar();

//console.log(message);

sendMessage();

//con parametros y argumentos
//parametro => definicion de lo que vas a recibir
//argumento => lo que se va devolver (valores)
function restar(a, b){
    let result = a - b;
    return result;
}
restar(12, 6); //argumentos
restar(500, 345);

class Persona{

}

