<?php 
    include 'db.php';



    // foreach($database as $key => $value){
    //     echo $value['genre'];
    // }


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tidal ascolta la tua musica quando vuoi dove vuoi creato da parte di Jay-z with Bayonce</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> 

</head>
<body>
    
    <!-- start header -->
    <header>
        <div class="container">
            <div class="nav-sx">
                <ul class="menu-sx">
                    <li><a href="#">
                            <img src="img/logo-tidal.jpg" alt="">
                        </a>
                    </li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">In primo piano</a></li>
                    <li><a href="#">Magazine</a></li>
                    <li><a href="#">A proposito di TIDAL</a></li>
                </ul>
            </div>
            <div class="nav-dx">
                <ul class="menu-dx">
                    <li><a href="#">Login</a></li>
                    <li><a href="#" class="btn btn-classic">prova</a></li>
                </ul>
            </div>
        </div>
    </header>
    <!-- /header -->

    <!-- start main -->
    <main>
        <div class="container">
            <h2 style="color: white;">NAVIGA</h2>

            <div class="box-main" style="color: white;">
                <?php foreach($database as $value) {?>
                    <div class="post">
                        <h3>
                            <?php echo $value['author']; ?>
                        </h3>
                        <a href="<?php echo $value['link']; ?>">
                            <img src="<?php echo $value['poster']; ?>" alt="">

                        </a>
                        <h4>
                            <?php echo $value['genre']; ?>
                        </h4>
                        <p>
                            <?php echo $value['year']; ?>
                        </p>
                    </div>
                    <?php } ?>
            </div>
        </div>
    </main>
    <!-- /main -->

    <!-- start foot -->
    <footer>

    </footer>
    <!-- /foot -->
</body>
</html>