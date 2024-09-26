<?php

$NAMEHOSTDB = 'localhost';
$PASSWORDDB = '';
$USERNAMEDB = 'root';
$BDNAME = 'productos';

$conectar = mysqli_connect($NAMEHOSTDB,$USERNAMEDB,$PASSWORDDB,$BDNAME);

if (!$conectar) {
   echo"Conneccion Erronea";
}
else{
   
}



?>