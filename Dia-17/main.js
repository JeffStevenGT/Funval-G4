//let boton = document.querySelector("#btn");

//boton.addEventListener("click", (event) => {
/* sera ejecutado solamente cuando el evento ocurra */
/*  if (event.target.classList.contains("bg-green-800")) {
    event.target.classList.remove("bg-green-800");
    event.target.classList.add("bg-red-800");
  } else {
    event.target.classList.add("bg-green-800");
    event.target.classList.remove("bg-red-800");
  }
}); */

/* 
        ustedes tienen un boton q va alternar entre dia y noche 
        y abajo tendran una imagen de fiona si el boton esta en dia fiona es princesa
        pero si el boton esta en noche fiona es un ogro
*/
/* let todo = document.querySelector("#todo");
let botonD = document.querySelector("#btn-dia");
let ogra = document.querySelector("#ogro");
let princesa = document.querySelector("#princesa");
let dia = true;
botonD.addEventListener("click", function (e) {
  todo.classList.toggle("dark");
  dia = !dia;
  if (dia) {
    botonD.textContent = "Dia";
    botonD.classList.add("bg-yellow-500");
    botonD.classList.remove("bg-black");
    ogra.classList.add("hidden");
    princesa.classList.remove("hidden");
  } else {
    botonD.textContent = "Noche";
    botonD.classList.remove("bg-yellow-500");
    botonD.classList.add("bg-black");
    ogra.classList.remove("hidden");
    princesa.classList.add("hidden");
  }
});
 */
/* -----------------SUBMIT--------------------- */
/* let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {};
  let nombre = document.querySelector("#Nombre");
  console.log("formulario enviado por : " + nombre.value);
  obj.name = nombre.value;
  obj.apellido = "Aguilar";
  console.log(obj);
}); */
/* ----------------input--------------- */
/* let inputText = document.querySelector("#campo");
let parrafito = document.getElementById("resultadoInput");
inputText.addEventListener("input", function (e) {
  console.log(e.target.value);
  parrafito.textContent = e.target.value;
}); */

/* 
  crear un formulario donde pidan el 
  nombre 
  el apellido paterno 
  la edad y la nacionalidad y 
  agregarlo a un objeto y mostrar el objeto en consola
*/

/* ----------Change------------ */
let contador = 0;
let anterior = "";
let opcionColor = document.querySelector("#selectorColor");

opcionColor.addEventListener("change", function (e) {
  let parrafo = document.querySelector("#colorTexto");
  if (contador === 0) {
    parrafo.classList.add(`text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
    contador++;
  } else {
    parrafo.classList.replace(anterior, `text-${e.target.value}-700`);
    anterior = `text-${e.target.value}-700`;
    contador++;
  }
});
