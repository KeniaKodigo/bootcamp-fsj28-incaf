import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
//export default se le puede cambiar el nombre
import operacionresta, { saludo, PI, calcularOperacion }  from './operaciones.js'

//desestructuracion de datos
//import (trayendo) / export (enviando)
let result = operacionresta(10, 5);
console.log(result);

console.log(PI)
document.querySelector('#app').innerHTML = `
  <div>
    <h2>${saludo}</h2>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <section>
      <h2>Operaciones Matematicas</h2>

      <input type="text" id="num1" placeholder="Numero 1">
      <input type="text" id="num2" placeholder="Numero 2">

      <label>Selecciona la operacion</label>
      <select id="operacion">
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicacion</option>
        <option value="division">Division</option>
      </select>
    </section>
  </div>
`
//llamo / ejecutado
setupCounter(document.querySelector('#counter'))
//evento de escucha
document.getElementById('operacion').addEventListener('change', calcularOperacion)