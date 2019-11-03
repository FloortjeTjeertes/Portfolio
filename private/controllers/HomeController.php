<?php

/**
 * Class PageController
 *
 * Deze handelt de logica van alle algemene pagina;s af (over ons, wie zijn we etc,)
 * Haalt gegevens uit de "model" laag van de website (de gegevens)
 * Geeft de gegevens aan de "view" laag (HTML template) om weer te geven
 *
 */
class HomeController {

	function home(){

include __DIR__ .'/../views/bootscrean.php';

include __DIR__ .'/../views/header.php';


include __DIR__ .'/../views/boddyMain.php';

include __DIR__ .'/../views/footer.php';

	}

}
