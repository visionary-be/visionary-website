<?php

// Kickstart the framework
$f3=require('lib/base.php');

$f3->set('DEBUG',1);
if ((float)PCRE_VERSION<7.9)
	trigger_error('PCRE version is out of date');

// Load configuration
$f3->config('config.ini');
$f3->set('LOCALES','dict/');
$f3->set('LANGUAGE','fr');

//route HOME
$f3->route('GET /',
	function($f3) {
		$f3->set('classes',$classes); // les classes doivent-elles toujours être redéclarées ?
		$f3->set('header','inc.header.html');
		$f3->set('content','page.home.html');
		$f3->set('footer','inc.footer.php');
		echo View::instance()->render('layout.htm');
	}
);

//route ABOUT
$f3->route('GET /about',
    function($f3) { 	
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.html');
		$f3->set('content','page.about.html');
		$f3->set('footer','inc.footer.html');
		echo View::instance()->render('layout.htm');
    }
);

//route COLOUR-BLINDNESS
$f3->route('GET /colour-blindness',
    function($f3) {  	
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.html');
		$f3->set('content','page.colour.html');
		$f3->set('footer','inc.footer.html');
		echo View::instance()->render('layout.htm');
    }
);

//route GUIDE
$f3->route('GET /guide',
    function($f3) {      	
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.html');
		$f3->set('content','page.guide.html');
		$f3->set('footer','inc.footer.html');
		echo View::instance()->render('layout.htm');
    }
);

//route DOWNLOAD
$f3->route('GET /download',
    function($f3) {       	
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.html');
		$f3->set('content','page.download.html');
		$f3->set('footer','inc.footer.html');
		echo View::instance()->render('layout.htm');
    }
);

//route CONTACT
$f3->route('GET /contact',
    function($f3) {       	
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.html');
		$f3->set('content','page.contact.html');
		$f3->set('footer','inc.footer.html');
		echo View::instance()->render('layout.htm');
    }
);

//VARIABLES

// RUN
$f3->run();
