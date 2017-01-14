<?php

// Ne pas toucher à cette ligne.
$f3 = require 'vendor/bcosca/fatfree/lib/base.php';

// F3 configuration (voir la doc)
$f3->config('config.ini');


// Définis tes routes ici:

$f3->route('GET /',
    function($f3) {
	    
		$f3->set('meta_title','Visionary Homepage');
		echo View::instance()->render('header.html');
		echo View::instance()->render('home.html');
		echo View::instance()->render('footer.html');
    }
);
$f3->run();