<?php

// get value of email on submit
  $email = $_POST['email'];

  $conn = new mysqli('localhost','root','','earlyaccess');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into subscribers(email) values(?)");
		$stmt->bind_param("s", $email);
		$execval = $stmt->execute();
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}

?>