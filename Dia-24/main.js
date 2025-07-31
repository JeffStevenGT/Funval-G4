let contenedor = document.querySelector("#pokemons-container");

async function traerpokemones(numeroInicialPokemones) {
  contenedor.innerHTML = "";
  for (let i = numeroInicialPokemones; i < numeroInicialPokemones + 10; i++) {
    let respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data = await respuesta.json();
    renderizarPokemon(data);
  }
}
traerpokemones(1);
function renderizarPokemon({
  sprites: {
    other: {
      ["official-artwork"]: { front_default },
    },
  },
  name,
  id,
  types,
}) {
  let tipos = "";
  types.forEach((tipo) => {
    tipos = tipos + " " + tipo.type.name;
  });

  contenedor.innerHTML += `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${front_default}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">#00${id}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">tipos ${tipos}</p>

        <button 
          class="info-btn inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
          data-id="${id}">
          Mas información
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>

    </div>
</div>
`;
}

let next = document.querySelector("#siguiente");
let contador = 1;
next.addEventListener("click", function (e) {
  contador += 10;
  traerpokemones(contador);
});

let ant = document.querySelector("#anterior");

ant.addEventListener("click", function (e) {
  if (contador > 10) {
    contador -= 10;
    traerpokemones(contador);
  }
});

let menu = document.querySelector("#drpwn");
let opc = document.querySelector("#opciones");
menu.addEventListener("click", function (e) {
  opc.classList.toggle("hidden");
});

//let fuego = document.querySelector("#fire");
let tipos = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

opc.addEventListener("click", async function (e) {
  opc.classList.add("hidden");
  contenedor.innerHTML = "";
  let busqueda = "";
  for (let k = 0; k < tipos.length; k++) {
    if (e.target.closest(`#${tipos[k]}`)) {
      busqueda = tipos[k];
    }
  }

  let respuesta = await fetch(`https://pokeapi.co/api/v2/type/${busqueda}`);
  let data = await respuesta.json();

  for (let j = 0; j <= 9; j++) {
    let respuestaPOk = await fetch(`${data.pokemon[j].pokemon.url}`);
    let datapok = await respuestaPOk.json();
    renderizarPokemon(datapok);
  }
});

//

document.addEventListener("click", async function (e) {
  const infoBtn = e.target.closest(".info-btn");
  if (infoBtn) {
    const id = infoBtn.getAttribute("data-id");

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();

      const altura = data.height;
      const peso = data.weight;
      const habilidades = data.abilities.map((h) => h.ability.name).join(", ");
      const tipos = data.types.map((t) => t.type.name).join(", ");
      const movimientos = data.moves
        .slice(0, 5)
        .map((m) => m.move.name)
        .join(", ");
      const stats = data.stats
        .map((s) => `<strong>${s.stat.name}</strong>: ${s.base_stat}`)
        .join("<br>");

      document.querySelector("#modal-content").innerHTML = `
    
        <h2 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.other["official-artwork"].front_default}" />
        <p class = "text-lg"><strong>Altura:</strong> ${altura}</p>
        <p class = "text-lg"><strong>Peso:</strong> ${peso}</p>
        <p class = "text-lg"><strong>Habilidades:</strong> ${habilidades}</p>
        <p class = "text-lg"><strong>Tipos:</strong> ${tipos}</p>
        <p class = "text-lg"><strong>Movimientos:</strong> ${movimientos}</p>
        <p class = "text-lg"><strong>Estadísticas:</strong><br>${stats}</p>
        <div class= "flex w-full justify-center items-center">
          <button 
            id="cerrar-modal"
            class="inline-flex cursor-pointer items-center px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-900 focus:outline-none focus:ring-4 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800 mt-4">
            Cerrar
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0L5 9M1 5l4-4"/>
            </svg>
          </button>
        </div>
      `;
      document.querySelector("#modal").classList.remove("hidden");
      document.body.classList.add("modal-open");
    } catch (error) {
      console.error("Error al cargar detalles del Pokémon:", error);
    }
  }

  if (e.target.id === "cerrar-modal") {
    document.querySelector("#modal").classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
});
