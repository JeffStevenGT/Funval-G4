/* document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}); */

// skills

/* document.querySelectorAll(".boton-toggle").forEach((boton) => {
  boton.addEventListener("click", () => {
    const idContenido = boton.getAttribute("data-target");
    const contenido = document.getElementById(idContenido);

    if (contenido.classList.contains("max-h-0")) {
      contenido.classList.remove("max-h-0", "opacity-0");
      contenido.classList.add("max-h-[1000px]", "opacity-100");
    } else {
      contenido.classList.add("max-h-0", "opacity-0");
      contenido.classList.remove("max-h-[1000px]", "opacity-100");
    }
  });
}); */

new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 250,
  grabCursor: true,
  loop: true,
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
  },
});

const toggle = document.querySelector(".theme-switch__checkbox");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});
