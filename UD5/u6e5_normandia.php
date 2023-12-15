<?php
header("Content-Type: application/json; charset=UTF-8");

$bando = $_GET['bando'];
$bando = strtolower($bando);

//Definimos los datos de conexión
$servidor = "localhost";
$usuario = "root";
$pass = "";
$bbdd = "normandia";

//Creamos la conexión
$conn = mysqli_connect($servidor, $usuario, $pass, $bbdd);

//Comprobamos la conexión
$sql = "SELECT * FROM armas WHERE bando=$bando";
$result = $conn->query($sql);

// Verificamos si hay resultados
if ($result && $result->num_rows > 0) {
    // Creamos el array de datos y lo devolvemos en formato JSON
    echo json_encode(iterator_to_array($result));
} else {
    // No hay resultados, devolvemos un mensaje personalizado
    echo json_encode(['error' => 'No existen referencias']);
}
?>