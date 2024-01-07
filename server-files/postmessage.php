<?php

// Include PHPMailer autoloader and mail information
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";
require "tools/mailinfo.php";

// Test headers for cross-origin resource sharing (CORS).
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

try {
    // Decode JSON data from the request body
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate input data
    switch (true) {
        case !isset($data["name"]) || empty($data["name"]):
        case !isset($data["email"]) || empty($data["email"]):
        case !isset($data["message"]) || empty($data["message"]):
            throw new Exception("Missing name, email, or message");
    }

    // Sanitize and validate individual input fields
    $name = filter_var($data["name"], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_var($data["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($data["message"], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
        throw new Exception("Invalid email");

    // Create a new PHPMailer instance for sending emails
    $mail = new PHPMailer();

    // Configure SMTP settings
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USERNAME;
    $mail->Password = SMTP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Set sender, reply-to, and recipient addresses
    $mail->setFrom($email);
    $mail->addReplyTo($email);
    $mail->addAddress(MY_EMAIL);

    // Set email subject and content
    $mail->Subject = "{$name} - New Contact Form Submission";
    $mail->isHTML(true);
    $mail->Body = "
        <html>
            <p><b>Name:</b> {$name}</p>
            <p><b>Email:</b> {$email}</p>
            <p><b>Message:</b></p>
            <p>{$message}</p>
        </html>";
    $mail->AltBody = "Name: {$name}\nEmail: {$email}\nMessage:\n{$message}";

    // Send the email
    $mail->send();

    // Prepare success response
    $res = ["success" => true];
} catch (Exception $e) {
    // Prepare error response in case of exceptions
    $res = ["success" => false, "error" => $e->getMessage()];
}

// Set the content type header for JSON response
header("Content-Type: application/json; charset=utf-8");

// Output JSON-encoded response
echo json_encode($res);

?>
