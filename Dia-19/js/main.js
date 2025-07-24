import { productos } from "./productos.js";
import { agregarAlCarrito } from "./carrito.js";
import { finalizarCompra } from "./checkout.js";

const catalogo = document.getElementById("catalogo");
const finalizarBtn = document.getElementById("finalizar");

productos.forEach((producto) => {
  const card = document.createElement("div");
  card.className = "p-4 bg-white rounded shadow";

  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-40 object-cover rounded mb-2" />
    <h3 class="font-bold">${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <button class="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
      Agregar
    </button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    agregarAlCarrito(producto);
  });

  catalogo.appendChild(card);
});

finalizarBtn.addEventListener("click", finalizarCompra);
