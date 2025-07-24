let participantes = [
  {
    nombre: "Jeff",
    edad: 34,
    profesion: "web developer",
    ganador: true,
  },
  {
    nombre: "Ana",
    edad: 29,
    profesion: "UX designer",
    ganador: false,
  },
  {
    nombre: "Luis",
    edad: 40,
    profesion: "frontend engineer",
    ganador: true,
  },
];
// si el participante es ganador = true entonces mostrar un mensaje que lo felicite por su participacion y que le muestre que gano un millon de dolares

if (participante.ganador === true) {
  console.log(`Felicidades ${participante.nombre}!
Has participado como ${participante.profesion} y has ganado un millon de dolares!`);
}

/* crear una funcion para renderizar una lista de estudiantes, esta funcion debera recibir un estudiante a la vez y mostrarlo */

let estudiantesFunval = [
  { nombre: "Yamila", pais: "Argentina" },
  { nombre: "Gabriel" },
  { nombre: "Benjamin", pais: "Argentina", edad: 32, mision: true },
  { nombre: "Jeff", pais: "Peru" },
];

function renderizarTabla() {
  for (let i = 0; i < estudiantesFunval.length; i++) {
    let {
      nombre = "no ingreso dato",
      pais = "no ingreso dato",
      edad = "no ingreso dato",
      mision,
    } = estudiantesFunval[i];
  }
}
