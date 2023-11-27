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

/**
 * Método que actua como escuchador, si existen 2 cartas seleccionadas se invoca al método evaluarCartas pasado 1seg
 * @param {object} event 
 * @returns Si seleccionamos una carta previamente seleccionada o el número de cartas seleccionadas es mayor o igual que 2
 * se realiza un return vacio, es decir, saldrá del método sin realizar nada.
 */
const escuchador = (event) => {
    let carta = event.target;

    //Controlamos que no se pueda seleccionar una carta previamente seleccionada ni más de 2 cartas a la vez
    if (cartasSeleccionadas.includes(carta) || cartasSeleccionadas.length >= 2) {
        return;
    }

    //Obtenemos el íncide al cual tendremos que acceder dentro del arrayFotos y cambiamos el src para mostrar la fruta seleccionada
    let indice = parseInt(carta.id.substring(carta.id.length - 1), 10) - 1;
    carta.src = arrayFotos[indice];
    cartasSeleccionadas.push(carta);

    if (cartasSeleccionadas.length === 2) {
        movimientos+=2;
        setTimeout(evaluarCartas, 1000);
    }
}

/**
 * Método que evalua si 2 cartas son iguales, si son iguales se aplica un borde y se elimina su Event Listener.
 * Si no son iguales volvemos a mostrar la carta boca bajo.
 */
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

//Bucle for para añadir un Event Listener de tipo click a cada carta
for (let i = 1; i <= 8; i++) {
    let carta = document.getElementById("carta" + i);
    carta.addEventListener("click", escuchador);
}