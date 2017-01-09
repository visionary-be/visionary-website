# Visionary Website
Site de visionary

## Responsable de la branche MASTER: 
Benoit Vrins

## comment démarrer
Le site se fait en PHP.
Pour lancer un serveur local: 

`php -t ~/path/to/site/from-your-home/folder -S localhost:1973 `

## Pour du texte traduisible
utiliser les fonctions gettext de php
Exemple: 
`<p><?= _("Bonjour!"); ?></p>` ou `<?php _e('Bonjour'); ?>`

## Framework CSS
http://purecss.io/grids/

## Backend solution (static PHP)
https://fatfreeframework.com/

## Static Site Generators ?
https://www.staticgen.com/

## Questions 

* Doit-on déclarer les classes à chaque function ?
* Comment mettre en place une page 404 ?


## Problèmes actuels

* pas moyen de récupérer des variables déclarées dans index.php ou des globales dans le .ini (erreur PHP quand on imprime le GET)
* Voir comment mettre en place le système de templating
* Multilingue pas opérationnel
