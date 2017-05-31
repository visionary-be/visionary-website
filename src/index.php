<?php
// Setup head info
define('WWWROOT', '//'.$_SERVER["HTTP_HOST"]);
define('LOCALROOT', '//'.$_SERVER["DOCUMENT_ROOT"]);
$metatags = array(
	'title'=>"Visionary",
	'image'=>WWWROOT.'/assets/images/browser.png',
	'image:width'=>800,
	'image:height'=>574,
	'url' => WWWROOT,
	'description'=>"Daltonisme et interfaces"
);

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
		$f3->set('title','Le web accessible pour les daltoniens');
		$f3->set('content','page.home.php');
		echo View::instance()->render('layout.htm');
	}
);
//route ABOUT
$f3->route('GET /about',
    function($f3) {
			$f3->set('content','page.about.php');
			$f3->set('current_url','about');
			$metatags['title'] = "A propos de Visionary";
			$metatags['description'] = "le contenu de la meta description";
			$metatags['url'] = WWWROOT;
			$f3->set('metatags', $metatags);
			echo View::instance()->render('layout.htm');
    }
);

//route COLOUR-BLINDNESS
$f3->route('GET /colour-blindness',
  function($f3) {
		$f3->set('current_url','colour');
		$f3->set('title','Qu\'est-ce que le daltonisme');
		$f3->set('content','page.colour.php');
		echo View::instance()->render('layout.htm');
  }
);

//route GUIDE
$f3->route('GET /guide',
  function($f3) {
		$f3->set('current_url','guide');
		$f3->set('title','Le guide de conception des écrans accessibles aux daltoniens');
		$f3->set('content','page.guide.php');
		echo View::instance()->render('layout.htm');
  }
);

//route DOWNLOAD
$f3->route('GET /download',
  function($f3) {
		$f3->set('current_url','download');
		$f3->set('title','Installer l\'extension pour Chrome');
		$f3->set('content','page.download.php');
		echo View::instance()->render('layout.htm');
  }
);

//route CONTACT
$f3->route('GET /contact',
  function($f3) {
		$f3->set('current_url','contact');
		$f3->set('title','Contacter Visionary');
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
$f3->set('nav1', 'A propos');
$f3->set('nav2', 'Daltonisme');
$f3->set('nav3', 'Guide');
$f3->set('nav4', 'Télécharger');
$f3->set('nav5', 'Contact');
$f3->set('navButton1', 'S\'inscrire');
$f3->set('navButton1Title', 'L\'inscription est gratuite et permet le téléchargement de la solution');
$f3->set('navButton2', 'Faire le test');
$f3->set('footerLink1', 'Tester l\'extension');
$f3->set('footerLink2', 'Développer pour les daltoniens');
$f3->set('footerLink3', 'Qu\'est-ce que le daltonisme');
$f3->set('partners', 'Partenaires');
$f3->set('networks', 'Réseaux');
$f3->set('languages', 'Langues');
// RUN
$f3->run();
