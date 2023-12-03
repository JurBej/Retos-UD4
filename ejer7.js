/**
 * Función que se ejecuta tras cargar el HTML. Asigna los eventos a los elementos que los contienen
 */
const inicio = () => {
    document.getElementById("enviar").addEventListener("click", recorrer);
}

window.addEventListener("load", inicio);

let txt;
let cont;

/**
 * Comprueba los elementos que tiene el formulario, recorriéndolos uno por uno
 */
const recorrer = () => {
    txt = "";
    cont = 0;
    let hijos = document.getElementById("miFormulario").childNodes;
    //Recorremos todos los hijos del formulario y comprobamos uno a uno
    for(let i=0; i<hijos.length; i++){
        comprobar(hijos[i]);
    }
    //Añadimos el texto recopilado en el elemento info
    document.getElementById("info").innerHTML += txt;
}

/**
  * Revisa el elemento pasado por parámetro y comprueba sus valores.
  */
const comprobar = (elemento) => {
    let tipo = elemento.nodeType; //Comprobamos el nombre del elemento    
    if (tipo == 8){ //Es un comentario
        cont++; 
        txt += "<br/>"+cont+" : "+elemento.nodeName+" "+elemento.textContent;
    } else if (tipo == 1){
        cont++;

        //Estas comprobaciones nos sirven para asignar "Vacía" o "Vacío" a la clase o al identificador, para que muestre algo 
        if (elemento.className) clase = elemento.className;
        else clase ="Vacía";
        if (elemento.id) id = elemento.id;
        else id= "Vacío";
        switch (elemento.nodeName){
        	//Podríamos tratar de extraer las líneas de texto en una función, pero cada una es diferente.
            case ("INPUT"):
                txt += "<br/>"+cont+": "+ elemento.nodeName+" | Tipo:"+ elemento.type+" | Name: "+elemento.name+" | Clase: "+clase+" | Id: "+id+" | Valor: "+elemento.value;
                break;
            case ("LABEL"):
                txt += "<br/>"+cont+": "+elemento.nodeName+" | For: "+elemento.htmlFor+" | Clase: "+clase+" | Id: "+id+" | Valor: "+elemento.textContent;
                break;  
            case ("BUTTON"):
                txt += "<br/>"+cont+": "+ elemento.nodeName+" |  Name: "+elemento.name+" | Clase: "+clase+" | Id: "+id+" | Valor: "+elemento.value;
                break;
            case ("TEXTAREA"):
                txt += "<br/>"+cont+": "+ elemento.nodeName+" |  Name: "+elemento.name+" | Clase: "+clase+" | Id: "+id+" | Contenido: "+elemento.textContent;
                break;
            case ("SELECT"):
                txt += "<br/>"+cont+": "+ elemento.nodeName+" |  Name: "+elemento.name+" | Clase: "+clase+" | Id: "+id;
                let opciones = elemento.children;
                for (let i = 0; i<opciones.length; i++){
                    txt += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;"+cont+"."+i+": "+ opciones[i].nodeName+" |  Contenido: "+opciones[i].textContent;
                }
                break;
            case ("BR"): //Podemos extraerlo también como elemento del formulario; es de tipo 1 porque es un elemento.
                txt += "<br/>"+cont+": "+elemento.nodeName;
                break;
        }
    }
}