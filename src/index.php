<?php

// Ne touche pas à cette ligne.
$f3 = require 'vendor/bcosca/fatfree/lib/base.php';

// F3 configuration (voir la doc)
$f3->config('config.ini');


// Définis tes routes ici:

$f3->route('GET /',
    function($f3) {
	    
		$f3->set('meta_title','Visionary Homepage');
		echo View::instance()->render('header.html');
		echo View::instance()->render('partials/menu.inc.html');

		echo "<p>salut benoit, ça va? yolo?</p>";
		
		//$f3->set('content','welcome.htm');
		echo View::instance()->render('footer.html');
		?></body></html><?php
    }
);
$f3->run();