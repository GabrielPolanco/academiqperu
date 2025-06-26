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