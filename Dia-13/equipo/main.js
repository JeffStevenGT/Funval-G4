let total = 0;
const listaPedidos = document.getElementById("listaPedidos");
const pedidosContados = {};

function pedir(opcion) {
    let precio = 0;
    let plato = "";

    if (opcion === 1) { precio = 40; plato = "Tacos"; alert("Ordenaste Tacos!"); }
    else if (opcion === 2) { precio = 35; plato = "Ensalada"; }
    else if (opcion === 3) { precio = 50; plato = "Hamburguesa"; }
    else if (opcion === 4) { precio = 45; plato = "Pizza"; }
    else if (opcion === 5) { precio = 30; plato = "Sopa"; }
    else if (opcion === 6) { precio = 70; plato = "Pasta"; }
    else if (opcion === 7) { precio = 170; plato = "Salchipollo"; }
    else { console.log("Ingrese datos válidos"); return; }

    total += precio;

if (pedidosContados[plato]) {
    pedidosContados[plato].cantidad += 1;
    pedidosContados[plato].subtotal += precio;
} else {
    pedidosContados[plato] = {
        cantidad: 1,
        subtotal: precio
    };
}

listaPedidos.innerHTML = "";
    for (let nombrePlato in pedidosContados) {
    const item = document.createElement("li");
    item.textContent = `${nombrePlato} x${pedidosContados[nombrePlato].cantidad} - $${pedidosContados[nombrePlato].subtotal}`;
    listaPedidos.appendChild(item);
}

let nombre = document.getElementById("nombre").value || "Cliente";
let descuento = total > 120 ? " (5% de descuento aplicado!)" : "";
let totalFinal = total > 120 ? (total * 0.95).toFixed(2) : total.toFixed(2);

document.getElementById("factura").innerHTML = `
    <p><strong>${nombre}</strong>, total acumulado: 
    <span class="text-teal-700 font-bold">$${totalFinal}</span>${descuento}</p>`;
}
