/**
 * Añadimos los eventos a los elementos que corresponde
 */
const inicio = () => {
    document.getElementById("primera").addEventListener("click", ver);
    document.getElementById("champions").addEventListener("click", ver);
    document.getElementById("segunda").addEventListener("click", ver);
    document.getElementById("segundaB").addEventListener("click", ver);
    document.getElementById("tercera").addEventListener("click", ver);
    document.getElementById("borrar").addEventListener("click", eliminaClaseBorde);
    let imagenes = document.getElementsByTagName("img");
    for (let i = 0; i<imagenes.length; i++){
        imagenes[i].addEventListener("mouseover", info);
    }
}

window.addEventListener("load", inicio);

/**
 * La función info recibe por parámetro el elemento que ha recibido el mouseover y muestra la información de cada escudo
 * @param {object} event 
 */
const info = (event) => {
    let txt = "";
    switch (event.target.alt){
        case("Escudo Alondras"): txt = "Este es el escudo del Alondras"; break;
        case("Escudo Barcelona"): txt = "Este es el escudo del Barcelona"; break;
        case("Escudo Betis"): txt = "Este es el escudo del Betis"; break;
        case("Escudo Malaga"): txt = "Este es el escudo del Málaga"; break;
        case("Escudo Ibiza"): txt = "Este es el escudo del Ibiza"; break;
        case("Escudo Madrid"): txt = "Este es el escudo del Real Madrid"; break;
        case("Escudo Ourense"): txt = "Este es el escudo del Ourense"; break;
        case("Escudo Racing"): txt = "Este es el escudo del Racing"; break;
        case("Escudo Sporting"): txt = "Este es el escudo del Sporting"; break;
        case("Escudo Zaragoza"): txt = "Este es el escudo del Zaragoza"; break;
    }
    document.getElementById("info").getElementsByTagName("p")[0].innerHTML = txt;
}

/**
 * Método que elimina la clase borde de los elementos que la contienen
 */
const eliminaClaseBorde = () => {
    let imagenes = document.getElementsByTagName("img");
    for (let i=0; i<imagenes.length; i++){
        //Si algún elemento no tiene el texto "borde" no lo cambia
        imagenes[i].className = imagenes[i].className.replace(" borde","");
    }
}

/**
 * Método que recibe por parámetro el elemento que la pulsó y le asigna el borde a los elementos correspondientes
 * @param {object} event 
 */
const ver = (event) => {
    eliminaClaseBorde();
    let seleccion = document.getElementsByClassName(event.target.id);
    for(let i=0; i<seleccion.length; i++){
        seleccion[i].className += " borde";
    }
}