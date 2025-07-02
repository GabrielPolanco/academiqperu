// Script para el scroll suave del CTA final
const ctaFinalButton = document.querySelector('a[href="#formulario-captacion"]');
if (ctaFinalButton) {
    ctaFinalButton.addEventListener('click', function(e) {
        e.preventDefault();
        const formElement = document.getElementById('formulario-captacion');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Script para el menú de navegación responsive (móviles)
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar el menú al hacer clic en un enlace
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}
