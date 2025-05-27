import { setupCounter } from "./counter";

//setupCounter();

const pokemon = {
    name: "Pikachu",
    type: "Electric",
    level: 25,
    abilities: {item: "Thunderbolt", item2: "Quick Attack"},
}

pokemon.name; //Pikachu
pokemon.type

const { name, type, abilities } = pokemon;
const { item } = abilities

item //Thunderbolt
pokemon.abilities.item //Thunderbolt

name;

const numeros = [1, 2, 3, 4, 5];
numeros[0]
numeros[1]
//desestructuracion de arreglos
const [item1, item2] = numeros;
item1 //1
item2 //2



export let saludo = "Hola Mundo desde VITE";
export const PI = 3.14;

export function suma(a, b){
    return a + b;
}

//solo se utiliza una vez (por defecto) -> componentes clases / funcionales
export default function resta(a, b){
    return a - b;
}

//switch , if-else if-else
export function calcularOperacion(){
    //obteniendo el valor y lo convertimos en un dato numerico (parseInt, parseFloat)
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    
    let operacion = document.getElementById('operacion').value;
    let resultado = 0;
    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            //operador ternario
            resultado = num2 === 0 ? "No se puede dividir entre 0" : num1 / num2
            break;
        default:
            resultado = "Selecciona una operación valida";
    }

    console.log(`El resultado de la operacion es ${resultado}`)
}   




