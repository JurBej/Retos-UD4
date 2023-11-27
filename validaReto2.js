let id = document.getElementById("id");
let nombre = document.getElementById("nombre");
let fechaNac = document.getElementById("fechaNac");
let email = document.getElementById("email");
let tlf = document.getElementById("tlf");
let edad = document.getElementById("edad");
let ski = document.getElementById("ski");
let numeroSocio = document.getElementById("numeroSocio");
let categoria = document.querySelector('input[name="categoria"]:checked');

/**
 * Método que valida los campos correspondientes mediante expresiones regulares.
 * Si un campo no valida la regex se mostrará al lado el formato que debe cumplir en color rojo y el input tendrá un borde rojo.
 * @returns Devulve true si se validan todos los campos o false si al menos uno de ellos no es correcto.
 */
const validarFormulario = () => {
    let enviarBoolean = true;
    let fechaPartida = fechaNac.value.split("/");

    if (!(/^[A-Za-z]\d{8}[A-Za-z]$/.test(id.value))) {
        document.getElementById("errorIdentificador").innerHTML = "El ID es obligatorio y debe tener 1 letra, 8 cifras y 1 letra, en ese orden";
        enviarBoolean= false;
        document.getElementById("id").style.border = '1px solid red';
    } else {
        document.getElementById("errorIdentificador").innerHTML = "";
        document.getElementById("id").style.border = '';
    }

    if (!/^[A-Za-z]{1,50}/.test(nombre.value)) {
        document.getElementById("errorNombre").innerHTML = "Nombre y apellidos son obligatorios y debe tener de 5 a 50 caracteres";
        enviarBoolean= false;
        document.getElementById("nombre").style.border = '1px solid red';
    } else {
        document.getElementById("errorNombre").innerHTML = "";
        document.getElementById("nombre").style.border = '';
    }

    if (!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(fechaNac.value) || parseInt(fechaPartida[0], 10)>31 || parseInt(fechaPartida[1], 10)>12) {
        document.getElementById("errorFechaNac").innerHTML = "La fecha debe cumplir formato DD/MM/YYYY, los días no pueden ser mayores a 31 ni el mes mayor a 12";
        enviarBoolean= false;
        document.getElementById("fechaNac").style.border = '1px solid red';
    } else {
        document.getElementById("errorFechaNac").innerHTML = "";
        document.getElementById("fechaNac").style.border = '';
    }

    if (!/^[A-Za-z0-9._-]{1,20}@[A-Za-z]{1,20}\.[A-Za-z]{2,3}$/.test(email.value)) {
        document.getElementById("errorEmail").innerHTML = "El email debe cumplir formato varios caracteres (letras, números, puntos o guiones altos o bajos, 20 máximo) seguido de arroba, letras (20 máximo), punto (1), y 2 o 3 letras."
        enviarBoolean= false;
        document.getElementById("email").style.border = '1px solid red';
    } else {
        document.getElementById("errorEmail").innerHTML = "";
        document.getElementById("email").style.border = '';
    }

    if (!/^\+[0-9]{2,3}\-[0-9]{9}$/.test(tlf.value)) {
        document.getElementById("errorTlf").innerHTML = "El teléfono debe cumplir formato + y dos o tres cifras seguido de guión y 9 cifras.";
        enviarBoolean= false;
        document.getElementById("tlf").style.border = '1px solid red';
    } else {
        document.getElementById("errorTlf").innerHTML = "";
        document.getElementById("tlf").style.border = '';
    }

    if (ski.checked) {
        if (!/^[0-9]{5}/.test(numeroSocio.value) || numeroSocio.value<10000) {
            document.getElementById("errorNumeroSocio").innerHTML = "El numero de socio debe ser un número de 10000 a 99999";
            enviarBoolean= false;
            document.getElementById("numeroSocio").style.border = '1px solid red';
        } else {
            document.getElementById("errorNumeroSocio").innerHTML = "";
            document.getElementById("numeroSocio").style.border = '';
        }

        if (!categoria) {
            document.getElementById("errorCategoria").innerHTML = "Selecciona una categoria";
            enviarBoolean= false;
        } else {
            document.getElementById("errorCategoria").innerHTML = "";
        }
    }

    return enviarBoolean;
}

/**
 * Método que comprueba si el checkbox ski está marcado o no, 
 * si está marcado muestra los campos que contiene el contenedor camposClubSki, sino los oculta.
 */
const mostrarCamposClubSki = () => {
    let camposClub = document.getElementById("camposClubSki");
    let checkboxClubSki = document.getElementById("ski");

    if (checkboxClubSki.checked) {
        camposClub.style.display = "block";
    } else {
        camposClub.style.display = "none";
    }
}

/* Le añadimos al formulario un evento de tipo submit. Prevenimos el envio por defecto y
en caso de que el formulario sea validado se realiza el envio del mismo */
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validarFormulario()) {
        alert("Formulario enviado con éxito!");
        this.submit();
    }
});

//Añadimos al checkbox ski un evento de tipo change que evaluará el método mostrarCamposClubSki para mostrar o no ciertos campos
document.getElementById("ski").addEventListener("change", mostrarCamposClubSki);