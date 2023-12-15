document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("boton").addEventListener("click", async function muestraDatos() {
        let select = document.getElementById("bando").value;
        let tbody = document.getElementById("table-tbody");
        tbody.innerHTML = '';
        try {
            let response = await fetch(`u6e5_normandia.php?bando=${select}`);
            if (!response.ok) {
                throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
            }
            let data = await response.json();
            console.log(data);

            data.forEach(element => {
                let row = document.createElement("tr");
                let img = document.createElement("img");
                img.classList.add('nombreDeTuClase');

                img.src = "img/"+element.imagen;
                img.alt = element.nombre;

                let celda1 = document.createElement("td");
                let celda2 = document.createElement("td");
                let celda3 = document.createElement("td");

                celda1.appendChild(img);
                celda2.innerHTML = element.nombre;
                celda3.innerHTML = element.descripcion;

                row.appendChild(celda1);
                row.appendChild(celda2);
                row.appendChild(celda3);

                tbody.appendChild(row);
            });
        } catch (error) {
            console.error(error);
        }
    });
});