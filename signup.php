<?php

$userName = $_POST['name'];
$emailId = $_POST['email'];//The user name nd password to be extracted from the login page .
$passWord= $_POST['pass'];

 $conn =mysqli_connect("localhost", "root", "" , "SandSdb");//last parameter is the name of the data base 

 if(!$conn){
 	die("Connection Failed:" . mysqli_connect_error());
 }

 $sql = "INSERT INTO snsuser (username , email , password )
  VALUES ('$userName' ,'$emailId' , '$passWord' )"; //The names of the columns mentioned in the data base.(username,password)
 $result = mysqli_query($conn,$sql);

echo "GOOD JOB..INSERTED..........";//verification line


    ?>

<form >
   <input type="submit"  name="HOME PAGE" onclick="SautenSimmer.html"/> 
</form>
