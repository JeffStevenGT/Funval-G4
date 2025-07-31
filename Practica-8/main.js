const casillas = document.querySelectorAll(".casilla");
const turnoTexto = document.getElementById("turno");
const modal = document.getElementById("modal");
const resultado = document.getElementById("resultado");
const reiniciar = document.getElementById("reiniciar");
const otraPartida = document.getElementById("otraPartida");
const svgGanador = document.getElementById("svgGanador");

const contadorX = document.getElementById("contadorX");
const contadorO = document.getElementById("contadorO");

const iconoTurno = document.getElementById("iconoTurno");

let turno = "X";
let tablero = Array(9).fill(null);
let victoriasX = 0;
let victoriasO = 0;

function verificarGanador(jugador) {
  const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let grupo of combinaciones) {
    if (grupo.every((i) => tablero[i] === jugador)) {
      return true;
    }
  }
  return false;
}

function obtenerSVG(letra) {
  if (letra === "X") {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-[#31c5bf] mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4">
        <line x1="4" y1="4" x2="20" y2="20"/>
        <line x1="20" y1="4" x2="4" y2="20"/>
      </svg>
    `;
  } else {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-[#f3b337] mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4">
        <circle cx="12" cy="12" r="8"/>
      </svg>
    `;
  }
}

casillas.forEach((casilla) => {
  casilla.addEventListener("click", () => {
    const indice = casilla.dataset.indice;
    if (tablero[indice] || verificarGanador("X") || verificarGanador("O"))
      return;

    tablero[indice] = turno;
    casilla.innerHTML = obtenerSVG(turno);

    if (verificarGanador(turno)) {
      resultado.textContent = "GANA";
      svgGanador.innerHTML = obtenerSVG(turno);
      modal.classList.remove("hidden");

      if (turno === "X") {
        victoriasX++;
        contadorX.textContent = victoriasX;
      } else {
        victoriasO++;
        contadorO.textContent = victoriasO;
      }
    } else if (tablero.every((c) => c)) {
      resultado.textContent = "¡Empate!";
      svgGanador.innerHTML = "";
      modal.classList.remove("hidden");
    } else {
      turno = turno === "X" ? "O" : "X";
      iconoTurno.innerHTML = obtenerSVGIconoTurno(turno);
    }
  });
});

otraPartida.addEventListener("click", () => {
  tablero.fill(null);
  casillas.forEach((c) => {
    c.innerHTML = "";
  });
  turno = "X";
  iconoTurno.innerHTML = obtenerSVGIconoTurno(turno);
  modal.classList.add("hidden");
  svgGanador.innerHTML = "";
  resultado.textContent = "";
});

reiniciar.addEventListener("click", () => {
  tablero.fill(null);
  casillas.forEach((c) => {
    c.innerHTML = "";
  });
  turno = "X";
  iconoTurno.innerHTML = obtenerSVGIconoTurno(turno);
  modal.classList.add("hidden");
  svgGanador.innerHTML = "";
  resultado.textContent = "";

  victoriasX = 0;
  victoriasO = 0;
  contadorX.textContent = "0";
  contadorO.textContent = "0";
});

function obtenerSVGIconoTurno(letra) {
  if (letra === "X") {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#31c5bf]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4">
        <line x1="4" y1="4" x2="20" y2="20"/>
        <line x1="20" y1="4" x2="4" y2="20"/>
      </svg>
    `;
  } else {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#f3b337]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4">
        <circle cx="12" cy="12" r="8"/>
      </svg>
    `;
  }
}
