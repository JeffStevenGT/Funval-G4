
const moonIcon = document.querySelector("img[src='./images/icon-moon.svg']");
const sunIcon = document.querySelector("img[src='./images/icon-sun.svg']");
const html = document.documentElement;

// dark
moonIcon.addEventListener("click", () => {
    html.classList.add("dark");
});

// light
sunIcon.addEventListener("click", () => {
    html.classList.remove("dark");
});


const buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.classList.remove("text-[#4a79d9]");
            btn.classList.add("text-[#908e94]");
        });
        button.classList.remove("text-[#908e94]");
        button.classList.add("text-[#4a79d9]");
    });
});
