<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <link href="http://fonts.googleapis.com/css2?family=Roboto:wght;@400;700display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/estilos_cabecera.css">
    <link rel="stylesheet" href="css/estilos-formulario.css">
    
</head>
<body>
    <header class="cabecera">
        <div class="container logo-nav-container">
            <a href="index.html" class="logo"><img src="logo.png" alt="logo" class="imagen-logo"></a>
            <span class="menu-icon">MENU</span>
            <nav class="navigation">
                <ul>
                    <li><a href="novedades.html">Novedades</a></li> 
                    <li><a href="tienda.php">Tienda</a></li> 
                    <li><a href="registroUsuarios.html">Usuarios</a></li> 
                    <li><a href="contacto.html">Contacto</a></li> 
                    <li><a href="apadrina.html">Apadrina</a></li> 
                </ul>
            </nav>
        </div>
    </header>

    <main class="main">

        <div class="container">
            <table class="mostrar__producto-tabla">
                <thead>
                    <tr>
                        <th>Caracteristicas del producto:</th>
                        <th>Imagen del producto</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <?php
                        //Conectamos a la base de datos
                        include("conexion.php");
                        $query = "SELECT * FROM Productos";

                        $resultado = $conexion->query($query);

                        while ($fila = $resultado->fetch_assoc()){
                    // cierro php para abrir las celdas de la tabla        
                    ?>
                        <tr class="tabla__productos">
                            <td><?php echo "Nombre: " . $fila['Nombre'] . "<br>Referencia: " . $fila['Id']. "<br>Descripcion: " 
                                            . $fila['Descripcion'] . "<br>Formato: " . $fila['Formato']. "<br>Precio: " 
                                            . $fila['Precio'] . " €"; ?>
                                <!--Boton de ENVIAR-->
                                <div class="formulario__grupo formulario__grupo-btn-enviar add__tienda">
                                    <input type="submit" name="Enviar" class="formulario__btn" value="Añadir" id="Enviar" >
                                </div>
                            </td>
                            <td><img src= "data:image/png;base64,<?php echo base64_encode($fila['Imagen']); ?>" class="size-foto3"/></td>
                        </tr>
                <?php
                }

                ?>
                </tbody>

            </table>

        </div>

        <!--Boton de PAGAR-->
        <div class="formulario__grupo formulario__grupo-btn-enviar add__tienda">
            <a href="pagar.html" class="formulario__btn btn__pagar">Pagar</a>
        </div>


    </main>
    
    <footer class="footer">
        <div class="container">
            <p>&copy;2021 pagina diseñada por @joseluisrobledo</p>
            <p><a href="mapaWeb.html" class="mapa">Mapa Web</a></p>
        </div>

    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

</body>
</html>