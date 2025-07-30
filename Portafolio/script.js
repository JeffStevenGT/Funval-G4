// Dark
const themeToggleCheckbox = document.querySelector(".theme-switch__checkbox");

themeToggleCheckbox.addEventListener("change", () => {
  document.documentElement.classList.toggle(
    "dark",
    themeToggleCheckbox.checked
  );
});

// Hongo
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((i) =>
      i.querySelector(".mushroom")?.classList.add("hidden")
    );
    item.querySelector(".mushroom")?.classList.remove("hidden");
  });
});

// Skills
const toggles = document.querySelectorAll(".boton-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const targetId = toggle.getAttribute("data-target");
    const content = document.getElementById(targetId);
    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    document.querySelectorAll(".contenido").forEach((panel) => {
      panel.style.maxHeight = "0px";
      panel.style.opacity = "0";
    });

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.opacity = "1";
    }
  });
});

// Transicion
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
