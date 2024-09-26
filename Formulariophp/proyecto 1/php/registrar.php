<?php

include_once 'C:\xampp\htdocs\Construsccion web dia\proyecto 1\php\conexion.php';

$nombre =$_REQUEST['nombre'];
$apellido =$_REQUEST['apellido'];
$email =$_REQUEST['correo'];
$usuario =$_REQUEST['usuario'];
$password =$_REQUEST['password'];
$telfono =$_REQUEST['telefono'];
$fecha =$_REQUEST['fechanacimiento'];
$tiempo =$_REQUEST['tiempo'];
$pais =$_REQUEST['pais'];
$color =$_REQUEST['color'];
$ciudad =$_REQUEST['ciudad'];
$sexo =$_REQUEST['sexo'];
$carrera =$_REQUEST['carrera'];
$password2 =$_REQUEST['password2'];

if ($password == $password2) {
    

$validar = "SELECT * FROM `datos` WHERE `Usuario`='$usuario'";
$resultado = mysqli_query($conectar, $validar);
$numerousuario = mysqli_num_rows($resultado);

$validarcor = "SELECT * FROM `datos` WHERE `Correo`='$email'";
$resultadocor = mysqli_query($conectar, $validarcor);
$numerocor = mysqli_num_rows($resultadocor);

if ($numerocor >0) {
    echo '<script>alert("Correo ya existente")</script>';
}else {

if ($numerousuario >0) {
    echo '<script>alert("Usuario Invalido")</script>';
}else{

$insertar = "INSERT INTO `datos`(`Nombre`, `Apellido`, `Correo`, `Usuario`, `Password`, `Telefono`, `fechanacimiento`, `Tiempo`, `Pais`, `Ciudad`, `Color`, `Sexo`, `Carrera`) VALUES ('$nombre','@$apellido','$email','$usuario','$password','$telfono','$fecha','$tiempo','$pais','$ciudad','$color','$sexo','$carrera')";


$ejecutar = mysqli_query($conectar, $insertar);

if (!$ejecutar) {
    echo '<script>alert("no se pudo insetar usuario")</script>';
}
else{
    echo '<script>alert("Se ha insertado el usario")</script)';
}
}
}
}else {
    echo '<script>alert("Las contraseñas no coinciden")</script>';
    //header("location:../formulariousuario.php");
    header( "refresh:1;URL=../formulariousuario.php" );
}

mysqli_close($conectar);

?>