/* function operacion(a, b, callback) {
  return callback(a, b);
}

console.log(
  operacion(2, 4, (a, b) => {
    return a + b;
  })
); */

let notas = [12, 23, 5, 34, 87, 24, 23, 32, 77];

notas.forEach((nota) => {
  //console.log(nota); //recorre el array no crea uno nuevo y solo funciona cuando querempos trabajr sobre el mismo array
});

let copia = notas.map((nota) => nota * 2); // map crea un nuevo array apartir del original con valores especificos

let copia2 = notas.filter((nota) => nota > 40); //crea un nuevo array apartir del original con los valores q cumplan una condicion espécifica

let encontrar = notas.find((nota) => nota > 100); //busca el primer valor q coincida con el criterio de busqueda si ninguno cumple retorna undefined

let encontrar2 = notas.findIndex((nota) => nota === "Pablo"); //retorna el indice donde se encuentra ese elemento

/* -------------SINCRONIA---------------- */

/* console.log("tienda de yamila");
console.log("Gabriel");
console.log("Kevin");
console.log("Geraldine");
console.log("Johan");
 */
/* -------------ASINCRONIA----------- */
/* 
console.log("tienda DOUGLAS");

setTimeout(() => {
  console.log("Juan");
}, 5000);

console.log("MARIO");

console.log("jefferson");
setTimeout(() => {
  console.log("Jose");
}, 3000);
 */
/* -----------------PROMESAS---------------------- */
let peliculas = [
  {
    titulo: "Spiderman",
    año: 2002,
    genero: "accion",
  },
  {
    titulo: "Tarzan",
    año: 2001,
    genero: "Infantiles",
  },
  {
    titulo: "Hercules",
    año: 2003,
    genero: "Infantiles",
  },
];
//CREANDO UNA PROMESA

const Johan = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(peliculas);
    } else {
      reject("el servidor esta caido");
    }
  }, 5000);
});

//consumir promesa THEN Y CATCH
/* Johan.then((pepito) => {
  console.log(pepito);
}).catch((juanito) => {
  console.log(juanito);
}); */

/// CONSUMIR PROMESAS USANDO ASYNC/AWAIT///try catch

async function pepitoPerez() {
  let pelisChidas = await Johan;
  console.log(pelisChidas);
}

pepitoPerez();

/* ---------------Ejercicio-------------- */
let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];
//CREANDO UNA PROMESA

const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 5000);
});
/* 
    deberan consumir esta promesa para obtener el listado de los estudiantes una vez tengan el listado de estudiantes
    deberan mostrar con inerHTML o createElement EN SU WEB la lista de todos los estudiantes aprobados se considera aprobado cuando
    el promedio del estudiante es de 51pts pueden mostrarlo usando cards listas tablas etc.
*/
