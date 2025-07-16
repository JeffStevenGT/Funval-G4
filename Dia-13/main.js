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

/* DESAFIO GRUPAL 

 Requerimientos del Restaurante “don baraton”

El restaurante necesita un sistema simple que permita:

Mostrar el menú del día (máximo 5 platos, sin usar arrays).

Permitir que un cliente realice varios pedidos (repetir mientras desee).

Calcular el precio según el plato elegido.

Solicitar el nombre del cliente.

Mostrar una factura final con el total a pagar por todos los platos.

(Opcional +5PTS) Aplicar descuento del 5% si el total supera los $120.

(Opcional +5PTS) Mostrar un mensaje especial si el cliente eligió “Tacos”.

(Opcional html +10pts)
*/

/* funciones anonimas */

let pedrito = function () {
  console.log("hola amigos buenas tardes");
};

pedrito();

/* funciones anonimas q reciben parametros */

let juanito = function (nombre) {
  console.log("hola " + nombre);
};

juanito("Kevin");
/* funciones anonimas q reciben parametros y retornan valores */

let resta = function (a, b) {
  return a - b;
};

console.log(resta(10, 5));

/* ---------ARROW FUNCTION--------- */

let mulpiplicar = (a, b) => {
  return a * b;
};

console.log(mulpiplicar(2, 6));
/* --------------------- */
let duplicar = (x) => x * 2;

console.log(duplicar(4));

let arrays = [1, 2, 3, 4];
/* 
  REALIZAR UNA CALCULADORA CON UN MENU
  MULTIPLICAR
  SUMAR
  RESTAR
  DIVIDIR
  2 NUMEROS
  vamos a crear arrowfunction para cada operacion y hacer uso de ellas 
*/

let suma1 = (a, b) => a + b;
let resta1 = (a, b) => a - b;
let multiplicacion1 = (a, b) => a * b;
let division1 = (a, b) => {
  if (b != 0 ){a / b}
  else {alert('undefined');
  }
} 

let calculadora = () => {
  let opcion = parseInt(prompt("elige una operacion a realiza:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir"))
  let num1 = parseFloat(prompt("ingresa el primer numero"));
  let num2 = parseFloat(prompt("ingresa el segundo numero"));

  let resultado;
  switch(opcion) {
    case "1":
      resultado = suma1(num1, num2);
      break;
    case "2":
      resultado = resta1(num1, num2);
      break;
    case "3":
      resultado = multiplicacion1(num1, num2);
      break;
    case "4":
      resultado = division1(num1, num2);
      break;
    default:
      resultado = 'opcion invalida';
  }

  alert(`resultado: ${resultado}`);
};

calculadora();



