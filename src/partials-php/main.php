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

        <section id="suono">
            <div class="title-suono">
                <h1>Eleva il tuo suono</h1>
                <p>Con la nostra esperienza audio senza perdite e la qualitá del suono ad alta fedeltá, riproduci musica in streaming come non l'hai mai sentia prima.Nessun compromesso. Solo suono puro.</p>
            </div>

        </section>
    </main>