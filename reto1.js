const arrayFotos = ['img/fresa.jpg', 'img/limon.jpg', 'img/mango.jpg', 'img/manzana.png', 'img/fresa.jpg', 'img/limon.jpg', 'img/mango.jpg', 'img/manzana.png'];

/**
 * Este método mezcla las cartas en función del número aleatorio generado, 
 * si es positivo reordena los elementos de manera que el elemento actual debería tener un índice mayor que el siguiente,
 * si es negativo viceversa.
 * @param {array} array 
 */
const mezclarCartas = (array) => {
    array.sort(() => Math.random() - 0.5);
}
mezclarCartas(arrayFotos);

let cartasSeleccionadas = [];
let aciertos = 0;
let movimientos = 0;

const escuchador = (event) => {
    let carta = event.target;

    if (cartasSeleccionadas.includes(carta) || cartasSeleccionadas.length >= 2) {
        return;
    }

    let indice = parseInt(carta.id.substring(carta.id.length - 1), 10) - 1;
    carta.src = arrayFotos[indice];
    cartasSeleccionadas.push(carta);

    if (cartasSeleccionadas.length === 2) {
        movimientos+=2;
        setTimeout(evaluarCartas, 1000);
    }
}

const evaluarCartas = () => {
    let carta1 = cartasSeleccionadas[0];
    let carta2 = cartasSeleccionadas[1];

    if (carta1.src === carta2.src) {
        aciertos++;
        carta1.style.border = "2px solid green";
        carta2.style.border = "2px solid green";
        carta1.removeEventListener("click", escuchador);
        carta2.removeEventListener("click", escuchador);
    } else {
        carta1.src = "img/cartaInicial.jfif";
        carta2.src = "img/cartaInicial.jfif";
    }

    cartasSeleccionadas = [];

    document.getElementById("aciertos").innerHTML = "Aciertos: "+aciertos;
    document.getElementById("movimientos").innerHTML = "Movimientos: "+movimientos;

    if (aciertos === 4) {
        alert("¡Has ganado!");
    }
}

for (let i = 1; i <= 8; i++) {
    let carta = document.getElementById("carta" + i);
    carta.addEventListener("click", escuchador);
}