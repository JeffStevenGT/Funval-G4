const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  const link = item.querySelector("a");
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Scroll a la sección correspondiente
    const id = link.getAttribute("href");
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: "smooth" });

    // Mostrar hongo solo en el nav activo
    navItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

const btn = document.getElementById("toggle-btn");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
