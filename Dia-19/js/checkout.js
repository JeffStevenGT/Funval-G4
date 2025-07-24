import { carrito } from "./carrito.js";

export function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío. Agrega productos antes de continuar.");
    return;
  }

  const resumen = carrito.map((p) => `${p.nombre} - $${p.precio}`).join("\n");
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);

  const confirmar = confirm(
    `Resumen:\n${resumen}\n\nTotal: $${total}\n\n¿Confirmar compra?`
  );
  if (confirmar) {
    alert("🎉 ¡Compra realizada con éxito!");
    carrito.length = 0;
    document.getElementById("carrito").innerHTML = "";
    document.getElementById("total").textContent = "Total: $0";
  }
}
