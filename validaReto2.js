let id = document.getElementById("id").value;
let nombre = document.getElementById("nombre").value;
let fechaNac = document.getElementById("fechaNac").value;
let email = document.getElementById("email").value;
let tlf = document.getElementById("tlf").value;
let edad = document.getElementById("edad").value;
let ski = document.getElementById("ski").value;
let numeroSocio = document.getElementById("numeroSocio").value;
let categoria = document.querySelector('input[name="categoria"]:checked');

const validarFormulario = () => {
    let enviarBoolean = true;

    if (id === "" || !/^[A-Za-z]\d{8}[A-Za-z]$/.test(id)) {
        document.getElementById("errorIdentificador").innerHTML = "El ID es obligatorio y debe tener 1 letra, 8 cifras y 1 letra, en ese orden";
        enviarBoolean= false;
    }

    if (nombre === "" || !/^[A-Za-z]{1-50}/.test(nombre)) {
        document.getElementById("errorNombre").innerHTML = "Nombre y apellidos son obligatorios y debe tener de 5 a 50 caracteres";
        enviarBoolean= false;
    }

    if (fechaNac === "" || fechaNac !== "DD-MM-YYYY") {
        document.getElementById("errorFechaNac").innerHTML = "La fecha es obligatoria y debe cumplir formato DD-MM-YYYY";
        enviarBoolean= false;
    }

    if (!/^[A-Za-z0-9._-]{1,20}@[A-Za-z]{1,20}\.[A-Za-z]{2,3}$/.test(email)) {
        document.getElementById("errorFechaNac").innerHTML = "El email debe cumplir formato varios caracteres (letras, números, puntos o guiones altos o bajos, 20 máximo) seguido de arroba, letras (20 máximo), punto (1), y 2 o 3 letras."
        enviarBoolean= false;
    }

    if (!/^\+[0-9]{2,3}\-[0-9]{9}$/.test(tlf)) {
        document.getElementById("errorTlf").innerHTML = "El teléfono debe cumplir formato + y dos o tres cifras seguido de guión y 9 cifras.";
        enviarBoolean= false;
    }

    if (ski.checked) {
        if (!/^[0-9]{5}/.test(numeroSocio) || numeroSocio<10000) {
            document.getElementById("errorNumeroSocio").innerHTML = "El numero de socio debe ser un número de 10000 a 99999";
            enviarBoolean= false;
        }

        if (!categoria) {
            document.getElementById("errorCategoria").innerHTML = "Selecciona una categoria";
            enviarBoolean= false;
        }
    }

    return enviarBoolean;
}

const mostrarCamposClubSki = () => {
    let camposClub = document.getElementById("camposClubSki");
    let checkboxClubSki = document.getElementById("ski");

    if (checkboxClubSki.checked) {
        camposClub.style.display = "block";
    } else {
        camposClub.style.display = "none";
    }
}

document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validarFormulario()) {
        this.submit();
    }
});

document.getElementById("ski").addEventListener("change", mostrarCamposClubSki);