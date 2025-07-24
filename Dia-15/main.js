/* ARRAYS */
//COMO SE DECLARAN ARRAYS
let nuevoArray = ["kevin", "pablo", "johan", "geraldine", "gabriel"];
/* acceder a los valores de un array */
console.log(nuevoArray[4]);
nuevoArray[0] = "Andrew";
/* CASO ESPECIAL */

const Bolivianos = ["kevin", "Jorge", "Juan", "Pepe"];
Bolivianos.push("PETARDO");

/* METODOS BASICOS DE LOS ARRAYS */
//metodos para agregar elementos al array
let contador = nuevoArray.push("Yamila");

nuevoArray.unshift("Benjamin", "Douglas");

//metodos para eliminar elementos de un array
let ultimoEstudiante = nuevoArray.pop();

let primerEstudiante = nuevoArray.shift();

/* METODO IMPORTANTE!!!!!! */
let largo = nuevoArray.length;
console.log(largo);
console.log(nuevoArray);
/* ARRAY Q VEO ARRAY Q ITERO */
for (let index = 0; index < nuevoArray.length; index++) {
  console.log(nuevoArray[index]);
}

/* las notas de un estudiante de funval estn dentro de un array
ejemplo
let notas =[32,100,25,78]
let notas =[32,100,10,8,0]
let notas =[32]
let notas =[32,77]
realizar una funcion q reciba un array y nos retorne el promedio de las notas de un estudiante :D
*/

let notas =[32,100,10,8,0]

function promedio(notas) {
    let suma = 0
    for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i]
    }
    let promedioNotas = suma / notas.length

    return promedioNotas
}

console.log("Promedio:", promedio(notas))

// Realizar a suma y mostrar el total de la diagonal principal pero usando un solo for

let matriz = [
    [28, 39, 90, 89],
    [70, 32, 28, 18],
    [10, 0, 15, 31],
    [11, 23, 45, 67],
];

let sumaDiagonal = 0

for (let i = 0; i < matriz.length; i++) {
    sumaDiagonal += matriz[i][i]; 
}

console.log(sumaDiagonal); 

/* OBJETOS */
/* DECLARACION Y CREACION DE OBJETOS */

let estudiante = {
  nombre: "kevin",
  edad: 28,
  nacionalidad: "Bolivia",
  esMiembro: true,
  numeroCuenta: 12345667897892344n,
};
/* como accedemos a valores dentro de los objetos */

estudiante.nacionalidad = "Chile";
/* como creamos llaves nuevas */
estudiante.genero = "Masculino";

/* --------------------------------- */
let listaEstudiantes = [
    {
        nombre: "kevin",
        edad: 28,
        nacionalidad: "Bolivia",
        esMiembro: true,
        numeroCuenta: 12345667897892344n,
        notas: [11, 23, 45, 67],
    },
    {
        nombre: "Pablo",
        edad: 33,
        nacionalidad: "Argentina",
        esMiembro: true,
        numeroCuenta: 12322876454n,
        notas: [99, 80, 100, 10],
    },
    {
        nombre: "Yamila",
        edad: 22,
        nacionalidad: "Argentina",
        esMiembro: true,
        numeroCuenta: 112894789123479812n,
        notas: [77, 99, 51, 80],
    },
    {
        nombre: "Sebastian",
        edad: 25,
        nacionalidad: "Peru",
        esMiembro: true,
        numeroCuenta: 12345667897892344n,
        notas: [0, 10, 0, 100],
    },
    {
        nombre: "jeff",
        edad: 34,
        nacionalidad: "Peru",
        esMiembro: true,
        numeroCuenta: 12345667897892344n,
        notas: [100, 90, 99, 88],
    },
];
/* objetivo mostrar a los estudiantes cuyo promedio sea mayor a 65pts */

for (let index = 0; index < listaEstudiantes.length; index++) {
    let promedioEstudiante = promedio(listaEstudiantes[index].notas);
    if (promedioEstudiante >= 65) {
        console.log(
        listaEstudiantes[index].nombre +
            " este estudiante tiene un promedio de " +
            promedioEstudiante
    );
    }
}

/* mostrar a todos los estudiantes q sean de Argentina */
for (let index = 0; index < listaEstudiantes.length; index++) {
    let estudiantes = listaEstudiantes[index].nombre
    console.log(estudiantes);
}
