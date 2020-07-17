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
    $sql = "INSERT INTO subscribers (email) VALUES ('$email')";

    if($conn->query($sql) === true){
         echo "Submission successful";
    } else{
        echo "ERROR: Could not execute $sql. " . $mysqli->error;
    }

    // Close the connection
    $conn->close();
}


?>