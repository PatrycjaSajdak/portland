<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet">
    <link href="./bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="./css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container-fluid top-wrapper">

        <?php include('./parts/bar.html'); ?>  

    <div class="row">

        <?php include('./parts/slide.html'); ?>   

    </div> 
    <div class="row">
        <div class="container">
            <div class="row">
                <div class="productContainer col-xl-12">
                    <div class="row">

                        <?php include('./parts/navbar.html'); ?>    

                    </div> 
                    <div class="row">
                        <div class="mainContainer">
                            <div class="productContainer col-xl-12">
                                <div class="row productsBlock"></div>
                                <div class='noProductsInfo'>no products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <?php include('./parts/pageChange.html'); ?>
        
            <div class="row">
                <div class="sellsContainer col-xl-12">
                    <div class="sellsContainer__textContainer">
                        <P>BEST SELLERS</P>
                    </div>
                    <div class="sellsContainer__productContainerInSall"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="bottom col-xl-12">
                    <div class="opinionContainer">
                        <div class="titleBlock col-xl-12">
                            <h2 class="titleOpinion">Lorem ipsum dolor sit amet</h2>
                            <p class="titleDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div class="row">
                            <div class="opinionBlock col-xl-12">
                                <div class="row">

                                    <?php
                                        for ($i = 0; $i < 3; $i++) {
                                            include('./parts/customerOpinion.html');
                                        }
                                    ?>

                                </div>
                            </div>
                        </div>
                    </div>

                        <?php include('./parts/footer.html'); ?>

                    </div>
                </div>
            </div>
        </div>
        </div>
        </div> 
        </div> 
    </div>
                           
        <?php include('./parts/menuSide.html'); ?>

    </div>
    <script src="./js/jquery-3.3.1.min.js"></script>
    <script src="./bootstrap/bootstrap.min.js"></script>
    <script src="./js/script.js?v=4"></script>
</body>

</html> 