<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Get JSON data
$data = json_decode(file_get_contents('php://input'), true);

// Validate data
if (!isset($data['name']) || !isset($data['email']) || !isset($data['recommendation'])) {
  http_response_code(400);
  echo json_encode(['error' => 'Missing required fields']);
  exit;
}

// Connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "portfolio";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(['error' => 'Database connection failed']);
  exit;
}

// Prepare and execute SQL statement
$stmt = $conn->prepare("INSERT INTO recommendations (name, email, recommendation, created_at) VALUES (?, ?, ?, NOW())");
$stmt->bind_param("sss", $data['name'], $data['email'], $data['recommendation']);

if ($stmt->execute()) {
  echo json_encode(['message' => 'Recommendation saved successfully!']);
} else {
  http_response_code(500);
  echo json_encode(['error' => 'Error saving recommendation']);
}

$stmt->close();
$conn->close();
?>