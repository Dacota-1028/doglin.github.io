// Aumentar y siminuir las estrellas

const primeraEstrella = document.getElementById('primera-estrella');
const estrellasDelante = document.getElementById('estrellas-delante');

// Función para aumentar el número de estrellas anaranjadas una por una
function aumentarEstrella() {
    if (estrellasDelante.style.display === 'none') {
        estrellasDelante.style.display = 'inline';
    } else {
        const estrellas = estrellasDelante.children;
        for (let i = 0; i < estrellas.length; i++) {
            if (estrellas[i].getAttribute('fill') === 'gray') {
                estrellas[i].setAttribute('fill', 'orange');
                break;
            }
        }
    }
}

// Función para disminuir el número de estrellas anaranjadas una por una
function disminuirEstrella() {
    const estrellas = estrellasDelante.children;
    for (let i = estrellas.length - 1; i >= 0; i--) {
        if (estrellas[i].getAttribute('fill') === 'orange') {
            estrellas[i].setAttribute('fill', 'gray');
            break;
        }
    }
}

// Ejemplo de cómo llamar a las funciones
// aumentarEstrella(); // Al inicio, muestra una estrella anaranjada
//aumentarEstrella(); // Aumenta una estrella anaranjada
//aumentarEstrella(); // Aumenta otra estrella anaranjada
disminuirEstrella(); // Disminuye una estrella anaranjada
disminuirEstrella(); // Disminuye una estrella anaranjada
disminuirEstrella(); // Disminuye una estrella anaranjada
disminuirEstrella(); // Disminuye una estrella anaranjada
aumentarEstrella()
aumentarEstrella()