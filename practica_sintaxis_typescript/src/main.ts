import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { name, isStudent } from './sintaxis.ts'
import { greeting2 } from './functions.ts'
import { Estudiante } from './kodigo/estudiante.ts'
import { RecetaSalada } from './recetas/recetaSalada.ts'
import { RecetaDulce } from './recetas/recetaDulce.ts'
import { LibroRecetas } from './recetas/libroRecetas.ts'

console.log(greeting2("Juanito"))
console.log(greeting2())

console.log(`Tipo de dato de la variable es: ${typeof(name)}`)
console.log(`Tipo de dato de la variable es: ${typeof(isStudent)}`)

/***** informacion de la clase */
let estudiante = new Estudiante("Erick Ramos",24,"El Salvador","erick.ramos@example.test","becado","Fullstack Jr")
console.log(estudiante) //{}
estudiante.setEstado("Pauso Bootcamp")
console.log(estudiante.getEstado())
console.log(`El estudiante su financiamiento es: ${estudiante.getTipoFinanciamiento()}`)

console.log(estudiante.mostrarDetalles())
console.log("*************** SECCION DE RECETAS ****************");

let receta1 = new RecetaSalada("Pollo en crema",["pollo","crema","vegetales","champiñones"],"media")

let receta2 = new RecetaDulce("Tres leches",["leche","leche condensada","leche evaporada","huevos"],"facil")
//agregando las recetas al Libro
let libroRecetas = new LibroRecetas()
libroRecetas.agregarReceta(receta1)
libroRecetas.agregarReceta(receta2)
console.log(libroRecetas.recetas)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
