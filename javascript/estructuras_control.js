
//estructuras condicionales (if-else, else-if, switch)
function parImpar(numero){
    if(numero % 2 == 0){ //true
        console.log("El numero " + numero + " es par");
    }else{
        console.log("El numero " + numero + " es impar");
    }
}
let numero = 105;
parImpar(numero);

//operador ternario => es un if-else pero elegante (?(if) : else)
function operadorTernario(numero){
    let result = numero % 2 == 0 ? `El numero ${numero} es par` : `El numero ${numero} es impar`
    console.log(result);
}

function tiendaCafe(cantidad_cafe){
    const precio = 25;
    let result = 0;
    //else- if
    if(cantidad_cafe >= 5 && cantidad_cafe <= 10){ //rangos
        result = cantidad_cafe * precio * 0.80; 
        console.log("Tenes el 20% de descuento");
    }else if(cantidad_cafe > 10 && cantidad_cafe <= 20){
        result = cantidad_cafe * precio * 0.60; 
        console.log("Tienes el 40%")
    }else if(cantidad_cafe > 20){
        result = cantidad_cafe * precio * 0.5; 
        console.log("Tiene el 50%")
    }else{
        result = cantidad_cafe * precio;
    }

    console.log("Va pagar " + cantidad_cafe + " cafes " + "y su total es $" + result );
    //otra forma de concatenar
    console.log(`Va pagar ${cantidad_cafe} cafes y su total es $${result}`);
}
//probando la funcion
tiendaCafe(10);

//break, continue (seguir)

//switch (casos)
function estacion(estacion){
    switch(estacion){
        case "Invierno":
            console.log();
            break; //receso

        case "Primavera":
            console.log();
            break;

        case "Verano":
            console.log();
            break;

        case "Otono":
            console.log();
            break;

        default:
            console.log("Ingresa una estacion valida");
    }
}