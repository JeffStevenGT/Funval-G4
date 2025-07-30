const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Scroll a la sección correspondiente
    const id = link.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth" });
  });
});

const btn = document.getElementById("toggle-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

//skills

document.querySelectorAll(".boton-toggle").forEach((boton) => {
  boton.addEventListener("click", () => {
    const idContenido = boton.getAttribute("data-target");
    const contenido = document.getElementById(idContenido);
    contenido.classList.toggle("hidden");
  });
});
