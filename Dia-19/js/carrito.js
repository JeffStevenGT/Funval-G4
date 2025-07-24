export let carrito = [];

export function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}

export function actualizarCarrito() {
  const contenedor = document.getElementById("carrito");
  const totalSpan = document.getElementById("total");

  contenedor.innerHTML = "";
  let total = 0;

  carrito.forEach((p) => {
    const item = document.createElement("div");
    item.textContent = `${p.nombre} - $${p.precio}`;
    contenedor.appendChild(item);
    total += p.precio;
  });

  totalSpan.textContent = `Total: $${total}`;
}
