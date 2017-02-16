<?php

// Kickstart the framework
$f3 = require 'vendor/bcosca/fatfree/lib/base.php';

// Load configuration
$f3->config('config.ini');

// Set some global parameters
$f3->set('LOCALES','dict/');
$f3->set('LANGUAGE','fr');

// These templates will be used unless their variable is overwritten in a route callback function.
$f3->set('footer','inc.footer.php');
$f3->set('header','inc.header.php');

//route HOME
$f3->route('GET /',
	function($f3) {

		$f3->set('content','page.home.php');
		echo View::instance()->render('layout.htm');
	}
);

//route ABOUT
$f3->route('GET /about',
    function($f3) {

		$f3->set('content','page.about.php');
		echo View::instance()->render('layout.htm');
    }
);

//route COLOUR-BLINDNESS
$f3->route('GET /colour-blindness',
    function($f3) {

		$f3->set('content','page.colour.php');
		echo View::instance()->render('layout.htm');
    }
);

//route GUIDE
$f3->route('GET /guide',
    function($f3) {


		$f3->set('content','page.guide.php');

		echo View::instance()->render('layout.htm');
    }
);

//route DOWNLOAD
$f3->route('GET /download',
    function($f3) {
		$f3->set('content','page.download.php');
		echo View::instance()->render('layout.htm');
    }
);

//route CONTACT
$f3->route('GET /contact',
    function($f3) {
		$f3->set('content','page.contact.php');
		echo View::instance()->render('layout.htm');
    }
);

//route 404
$f3->set('ONERROR',
	function($f3){
	$f3->set('content','error.htm');
  echo \Template::instance()->render('layout.htm');
});

// VARIABLES
$f3->set('brand', 'Visionary');
$f3->set('footerLink1', 'Tester l\'extension');
$f3->set('footerLink2', 'Développer pour les daltoniens');
$f3->set('footerLink3', 'Qu\'est-ce que le daltonisme');
// RUN
$f3->run();
