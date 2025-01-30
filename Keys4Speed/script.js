let puntuacionMaxima = 0;
let contador = 0;
let aciertos = 0;
let fallos = 0;
let tiempoTotal = 30;
let juego = false;
let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Ñ"];
let letraAleatoria = letras[(Math.floor(Math.random() * 27))];
document.getElementById("letra").innerHTML = letraAleatoria;

document.addEventListener("keydown", function (event) {
    if (juego) {
        if (event.key === letraAleatoria.toLowerCase()) {
            if (letraAleatoria === "Ñ") {
                contador += 10;
            } else if (letraAleatoria === "A" || letraAleatoria === "E" || letraAleatoria === "I"
                || letraAleatoria === "O" || letraAleatoria === "U") {
                contador++;
                tiempoTotal++;
            } else {
                contador++;
            }
            aciertos++;
            letraAleatoria = letras[(Math.floor(Math.random() * 27))];
            document.getElementById("letra").innerHTML = letraAleatoria;
            document.getElementById("contador").innerHTML = contador;
            document.getElementById("aciertos").innerHTML = aciertos;
        } else if (contador > 0) {
            contador--;
            fallos++;
            document.getElementById("contador").innerHTML = contador;
            document.getElementById("fallos").innerHTML = fallos;
        }
    }
});

document.getElementById("parar").addEventListener("click", () => {
    tiempoTotal = 0;
    juego = false;
});

document.getElementById("empezar").addEventListener("click", () => {
    if (!juego) {
        letraAleatoria = letras[(Math.floor(Math.random() * 27))];
        document.getElementById("letra").innerHTML = letraAleatoria;
        contador = 0;
        aciertos = 0;
        fallos = 0;
        document.getElementById("contador").innerHTML = contador;
        document.getElementById("aciertos").innerHTML = aciertos;
        document.getElementById("fallos").innerHTML = fallos;
        tiempoTotal = 30;
        temporizador();
    }
});

function temporizador() {
    juego = true;
    document.getElementById('temporizador').innerHTML = tiempoTotal;
    if (tiempoTotal == 0) {
        juego = false;
        if (puntuacionMaxima < contador) {
            puntuacionMaxima = contador;
            document.getElementById("max").innerHTML = puntuacionMaxima;
        }
    } else {
        tiempoTotal -= 1;
        setTimeout("temporizador()", 1000);
    }
}
