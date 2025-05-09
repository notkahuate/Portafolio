const textElement = document.querySelector('.dev-badge');
const text = "I'M A DEVELOPER";
let index = 0;

function typeEffect() {
    textElement.textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 0; // Reinicia el efecto para un bucle continuo
    }
}

setInterval(typeEffect, 200); // Ajusta la velocidad según desees

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    projectCards.forEach(card => {
        observer.observe(card);
    });

    const skillItems = document.querySelectorAll('.about_me .skill-item');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    skillItems.forEach(item => {
        skillObserver.observe(item);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.hero-image img');
    const originalSrc = image.src;
    const newSrc = 'img/WhatsApp Image 2025-05-09 at 1.12.06 PM.jpeg'; // Ruta de la nueva imagen

    image.addEventListener('mouseover', function() {
        image.src = newSrc;
    });

    image.addEventListener('mouseout', function() {
        image.src = originalSrc;
    });
});
