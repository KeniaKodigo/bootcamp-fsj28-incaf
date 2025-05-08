//estructuras repetitivas

function contar(){
    //contador, condicion(hasta donde va llegar el bucle), incrementar/decrementar
    for(let i = 1; i <= 10; i++){
        //codigo
        console.log(`Contando ${i}`)
    }
}

contar();

function tablaMultiplicar(tabla){
    //10 veces
    for(let i = 1; i <= 10; i++){
        let results = tabla * i
        console.log(`${tabla} * ${i} = ${results}`);

    }
}

tablaMultiplicar(6);
tablaMultiplicar(10);

//[1.60, 1.5,] => desordenada
//

