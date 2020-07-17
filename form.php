<?php 
include_once("index.html");

$email = $_POST['email'];

$url = getenv('JAWSDB_URL');
$dbparts = parse_url($url);

$hostname = $dbparts['host'];
$username = $dbparts['user'];
$password = $dbparts['pass'];
$database = ltrim($dbparts['path'],'/');


// Create connection
$conn = new mysqli($hostname, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else {
    $stmt = $conn->prepare("insert into subscribers(email) values(?)");
		$stmt->bind_param("s", $email);
		$execval = $stmt->execute();
		echo "Registration successfully...";
		$stmt->close();
    // Close the connection
    $conn->close();
}


?>