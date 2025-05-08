//ejecutando la funcion
sumar()

//declarando
function sumar(){
    let result = 10 + 20;
    return result;
}

//funcion de expresion
const dividir = function(){

}

//funcion renderizan mas rapido
const multiplicar = () => {
    let result = 10 * 20;
    return result;
}

multiplicar();

PI;

const PI = 3.14;

fullname;

let fullname = "kenia paiz";


function tiendaCafe(precio,cantidad_cafe){
   
    if(cantidad_cafe >= 5 && cantidad_cafe <= 10){ //rangos
        console.log("Tenes el 20% de descuento, el total a pagar es:" + precio*0.8);
    }else if(cantidad_cafe > 10 && cantidad_cafe <= 20){
        console.log("Tenes el 40% de descuento, el total a pagar es:" + precio*0.6)
    }else if(cantidad_cafe > 20){
        console.log("Tenes el 50% de descuento, el total a pagar es:" + precio*0.5)
    }else{
        console.log("No hay promocion")
    }
}
 
let cantidad_comprada = 20;
let precio = 25;
tiendaCafe(precio,cantidad_comprada);


let compra = 25
tiendaCafe(compra)
function tiendaCafe(cantidad_cafe){
    //else- if
    if(cantidad_cafe >= 5 && cantidad_cafe <= 10){ //rangos
        console.log("Tenes el 20% de descuento");
        console.log("$"+compra+ " = " +"$"+(compra*0.80))
    }else if(cantidad_cafe > 10 && cantidad_cafe <= 20){
        console.log("Tienes el 40%")
        console.log("$"+compra+ " = " +"$"+(compra*0.60))
    }else if(cantidad_cafe > 20){
        console.log("Tiene el 50%")
        console.log("$"+compra+ " = " +"$"+(compra*0.50))
    }else{
        console.log("No hay promocion")
        console.log("$"+compra)
    }
}


function tiendaCafe(cantidad_cafe){
    //else- if
    let precio=25
    if(cantidad_cafe >= 5 && cantidad_cafe <= 10){ //rangos
        precio= cantidad_cafe*(precio*0.80)
        console.log("Tenes el 20% de descuento");
        console.log("Tu total a pagar es de:" + precio)
    }else if(cantidad_cafe > 10 && cantidad_cafe <= 20){
        precio= cantidad_cafe*(precio*0.60)
        console.log("Tienes el 40%")
        console.log("Tu total a pagar es de:" + precio)
    }else if(cantidad_cafe > 20){
        console.log("Tiene el 50%")
    }else{
        precio= cantidad_cafe*(precio*0.50)
        console.log("No hay promocion")
        console.log("Tu total a pagar es de:" + precio)
    }
}
tiendaCafe(10)


////////////////////////////////
function mayorEdad(edad){
    console.log(edad >=18 ? `Eres mayor de edad` : `sos menor de edad`);
}

let entrada_dato = prompt("Ingresa tu edad")
mayorEdad(entrada_dato)

mayorEdad(10)
mayorEdad(35)

function datos(nombre, carnet, nota1, nota2, nota3, nota4){
    //codigo
    let examen = 8.5;
    
}


