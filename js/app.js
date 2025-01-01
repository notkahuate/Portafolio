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
