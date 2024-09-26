<?php

$NAMEHOSTDB = 'localhost';
$PASSWORDDB = '';
$USERNAMEDB = 'root';
$BDNAME = 'construccionweb';

$conectar = mysqli_connect($NAMEHOSTDB,$USERNAMEDB,$PASSWORDDB,$BDNAME);

if (!$conectar) {
   echo"Conneccion Erronea";
}
else{
    echo"Coneccion Exitosa";
}



?>