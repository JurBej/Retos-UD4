<?php
 //Array de nombres
$a = array("Bad Bobs Temple Bar-35#37 Essex St E, Temple Bar, Dublin 2, D02 Y891, Irlanda#https://lh5.googleusercontent.com/p/AF1QipPvHL_dvdk9QZ3O3ei0mzoO8OQfB9Kn7a_ANj48=w480-h240-k-no",
"Porterhouse#16-18 Parliament St, Temple Bar, Dublin 2, D02 VR94, Irlanda#https://lh5.googleusercontent.com/p/AF1QipOKoLPu6uyvQ-ggVkP1YtlcCX1UEDaxrOUIQurP=w408-h271-k-no",
"Zaytoon-15 Parliament St# Temple Bar, Dublin, D02 FW60, Irlanda#https://lh5.googleusercontent.com/p/AF1QipPfH134sRQ5pFHC56tk4gwAnkvPSDDCcAjKmNAJ=w408-h307-k-no",
"Lundy Foot's#Lundy Foot's Bar and Restaurant, Essex Gate, D2, Dublin, Irlanda#https://lh5.googleusercontent.com/p/AF1QipMjK9Tw6aRwvIIDYqTJPvsGwa6RArOWuaoZmNdG=w408-h272-k-no",
);

//Tomamos el valor del input procedente de la URL
$nombre = $_REQUEST["nombre"];
$sugerencia = "";

if ($nombre!==""){
    $nombre = strtolower($nombre); //Pasamos el nombre a minúsculas
    $long = strlen($nombre);
    
    foreach($a as $nom){//Cada elemento del array lo pasa a $nom en cada iteración
        if(stristr($nombre, substr($nom, 0, $long))){ //Si coincide la cadena pasada con los primeros caracteres de algún elemento del array
            if($sugerencia === ""){ //Si no hay texto en sugerencia
                $sugerencia = $nom;
            }else{
                $sugerencia = "$sugerencia, $nom";
            }
        }
    }
}
/*if ($sugerencia === "") echo "No hay sugerencias";
else echo $sugerencia;*/
echo ($sugerencia ==="") ? "No hay sugerencias" : $sugerencia;
?>