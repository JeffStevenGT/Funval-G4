new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 250,
    grabCursor: true,
    loop: true,
    breakpoints: {
        991: {
        slidesPerView: 3
        }
    }
});

    const toggle = document.querySelector('.theme-switch__checkbox');
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark', toggle.checked);
    });