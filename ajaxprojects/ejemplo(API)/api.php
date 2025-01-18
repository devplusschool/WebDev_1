<?php
// api.php

// Leer y decodificar el archivo JSON
$jsonFile = 'api.json'; // Nombre del archivo JSON
if (!file_exists($jsonFile)) {
    http_response_code(500);
    echo json_encode(["error" => "Archivo JSON no encontrado"]);
    exit;
}

$jsonData = file_get_contents($jsonFile);
$programmingLanguages = json_decode($jsonData, true);

// Obtener el parámetro de consulta
if (isset($_GET['name'])) {
    $name = strtolower($_GET['name']);
    if (array_key_exists($name, $programmingLanguages)) {
        header('Content-Type: application/json');
        echo json_encode($programmingLanguages[$name]);
    } else {
        http_response_code(404);
        echo json_encode(["error" => "Lenguaje no encontrado"]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Parámetro 'name' requerido"]);
}
?>