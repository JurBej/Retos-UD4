/**
 * Al cargar el DOM añado un evento de tipo change al select del HTML con una función que realiza una solicitud asíncrona mediante async/await y utilizando fetch.
 * Cada vez que se seleccione una opción mostrará sus datos correspondientes en una tabla.
 * Uso como servidor un fichero PHP que mandará al cliente el JSON correspondiente en función de la opción seleccionada.
 */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("elemento").addEventListener("change", async function muestraDatos() {
        let select = document.getElementById("elemento").value;
        let tbody = document.getElementById("table-tbody");
        tbody.innerHTML = '';
        try {
            let response = await fetch(`vocabulario.php?elemento=${select}`);
            if (!response.ok) {
                throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
            }
            let data = await response.json();

            //Controlo si data es un array, si no lo es, es que el JSON no existe. Lo hago para controlar la opción 'Selecciona Opcion' del select.
            if (Array.isArray(data)) {
                data.forEach(element => {
                    let row = document.createElement("tr");
                    let img = document.createElement("img");

                    img.src = element.imagen;
                    img.alt = element.espanol;

                    // Añado un evento click para mostrar los nombres al hacer click en la imagen
                    img.addEventListener("click", () => {
                        // Accede a las celdas de la fila y actualiza su contenido
                        row.cells[1].innerHTML = element.translation.ingles;
                        row.cells[2].innerHTML = element.translation.espanol;
                    });

                    let celda1 = document.createElement("td");
                    let celda2 = document.createElement("td");
                    let celda3 = document.createElement("td");

                    celda1.appendChild(img);
                    celda2.innerHTML = ""; // Inicialmente vacío, se actualizará al hacer click en la imagen
                    celda3.innerHTML = ""; // Inicialmente vacío, se actualizará al hacer click en la imagen

                    row.appendChild(celda1);
                    row.appendChild(celda2);
                    row.appendChild(celda3);

                    tbody.appendChild(row);
                });
            }
        } catch (error) {
            console.error(error);
        }
    });
});
