/**
 * Método para generar una carta con los valores introducidos en los inputs
 */
const generarCarta = () => {
    let titulo = document.getElementById("titulo").value;
    let imagen = document.getElementById("imagen").value;
    let descripcion = document.getElementById("descripcion").value;

    let divCarta = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerHTML = titulo;
    let img = document.createElement("img");
    img.src = imagen;
    img.alt = titulo;
    let parrafo = document.createElement("p");
    parrafo.innerHTML = descripcion;
    divCarta.appendChild(h2);
    divCarta.appendChild(img);
    divCarta.appendChild(parrafo);
    divCarta.className = 'carta';

    document.getElementById('cartaGenerada').appendChild(divCarta);
    document.getElementById('cartaGenerada').style.display = 'block';
    document.getElementById("formulario").reset();
}

//Añado evento de tipo click al botón para generar la carta al pulsarlo
document.getElementById("cromo").addEventListener("click", generarCarta);