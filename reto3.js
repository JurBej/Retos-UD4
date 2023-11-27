/**
 * Método que añade Event Listener de tipo click a cada boton y le asigna que función deberá evaluar
 */
const iniciar = () => {
    document.getElementById("btn-fecha").addEventListener("click", validaFecha);
    document.getElementById("btn-cocinero").addEventListener("click", validaCocinero);
    document.getElementById("btn-destinatario").addEventListener("click", validaDestinatario);
    document.getElementById("btn-gramos").addEventListener("click", validaGramos);
    document.getElementById("btn-composicion").addEventListener("click", validaComposicion);
    document.getElementById("btn-numCuenta").addEventListener("click", validaNumCuenta);
}

window.addEventListener('load', iniciar);

/**
 * Método que valida la fecha y hora introducida en su input mediante regex.
 * Si es correcto el formato, muestra tick verde, sino señal roja.
 */
const validaFecha = () => {
    let fecha = document.getElementById("fecha").value;

    let fechaPartida = fecha.split(" ");

    if (fechaPartida.length === 2) {
        let dateFinalPartido = fechaPartida[0].split("/");
        let dia = parseInt(dateFinalPartido[0], 10);
        let mes = parseInt(dateFinalPartido[1], 10);
        
        let horaPartida = fechaPartida[1].split(":");
        let horas = parseInt(horaPartida[0], 10);
        let min = parseInt(horaPartida[1], 10);

        if (/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}\s[0-9]{2}\:[0-9]{2}$/.test(fecha) && dia<32 && mes<13 && horas<24 && min<60) {
            document.getElementById("span-fecha").innerHTML = "✅";
        } else {
            document.getElementById("span-fecha").innerHTML = "🛑";
        }
    } else {
        document.getElementById("span-fecha").innerHTML = "🛑";
    }
}

/**
 * Método que valida al cocinero introducido en su input mediante regex.
 * Si es correcto el formato muestra tick verde, sino señal roja.
 */
const validaCocinero = () => {
    let cocinero = document.getElementById("cocinero").value;

    if (/^[A-Z]{2}[.,;-_$+?|][0-9]{4}$/.test(cocinero)) {
        document.getElementById("span-cocinero").innerHTML = "✅";
    } else {
        document.getElementById("span-cocinero").innerHTML = "🛑";
    }
}

/**
 * Método que valida al destinatario introducido en su input mediante regex.
 * Si es correcto el formato muestra tick verde, sino señal roja.
 */
const validaDestinatario = () => {
    let destinatario = document.getElementById("destinatario").value;

    if (/^[A-Z]{2,3}\_[a-zA-Z]+\:[0-9]{4}$/.test(destinatario)) {
        document.getElementById("span-destinatario").innerHTML = "✅";
    } else {
        document.getElementById("span-destinatario").innerHTML = "🛑";
    }
}

/**
 * Método que valida los gramos introducidos en su input mediante regex.
 * Si es correcto el formato muestra tick verde, sino señal roja.
 */
const validaGramos = () => {
    let gramos = document.getElementById("gramos").value;
    let gramosNum = parseInt(gramos, 10);

    if (/^[0-9]{4}$/.test(gramos) && gramosNum>999 && gramosNum<5001) {
        document.getElementById("span-gramos").innerHTML = "✅";
    } else {
        document.getElementById("span-gramos").innerHTML = "🛑";
    }
}

/**
 * Método que valida la composicion introducida en su input mediante regex.
 * Si es correcto el formato muestra tick verde, sino señal roja.
 */
const validaComposicion = () => {
    let composicion = document.getElementById("composicion").value;

    if (/^[0-9]+[gG][a-zA-Z]{1,2}[0-9]?[a-zA-Z]{1,2}[0-9]?$/.test(composicion)) {
        document.getElementById("span-composicion").innerHTML = "✅";
    } else {
        document.getElementById("span-composicion").innerHTML = "🛑";
    }
}

/**
 * Método que valida el numero de cuenta introducido en su input mediante regex.
 * Si es correcto el formato muestra tick verde, sino señal roja.
 */
const validaNumCuenta = () => {
    let numCuenta = document.getElementById("numCuenta").value;
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (/^[A-Z]{2}[0-9]{2}\-[0-9]{12}\-[0-9]{2}$/.test(numCuenta)) {
        //Variables para antes del primer guion
        let letra1Pos = letras.indexOf(numCuenta[0]) + 1;
        let letra2Pos = letras.indexOf(numCuenta[1]) + 1;
        let sumaLetras = letra1Pos + letra2Pos < 10 ? "0"+ (letra1Pos + letra2Pos) : letra1Pos + letra2Pos;
        let sumaPrimeros2DigitosLeidos = parseInt(numCuenta[2], 10) + parseInt(numCuenta[3], 10);
        let digitosFormateado = sumaPrimeros2DigitosLeidos<10 ? "0"+sumaPrimeros2DigitosLeidos : sumaPrimeros2DigitosLeidos;

        //Variables para digitos de cuenta y de control
        let sumaPrimeros6Digitos = parseInt(numCuenta[5], 10) + parseInt(numCuenta[6], 10) + parseInt(numCuenta[7], 10) + parseInt(numCuenta[8], 10) + parseInt(numCuenta[9], 10) + parseInt(numCuenta[10], 10);
        let sumaSegundos6Digitos = parseInt(numCuenta[11], 10) + parseInt(numCuenta[12], 10) + parseInt(numCuenta[13], 10) + parseInt(numCuenta[14], 10) + parseInt(numCuenta[15], 10) + parseInt(numCuenta[16], 10);
        let parteEnteraPrimeros6 = Math.floor(sumaPrimeros6Digitos/6).toString();
        let parteEnteraSegundos6 = Math.floor(sumaSegundos6Digitos/6).toString();
        let digitosLeidos = numCuenta[numCuenta.length-2] + numCuenta[numCuenta.length-1]
        let digitosCorrectos = parteEnteraPrimeros6+parteEnteraSegundos6;

        if (sumaLetras == digitosFormateado && digitosLeidos == digitosCorrectos) {
            document.getElementById("span-numCuenta").innerHTML = "✅";
        } else {
            document.getElementById("span-numCuenta").innerHTML = "🛑";
        }
    } else {
        document.getElementById("span-numCuenta").innerHTML = "🛑";
    }
}