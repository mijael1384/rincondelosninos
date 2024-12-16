// Seleccionar elementos
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');
const heroSection = document.querySelector('#hero');

if (heroSection) {
    const heroHeight = heroSection.offsetHeight;
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Ocultar el menú al hacer scroll si está abierto
        if (nav.classList.contains('active')) {
            nav.classList.remove('active'); // Cierra el menú
        }

        // Mostrar/ocultar header en función del scroll
        if (currentScroll > heroHeight) {
            if (currentScroll > lastScrollTop) {
                header.classList.add('hidden'); 
            } else {
                header.classList.remove('hidden'); 
            }
        } else {
            header.classList.remove('hidden'); 
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}

// Alternar el menú al hacer clic en el botón
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
