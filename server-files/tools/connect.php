<?php

// Include the file containing database connection information
require("dbinfo.php");

try {
    // Attempt to establish a connection to the database using PDO
    $db = new PDO(DB_DSN, DB_USER, DB_PASS);
} catch (PDOException $e) {
    // If an exception occurs during the connection attempt, print an error message and terminate the script
    print "Error: " . $e->getMessage();
    die();
}

?>
