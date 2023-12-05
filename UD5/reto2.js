const arrayNombres = ['Bad Bobs Temple Bar-35', 'Porterhouse', 'Zaytoon-15 Parliament St', "Lundy Foot's"];
let contador = 0;

/**
 * Método que realiza una solicitud asíncrona mediante async/await, utilizando fetch y la solicitud se realiza al fichero bares.php
 * Obtiene los datos y cargará posteriormente en su llamada el nombre, dirección e imagen de cada bar.
 */
async function muestraDatos(contador) {
    try {
        let response = await fetch(`bares.php?nombre=${arrayNombres[contador]}`);

        if (!response.ok) {
            throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
        }
        
        let data = await response.text();
        let datosPartidos = data.split("#");
        document.getElementById("nombre").innerHTML = "Nombre: " + datosPartidos[0];
        document.getElementById("direccion").innerHTML = "Dirección: "+datosPartidos[1];
        document.getElementById("foto").src = datosPartidos[2];
    } catch (error) {
        console.error(error);
    }
}

/**
 * Asigno evento de click al boton de atras, al pulsarlo ira cargando el bar anterior.
 * Al llegar al primer bar y pulsar atras cargará el último.
 */
document.getElementById("atras").addEventListener("click", async function mostrarAtras () {
    contador==0 ? contador=3 : contador--;
    muestraDatos(contador);
});

/**
 * Asigno evento de click al boton de adelante, al pulsarlo ira cargando el bar posterior.
 * Al llegar al último bar y pulsar adelante cargará el primero.
 */
document.getElementById("adelante").addEventListener("click", async function mostrarAdelante () {
    contador==3 ? contador=0 : contador++;
    muestraDatos(contador);
});

/**
 * Asigno evento de tipo load para cargar el primer bar al arrancar la aplicación.
 */
window.addEventListener("load", async function mostrarCero () {
    muestraDatos(contador);
});