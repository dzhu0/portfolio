<?php

require "tools/connect.php";

// Test without these headers on actual server
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

try {
    $query = "SELECT * FROM projects";

    $statement = $db->prepare($query);
    $statement->execute();

    $portfolio = $statement->fetchAll(PDO::FETCH_ASSOC);

    $data = [
        "success" => true,
        "portfolio" => $portfolio
    ];
} catch (PDOException $e) {
    $data = [
        "success" => false,
        "error" => $e->getMessage()
    ];
}

header("Content-Type: application/json; charset=utf-8");
echo json_encode($data);

?>
