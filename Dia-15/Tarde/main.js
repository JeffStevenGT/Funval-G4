/* let estudiantes = [
  {
    nombre: "kevin",
    pais: "Bolivia",
    edad: 28,
  },
  {
    nombre: "Pablo",
    pais: "Argentina",
    edad: 18,
  },
  {
    nombre: "Geraldine",
    pais: "Peru",
    edad: 18,
  },
  {
    nombre: "Gabriel",
    pais: "Argentina",
    edad: 33,
  },
  {
    nombre: "Mario",
    pais: "Argentina",
    edad: 25,
  },
];

let contenedor = document.querySelector("#contenedor-estudiantes");
for (let i = 0; i < estudiantes.length; i++) {
  if (estudiantes[i].pais === "Argentina" && estudiantes[i].edad >= 18) {
    contenedor.innerHTML += `
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[i].nombre}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Pais de origen: ${estudiantes[i].pais}</p>
            </a>
            `;
  }
} */

/* trabajo MOSTRAR UNICAMENTE  A LOS ESTUDIANTES DE ARGENTINA y  ademas tengan 18 años DE FORMA DINAMICA */
/* ------------------------ */
const productos = [
  {
    id: 1,
    nombre: "Helado de vainilla",
    precio: 10,
    stock: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYL73VZJEtt9EYJT9PwfjJCgbJDVigAr90SA&s",
  },
  {
    id: 2,
    nombre: "Helado de chocolate",
    precio: 12,
    stock: 0,
    img: "https://easyways.cl/storage/20210330080108helado-de-chocolate.jpg",
  },
  {
    id: 3,
    nombre: "Helado de fresa",
    precio: 11,
    stock: 2,
    img: "https://i.ytimg.com/vi/cYIUuoAKpxg/maxresdefault.jpg",
  },
  {
    id: 4,
    nombre: "Helado de limón",
    precio: 9,
    stock: 1,
    img: "https://www.cocinadelirante.com/sites/default/files/images/2019/04/receta-facil-de-helado-de-limon.jpg",
  },
];

/*  Mostrar todos los productos en una lista.

Cada producto debe mostrar:

Nombre

Precio

Stock disponible

Botón "Comprar"*/
let tabla = document.querySelector("#cuerpo-tabla");
tabla.innerHTML = "";
for (let i = 0; i < productos.length; i++) {
  tabla.innerHTML += `<tr
            class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
          >
            <th class="p-2">
             <img src="${productos[i].img}" alt="" class="rounded-2xl h-36 w-64">
            </th>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              ${productos[i].nombre}
            </th>
            <td class="px-6 py-4">${productos[i].precio}</td>
            <td class="px-6 py-4">${productos[i].stock}</td>
            <td class="px-6 py-4">
              <button class="bg-green-700 text-white p-2 rounded-2xl m-4">Comprar</button>
            </td>
          </tr>`;
}