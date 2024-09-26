<!doctype html>
<html lang = "en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<section>
    <h1>
        <center>Ingrese datos del usuario </center>
        <form action="php\registrar.php" method="post">
            <center>
        <br>
        <br>
     <input type="text" name="nombre" placeholder="ingrese su nombre" required>
     <br>
     <input type="text" name="apellido" placeholder="ingrese su apellido" required>
     <br>
     <input type="email" name="correo" placeholder="ingrese su correo" required>
     <br>
     <input type="text" name="usuario" placeholder="ingrese su usuario" required>
     <br>
     <input type="password" name="password" placeholder="ingrese su contraseña" required>
     <br>
     <br>
     <input type="password" name="password2" placeholder="Repetir contraseña" required>
     <br>
     <input type="number" name="telefono" placeholder="ingrese su numero telefonico" required>
     <br>

     <br>
     <h4>ingrese su fecha de nacimiento</h4>
     <input type="date" name="fechanacimiento" placeholder="ingrese su fecha de nacimiento" required>
     <br>

     <br>
     <input type="time" name="tiempo" placeholder="ingrese la hora actual" required>
     <br>

     <br>
     <input type="text" name="pais" placeholder="pais en el que se encuentra" required>
    
     <br>
     <input type="text" name="ciudad" placeholder="ingrese su ciudad" required>
     <br>

     <br>
     <input type="text" name="color" placeholder="dijite su color favorito" required>
     <br>

     <br>
     <input type="text" name="sexo" placeholder="ingrese su sexo" required>
     <br>

     <br>
     <input type="text" name="carrera" placeholder="ingrese su carrera universitaria" required>
     <br>
     
     <button> registrarse </button>
     <br>
</center>
    </form>
</h1>

<body>
</body>
</html>