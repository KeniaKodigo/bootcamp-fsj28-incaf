//ARBOL DE NODOS
//document => devuelve todo el documento HTML
console.log(document)
console.log("Hola");

//API DE NAVEGACION
/**
 * etiqueta (nombre)
 * clase (.nombre de la clase)
 * id (#nombre del id)
 * atributo ([nombre del atributo])
 */
let titulo = document.querySelector('h1');
console.log(titulo)

let titutloId = document.querySelector('#title');
//textContent => devuelve el texto de la etiqueta
console.log(titutloId.textContent);
//.value => formularios

let titulo2 = document.getElementById('title');

let api_title = document.querySelector('.api-title');
console.log(api_title);

let list_titles = document.querySelectorAll('h1');
console.log(list_titles); //[]



//document.querySelector('a[href="#"]')

//API DE MANIPULACION

//creando un <li></li>
let nuevo_li = document.createElement('li');

nuevo_li.textContent = "createElement";

//accediendo a la etiqueta <ul></ul>
let lista = document.querySelector('#list-dom');
console.log(lista)

//agregando el nuevo li a la lista
lista.appendChild(nuevo_li)

//removeChild, firstChild

//uso de eventos
function clickAlert(){
    Swal.fire({
        title: "Le diste Click :)",
        icon: "success",
        draggable: true
    });
}

function clickSubmit(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
}


function selectLenguaje(){
    //acceder a la etiqueta select, devolviendo el valor que selecciono la persona
    let lenguaje = document.querySelector('select').value;
    Swal.fire({
        title: `Tu lenguaje Favorito es ${lenguaje}`,
        icon: "success",
        draggable: true
    });
}


document.addEventListener('click', function(){
    //accion
})