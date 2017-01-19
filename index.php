<?php

// Kickstart the framework
$f3=require('lib/base.php');

//
$f3->set('DEBUG',3);
if ((float)PCRE_VERSION<7.9)
	trigger_error('PCRE version is out of date');

//
$f3->mset(
    array(
        'love1'=>'bar',
        'love2'=>123
    )
);

// Load configuration
$f3->config('config.ini');
$f3->config('setup.cfg');
$f3->set('LOCALES','dict/');
$f3->set('LANGUAGE','fr');

//route HOME
$f3->route('GET /',
	function($f3) {
		$f3->set('classes',$classes); // les classes doivent-elles toujours être redéclarées ?
		$f3->set('header','inc.header.php');
		$f3->set('content','page.home.php');
		$f3->set('footer','inc.footer.php');
		echo View::instance()->render('layout.htm');
	}
);

//route ABOUT
$f3->route('GET /about',
    function($f3) {
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.php');
		$f3->set('content','page.about.php');
		$f3->set('footer','inc.footer.php');
		echo View::instance()->render('layout.htm');
    }
);

//route COLOUR-BLINDNESS
$f3->route('GET /colour-blindness',
    function($f3) {
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.php');
		$f3->set('content','page.colour.php');
		$f3->set('footer','inc.footer.php');
		echo View::instance()->render('layout.htm');
    }
);

//route GUIDE
$f3->route('GET /guide',
    function($f3) {
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.php');
		$f3->set('content','page.guide.php');
		$f3->set('footer','inc.footer.php');
		echo View::instance()->render('layout.htm');
    }
);

//route DOWNLOAD
$f3->route('GET /download',
    function($f3) {
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.php');
		$f3->set('content','page.download.php');
		$f3->set('footer','inc.footer.php');
		echo View::instance()->render('layout.htm');
    }
);

//route CONTACT
$f3->route('GET /contact',
    function($f3) {
		$f3->set('classes',$classes);
		$f3->set('header','inc.header.php');
		$f3->set('content','page.contact.php');
		$f3->set('footer','inc.footer.php');
		echo View::instance()->render('layout.htm');
    }
);

//route 404
$f3->route('GET /','App->home');
$f3->set('ONERROR',
	function($f3){
	$f3->set('classes',$classes);
	$f3->set('header','inc.header.php');
	$f3->set('footer','inc.footer.php');
  echo \Template::instance()->render('error.htm');
});

// VARIABLES
$f3->set('brand', 'Visionary');
$f3->set('footerLink1', 'Tester l\'extension');
$f3->set('footerLink2', 'Développer pour les daltoniens');
$f3->set('footerLink3', 'Qu\'est-ce que le daltonisme');
// RUN
$f3->run();
