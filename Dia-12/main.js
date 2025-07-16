/* IF */ //
//if (condicion) {
//es el codigo q se ejecutara cuando la condicion sea verdadera
//}
//seguimos con el flujo normal
/* --------Ejemplo-------------- */
//verificar si una persona es mayor de edad
let edad = 28;

/* if (edad >= 18) {
  console.log("esta persona es mayor de edad");
}

console.log("flujo normal"); */
/* ---------IF-ELSE-------------- */
/* 
    if(condicion)
    {el codigo q se ejecutara si la condicion es verdadera}
    else{ el codigo q se ejecutara si la condicion es falsa}
*/

if (edad >= 18) {
  console.log("es mayor de edad");
} else {
  console.log("eres menor de edad");
}

/* miembro = true;

if (miembro && edad >= 18) {
  console.log("todo lo q tiene q trabajr");
} */
/* IF-ELSE-IF */
/* 
    if(condicion) 
    {el codigo q se ejecutara si la condicion es verdadera
        if(condicion) 
        {el codigo q se ejecutara si la condicion es verdadera}
    }else{
        if(condicion) 
        {el codigo q se ejecutara si la condicion es verdadera}
        }
*/
let permisoMama = false;
let permisoPapa = true;
edad = 28;

if (edad >= 18) {
  if (permisoMama || permisoPapa) {
    console.log("puedo salir a bailar");
  } else {
    console.log("me quedo en casa");
  }
} else {
  console.log("me quedo en casa");
}
/* verificar q mes del año estamos con un numero del 1 al 12 */
/* --------------swich case--------------- */

let numeroMes = 4;

switch (numeroMes) {
  case 1:
    console.log("enero");
    break;
  case 2:
    console.log("febrero");
    break;
  case 3:
    console.log("marzo");
    break;
  case 4:
    console.log("abril");
    break;
  case 5:
    console.log("mayo");
    break;
  case 6:
    console.log("junio");
    break;
  case 7:
    console.log("julio");
    break;
  case 8:
    console.log("agosto");
    break;
  case 9:
    console.log("septiembre");
    break;
  case 10:
    console.log("octubre");
    break;
  case 11:
    console.log("noviembre");
    break;
  case 12:
    console.log("diciembre");
    break;
  default:
    console.log("ingresa un valor valido");
    break;
}
/* el usuario va ingresar su fecha de 
nacimiento dia el mes y el año ustedes 
deberan decirle cuantos dias tiene de vida
nacio el 1 de julio de 2025 vivio 15 dias 
ustedes deberan tener en cuenta años bisiestos y febrero 
*/
let dia = 10;
let mes = 6;
let año = 1990;
let diaHoy = 15;

/* ----------------BUCLES------------------------ */

/* 
  while(condicion){
  todo el codigo q se ejecutara en el bucle
  su controlador del bucle 
  }
*/

/* let n = 0;

while (n > 5) {
  console.log("hola mundo");
  n++; /// n= n+1
}
console.log("flujo normal"); */

/*-------------- DO WHILE-------------------- */
/* let nombreUsuario;
do {
  nombreUsuario = prompt("ingresa tu nombre de usuario");
} while (nombreUsuario !== "admin");
console.log("felicidades lograste ingresar al sistema tremendo hacker :v"); */

/* ------------------FOR------------------- */

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
/* ------------EJERCICIOS----------------- */

/* 
REALIZAR LA SERIE DE LOS NUMEROS PARES 
SI EL CLIENTE COLOCA EL NUMERO 5
2,4,6,8,10
SI EL CLIENTE COLOCA EL NUMERO 3
2,4,6
*/

/* 
REALIZAR LA MULTIPLICACION DE 2 NUMEROS INGRESADOS X EL CLIENTE 
REGLA: NO PUEDEN UTILIZAR NI EL SIMBOLO / NI EL DE * SOLO PODRAN USAR EL SIMBOLO DE LA SUMA
NUMERO 1= 2
NUMERO 2= 4
4+4 = 8
2+2+2+2=8
*/
/* 
    dado un numero cualquiera encontrar su factorial
    5!=1*2*3*4*5= 120
*/

/* 
MOSTRAR LOS N TERMINOS DE LA SERIE FIBONACCI
0,1,1,2,3,5,8,13,21
*/
let a = 0;
let b = 1;
let c = 0;
let numeroCliente = parseInt(prompt("ingresa un numero"));

for (let i = 1; i <= numeroCliente; i++) {
  if (i === 1) {
    console.log(a);
  }
  if (i === 2) {
    console.log(b);
  }
  if (i > 2) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
/* 
  GENERAR LA SERIE DE LOS NUMEROS PRIMOS ESTA SERIE SE CARACTERIZA X Q UN NUMERO PRIMO ES AQUEL
  Q SOLO ES DIVISIBLE ENTRE 1 Y EL MISMO DE LA CANTIDAD N Q INGRESE EL CLIENTE
  N=6
  2,3,5,7,11,13
  N=2
  2,3
  N=5
  2,3,5,7,11
*/