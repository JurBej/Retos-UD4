/**
 * Asigno evento de tipo change al select del html.
 * Cada vez que se seleccione un bar distinto cargará su información correspondiente.
 * Obtendremos los datos del fichero bares.php realizando una solicitud asíncrona mediante async/await y utilizando fetch.
 */
document.getElementById("nombre").addEventListener("change", async function cargarInfo() {
    let select = document.getElementById("nombre").value;

    try {
        let response = await fetch(`bares.php?nombre=${select}`);

        if (!response.ok) {
            throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
        }
        
        let data = await response.text();
        let datosPartidos = data.split("#");
        if (datosPartidos[0] != "No hay sugerencias") {
            document.getElementById("nombreBar").innerHTML = "Nombre: " + datosPartidos[0];
            document.getElementById("direccionBar").innerHTML = "Dirección: "+datosPartidos[1];
        } else {
            document.getElementById("nombreBar").innerHTML = "No existe ninguna referencia";
            document.getElementById("direccionBar").innerHTML = "";
        }
    } catch (error) {
        console.error(error);
    }
});