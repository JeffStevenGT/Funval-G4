/* MOSTRAR ELEMENTOS EN CONSOLA */
console.log("hola mundo");
/* CREACION O DECLARACION DE VARIABLES */

let nombreVariable = "el valor asociado"; /* alcance en bloque */
var nombreVar = "el valor"; /* NO SE USA ALCANCE GLOBAL*/

const nombreConst = "el valor de la constante";

/* FORMAS CORRECTAS DE CREAR VARIABLES */

/* let 2variable */
/* let #variable */
/* let $nombrevar = 1;
let _contador = 322;
let nombre;
let apellidoPaterno; */

/* TIPOS DE DATOS PRIMITIVOS */
/* String */
let nombre = "Kevin";
let NOMBRE = "Andrew";
let apellidos = `Rodriguez`;
/* Numerico */
let edad = 28;
/* Booleano */
let masculino = true;
let miembro = true;
/* caracter q en js es lo mismo q String */
let caracter = "k";
/* Undefined */
let aprobado;
/* Null */
let reprobado = null;
/* Big int */
let numeroGrande = 2138762349843560439682873123123132n;
let grandeeeee = BigInt("1273123789127398123");
/* Simbolo */
let simbolo = Symbol("kevin");
/* uso de Strings */
let cantidad = nombre.length;
console.log(cantidad);
/* VERIFICAR EL TIPO DE DATO  DE UNA VARIABLE */
console.log(typeof simbolo);

/* OPERADORES */
let a = 2;
let b = 7;
let estudiante = "Geraldine";
let apellidoEstudiante = "Revilla";
let NombreCompleto;
let resultado;
/* Suma */
resultado = a + b;
NombreCompleto = estudiante + " " + apellidoEstudiante; /* Concatenacion */
//console.log(NombreCompleto);
/* Resta */
resultado = a - b;
/* divison */
resultado = a / b;
/* multiplicacion */
resultado = a * b;
/* Potencia */
resultado = a ** b;
/* Modulo */
resultado = a % b;

/* conecptos basicos */
// 1. Escribe un comentario en una línea

// 2. Escribe un comentario en varias líneas
/* sds
dsfsdf
sdfsdf
sdfsdf */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let numero1 = 123
let nombre1 = "jeff"
let sud = true
let casado
let numeroEnorme = BigInt("534353534534567690890980")
let simbolo1 = Symbol("%");
let valorNull = null

// 4. Imprime por consola el valor de todas las variables
console.log(numero1);
console.log(nombre1);
console.log(sud);
console.log(casado);
console.log(numeroEnorme);
console.log(simbolo1);
console.log(valorNull);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof(numero1));
console.log(typeof(nombre1));
console.log(typeof(sud));
console.log(typeof(numeroEnorme));
console.log(typeof(simbolo1));
console.log(typeof(valorNull));

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
numero1 = 2345
nombre1 = "steven"
sud = false
numeroEnorme = 61231232130800080535345345
simbolo1 = Symbol("&")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
numero1 = "uno"
nombre1 = 123478
sud = BigInt("5342478070880890980980890980")
numeroEnorme = true
simbolo1 = null
valorNull = "valorNullo"
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const numero2 = 444
const nombre2 = "toribio"
const sud2 = true
const numeroEnorme2 =BigInt("1233333353534534567690890980")
const simbolo2 = Symbol("#");
const valorNull2 = null

// 9. A continuación, modifica los valores de las constantes
//no se puede pillo

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
const numeroNombre2 = nombre.replace("J","t")

/* ACLARACIONES */
let kevi2n;
const jeff =
  "tiene q tener un valor"; /* las constantes pueden ser de tipo NULL pero nunca undefined */
/* una constante no se puede reasignar pero si se puede mutar el valor q tenga en su interior */
const Benjamin = "estudiante1234";

/* OPERADORES DE COMPARACION dato IMPORTANTE EL RESULTADO DE TODA COMPARACON SIEMRE SIEMPRE ES UN VALOR BOOLEANO */
let comparacion;
comparacion = a != b; //verifica q sean diferentes
comparacion = a !== b; //verifica q sean diferentes pero tambien diferentes en el tipo de dato
comparacion = a == b; // verifica si es valor es igual sin ver el tipo d dato
comparacion = a === b; // verifica tambien el tipo de dato deben ser del mismo tipo de dato primitivo
comparacion = a > b;
comparacion = a < b;
comparacion = a <= b;
comparacion = a >= b;

/* OPERADORES LOGICOS EL RESULTADO DE TODA COMPARACON SIEMRE SIEMPRE ES UN VALOR BOOLEANO*/
/* AND &&*/
a = 2;
b = 7;
let logico;
logico = a <= b && a <= b; //true5   false1
/* OR || */
logico = a === b || a >= b; //false
/* NOT */
logico = !(a === b);
console.log(logico);



// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
let c = 5
let d = 6 
let e = 1
let result1
let result2
let result3
let result4
let result5


let suma = a + b
let resta = a - b
let multiplicacion = a * b
let division = a / b
let potencia = a * 2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

result1 = c <= d || d <= c;
result2 = e >= 5 || e <= d;
result3 = 5 < d && d >= c;
result4 = !(5 > d && d >= c);
result5 = c <= 6 || d <= 9;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
result1 = !(c <= d || d <= c);
result2 = !(e >= 5 || e <= d);
result3 = !(5 < d && d >= c);
result4 = 5 > d && d >= c;
result5 = !(c <= 6 || d <= 9);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// 5. Utiliza el operador lógico and
const edad2 = 19;
const tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {
    console.log("Puede conducir");
} else {
    console.log("Acceso denegado");
}

// 6. Utiliza el operador lógico or
const dia = "sabado";

if (dia === "sabado" || dia === "domingo") {
    console.log("es fin de semana");
}

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas


/* let usuario = "admin"
let password = "123456"

usuario === "admin" && password === 123456
?console.log("Los datos son correctos")
:console.log("Los datos son incorrectos");
 */


let usuario = "admin"
let password = 123456

usuario === "admin" && password === 123456
?console.log("Los datos son correctos")
: password !== 123456 && usuario !== "admin"
? console.log("Ambos datos son incorrectos") 
: usuario !== "admin" 
? console.log("usuario incorrecto")
: console.log("password incorrecto ");


