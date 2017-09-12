<?php
// Setup head info
define('WWWROOT', '//'.$_SERVER["HTTP_HOST"]);
define('LOCALROOT', '//'.$_SERVER["DOCUMENT_ROOT"]);

$metatags = array(
	'title'=>"Visionary",
	'image'=>WWWROOT.'/assets/images/Browser.png',
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
$f3->set('LOCALES', 'dict/');
$f3->set('LANGUAGE', 'fr');

// These templates will be used unless their variable is overwritten in a route callback function.
$f3->set('footer', 'inc.footer.php');
$f3->set('header', 'inc.header.php');

//route HOME
$f3->route('GET /',
	function($f3) {
		global $metatags;
		$metatags['title'] = "Le web accessible pour les daltoniens";
		$f3->set('content', 'page.home.php');
		$f3->set('metatags', $metatags );
		echo View::instance()->render('layout.htm');
	}
);
//route ABOUT
$f3->route('GET /about',
	function($f3) {
		global $metatags;
		$f3->set('content', 'page.about.php');
		$f3->set('current_url', 'about');
		$metatags['title'] = "A propos de Visionary";
		$metatags['description'] = "Visionary est un projet de recherche de solutions améliorant l’accessibilité du web pour les daltoniens.";
		$f3->set('metatags', $metatags);
		echo View::instance()->render('layout.htm');
	}
);

//route COLOUR-BLINDNESS
$f3->route('GET /colour-blindness',
	function($f3) {
		global $metatags;
		$f3->set('current_url', 'colour');
		$metatags['title'] = "Qu'est-ce que le daltonisme ?";
		$metatags['description'] = "Le daltonisme est une anomalie de la vision affectant la perception des couleurs.";
		$f3->set('content', 'page.colour.php');
		$f3->set('metatags', $metatags );
		echo View::instance()->render('layout.htm');
	}
);

//route GUIDE
$f3->route('GET /guide',
	function($f3) {
		global $metatags;
		$f3->set('current_url', 'guide');
		$metatags['title'] = "Le guide de conception d'interfaces accessibles aux daltoniens";
		$metatags['description'] = "Comment concevoir des écrans accessibles aux daltoniens.";
		$f3->set('content', 'page.guide.php');
		$f3->set('metatags', $metatags );
		echo View::instance()->render('layout.htm');
	}
);

//route DOWNLOAD
$f3->route('GET /download',
	function($f3) {
		global $metatags;
		$metatags['title'] = 'Installer l\'extension pour Chrome';
		$metatags['description'] = "Cette extension permet aux personnes daltoniennes d’améliorer la clarté des sites consultés.";
		$f3->set('current_url', 'download');
		$f3->set('title', $metatags['title']);
		$f3->set('content', 'page.download.php');
		$f3->set('metatags', $metatags );
		echo View::instance()->render('layout.htm');
	}
);

//route CONTACT
$f3->route('GET|POST /contact',
	function($f3) {

		// Form processing
		if ( isset($_POST) && !empty($_POST)){

			// honeypot
			if(isset($_POST['email']) && !empty($_POST['email'])){
				die("Email sent, thank you much, love.");
			}

			// Sanitization
			$args = array('fullname'=> FILTER_SANITIZE_STRING, 'message' => FILTER_SANITIZE_STRING, 'em-ail'=> FILTER_SANITIZE_EMAIL );
			$post = filter_var_array($_POST, $args);

			// Validation
			$errors= array();
			
			if(!$post){
				$errors['result']= 'Veuillez vérifier vos informations.';

			}
			
			if(empty(trim($post['em-ail']))){
				$errors['em-ail']= 'Veuillez indiquer votre adresse email';
			}
			if(empty(trim($post['message']))){
				$errors['message']= 'Veuillez indiquer votre message';
			}
			// Execution
			if(count($errors)<1){

				$message = $post['message']. "\n---From: {$post['fullname']} {$post['em-ail']}";
				$smtp = new SMTP( 'mail.gandi.net', '465', 'ssl', 'alexandre@colour-blindness.org', 'L0veIsA77!' );
				$smtp->set('Errors-to', '<support@colour-blindness.org>');
				$smtp->set('To', '"Team Visionary" <team@colour-blindness.org>');
				$smtp->set('From', '"Visionary" <support@colour-blindness.org>');
				$smtp->set('Subject', 'Visionary Contact Form');
				if(!$smtp->send($message)){
					$errors['result']= 'Il y a eu un problème à l\'envoi par ce formulaire. Vous pouvez nous contacter directement à team@colour-blindness.org';
					$result= false;
				} else{
					$result= true;
				}
			}
			if(!empty($errors)){
				$f3->set('errors', $errors);			
			}
			$f3->set('result', $result);
		}


		global $metatags;
		$metatags['title'] = 'Contact';
		$metatags['description'] = "Complétez le formulaire ou adressez-nous un email à team@colour-blindness.org.";
		$f3->set('current_url', 'contact');

		$f3->set('title', 'Contacter Visionary');
		$f3->set('content', 'page.contact.php');
		$f3->set('metatags', $metatags );
		echo View::instance()->render('layout.htm');
	}
);

//route 404
$f3->set('ONERROR',
	function($f3){
		global $metatags;
		$f3->set('content', 'error.htm');
		$f3->set('metatags', $metatags );
		echo View::instance()->render('layout.htm');
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
$f3->set('footerLink3', 'Qu\'est-ce que le daltonisme ?');
$f3->set('partners', 'Partenaires');
$f3->set('networks', 'Réseaux');
$f3->set('languages', 'Langues');
// RUN
$f3->run();
