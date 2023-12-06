<?php
header('Access-Control-Allow-Origin: *');

$elemento = isset($_REQUEST['elemento']) ? $_REQUEST['elemento'] : '';

if (!empty($elemento)) {
    // Obtener el JSON correspondiente según la opción seleccionada
    $jsonFile = $elemento . '.json';
    
    if (file_exists($jsonFile)) {
        $jsonContent = file_get_contents($jsonFile);

        // Enviar el JSON al cliente
        header('Content-Type: application/json');
        echo $jsonContent;
    } else {
        // Manejar el caso donde el archivo JSON no existe
        echo json_encode(['error' => 'Archivo JSON no encontrado.']);
    }
} else {
    // Manejar el caso donde no se proporciona un valor para 'elemento'
    echo json_encode(['error' => 'No se proporcionó un valor para "elemento".']);
}
?>
