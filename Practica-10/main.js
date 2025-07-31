async function fetchUsers() {
  const container = document.querySelector(".users-container");
  container.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Respuesta de red no válida");

    const users = await response.json();

    users.forEach((user) => {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow flex flex-col items-center text-center hover:scale-110";

      card.innerHTML = `
        <div class="mb-4 ">
            <svg class="w-16 h-16 " viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="2"/>
            <path d="M32 18c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zM20 44c0-5 5-10 12-10s12 5 12 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </div>
        <h3 class="text-xl font-semibold mb-2">Nombre: ${user.name}</h3>
        <p><span class="font-medium">Usuario:</span> ${user.username}</p>
        <p><span class="font-medium">Email:</span> ${user.email}</p>
        <p><span class="font-medium">Empresa:</span> ${user.company.name}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `
      <div class="col-span-full bg-red-100 text-red-700 p-4 rounded text-center">
        Error al cargar los usuarios. Inténtalo de nuevo más tarde.
      </div>
    `;
    console.error("Error al obtener usuarios:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchUsers);
