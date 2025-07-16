/* DECLARAR FUNCIONES */

/* function saludar() {
  console.log("hola mundo  :D");
} */
/* NECESITAMOS LLAMARLAS */

/* saludar();
saludar();
saludar();
saludar();
saludar();
saludar(); */
/* funcion q si reciba parametros */
/* function saludo2(nombre) {
  console.log("hola " + nombre + " cm estas?");
} */
/* como se llaman las funciones q reciben parametros */

/* saludo2("Kevin");
saludo2("Gabriel");
saludo2("Yamila"); */

/* funciones q no reciben ningun valor pero retornan un valor */
/* function despedida() {
  let chau = "hasta luego amigo mio";
  return chau;
} */

/* si yo llamo a esta funcion puedo guardarla en una variable o mostrar en consola */

/* let despedidas1 = despedida(); */

/* funcion q si recibe un parametro y retorna un valor */
/* function duplicar(numero) {
  numero = numero * 2;
  return numero;
}
let nuevaVariable = duplicar(3);
nuevaVariable = nuevaVariable / 2;
console.log(nuevaVariable);

console.log(duplicar(7)); */
/* ----------------- */
/* function sumando(x, y) {
  let resultado = x + y;
  console.log(resultado);
}

let respuesta = sumando(3, 6); */
/* ------------------------------------------------------- */

/* tenemos q validar si la palabra o numero q ingrese el cliente es o no una palabra palindrome
    123321  ===    123321
    reconocer
    yohagoyogahoy === yohagoyogahoy
    kevin rodriguez
    kevinrodriguez
*/
/* 
    1er paso seria pedirle al usuario q ingrese la palabra o numero +++
    crear una funcion q reciba una palabra y la devuelva sin espacios +++
    crear una funcion q reciba una palabra y me la retorne toda en minisculas
    crear una funcion q reciba una palabra y la invierta y compare si son iguales y retorne true o false
    crear una funcion q le muestre al cliente si su palabra es o no palindrome
*/

/* let datoUsuario = prompt("ingresa tu palabra");

let respuesta = sinEspacios(datoUsuario);
respuesta = minusculas(respuesta);
respuesta = invertir(respuesta);
console.log(retornaResultado(respuesta));

function sinEspacios(palabra) {
  let resultado = "";
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] !== " ") {
      resultado = resultado + palabra[i];
    }
  }
  return resultado;
}

function minusculas(palabra) {
  palabra = palabra.toLowerCase();
  return palabra;
}

function invertir(palabra) {
  let resultado = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    resultado = resultado + palabra[i];
  }
  if (resultado === palabra) {
    return true;
  } else {
    return false;
  }
}

function retornaResultado(booleano) {
  let respuesta;
  if (booleano) {
    respuesta = "tu palabra es palindrome";
  } else {
    respuesta = "tu palabra no es palindrome";
  }
  return respuesta;
} */
/* 
  GENERAR LA SERIE DE LOS NUMEROS PRIMOS ESTA SERIE SE CARACTERIZA X Q UN NUMERO PRIMO ES AQUEL
  Q SOLO ES DIVISIBLE ENTRE 1 Y EL MISMO DE LA CANTIDAD N Q INGRESE EL CLIENTE
  N=6
  2,3,5,7,11,13
  N=2
  2,3
  N=5
  2,3,5,7,11
  ahora deberan realizarlo con fUNCIONES
*/

function esPrimo(numero) {
    if (numero < 2) return false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }

    return true;
}

function generarPrimos(cantidad) {
    let primos = [];
    let numero = 2;

    while (primos.length < cantidad) {
        if (esPrimo(numero)) {
        primos.push(numero);
    }
    numero++;
    }

    return primos;
}

















<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Don Baratón</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen flex items-center justify-center">
  <div class="bg-white shadow-2xl rounded-xl p-6 max-w-2xl w-full text-center">
    <h1 class="text-4xl font-bold text-teal-600 mb-6">Don Baratón 🍽️</h1>

    <input id="nombre" type="text" placeholder="Tu nombre"
      class="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500">

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Menú del Día</h2>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <!-- Añade tus propias imágenes con rutas personalizadas -->
      <div class="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md">
        <img src="tacos.jpg" alt="Tacos" class="w-full h-32 object-cover rounded">
        <button onclick="pedir(1)" class="mt-2 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded">Tacos - $40</button>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md">
        <img src="ensalada.jpg" alt="Ensalada" class="w-full h-32 object-cover rounded">
        <button onclick="pedir(2)" class="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded">Ensalada - $35</button>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md">
        <img src="hamburguesa.jpg" alt="Hamburguesa" class="w-full h-32 object-cover rounded">
        <button onclick="pedir(3)" class="mt-2 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded">Hamburguesa - $50</button>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md">
        <img src="pizza.jpg" alt="Pizza" class="w-full h-32 object-cover rounded">
        <button onclick="pedir(4)" class="mt-2 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded">Pizza - $45</button>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md col-span-2">
        <img src="sopa.jpg" alt="Sopa" class="w-full h-32 object-cover rounded">
        <button onclick="pedir(5)" class="mt-2 w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded">Sopa - $30</button>
      </div>
    </div>

    <div id="factura" class="mt-6 text-lg text-gray-700 font-medium"></div>

    <h3 class="mt-6 text-xl font-semibold text-teal-700">📝 Pedidos realizados</h3>
    <ul id="listaPedidos" class="mt-2 list-disc list-inside text-left text-gray-800 text-base font-medium"></ul>
  </div>

  <script>
    let total = 0;
    const listaPedidos = document.getElementById("listaPedidos");

    function pedir(opcion) {
      let precio = 0;
      let plato = "";

      if (opcion === 1) { precio = 40; plato = "Tacos 🌮"; alert("¡Ordenaste Tacos!"); }
      else if (opcion === 2) { precio = 35; plato = "Ensalada 🥗"; }
      else if (opcion === 3) { precio = 50; plato = "Hamburguesa 🍔"; }
      else if (opcion === 4) { precio = 45; plato = "Pizza 🍕"; }
      else if (opcion === 5) { precio = 30; plato = "Sopa 🍜"; }

      total += precio;

      // Agrega el plato a la lista
      const nuevoItem = document.createElement("li");
      nuevoItem.textContent = plato;
      lista