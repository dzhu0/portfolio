<?php

// Include the file responsible for database connection
require "tools/connect.php";

// Test headers for cross-origin resource sharing (CORS).
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

try {
    // SQL query to select all projects from the "projects" table
    $query = "SELECT * FROM projects";

    $statement = $db->prepare($query);
    $statement->execute();

    // Fetch all rows from the result set as an associative array
    $portfolio = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Prepare data array for JSON response on success
    $data = [
        "success" => true,
        "portfolio" => $portfolio
    ];
} catch (PDOException $e) {
    // Prepare data array for JSON response on failure with error message
    $data = [
        "success" => false,
        "error" => $e->getMessage()
    ];
}

// Set the content type header for JSON response
header("Content-Type: application/json; charset=utf-8");

// Output JSON-encoded data
echo json_encode($data);

?>
