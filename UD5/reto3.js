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
                    row.innerHTML = `<td><img src="${element.imagen}" alt="${element.espanol}"></td><td>${element.translation.ingles}</td><td>${element.translation.espanol}</td>`;
                    tbody.appendChild(row);
                });
            }
        } catch (error) {
            console.error(error);
        }
    });
});
