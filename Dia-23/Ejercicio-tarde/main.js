/* ----------FETCH-------------- */

/* ASINC */

let contenedor = document.querySelector("#contenedor-usuarios");

fetch("https://dog.ceo/api/breeds/image/random/6")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    data.message.forEach((url) => {
      const raza = url.split("/")[4];

      contenedor.innerHTML += `
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="${url}" alt="perrito adorable" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${raza}</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Amante de las croquetas y los mimos</span>
            <div class="flex mt-4 md:mt-6">
              <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Adoptar</a>
              <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Conocer más</a>
            </div>
          </div>
        </div>
      `;
    });
  });

/* AWAY */
