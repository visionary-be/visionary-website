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

## Static Site Generators ?
https://www.staticgen.com/


## Installer Gulp
1. Dans le terminal se rendre dans le dossier racine: `cd ~/path/to/folder`
2. une fois dedans :  `npm install gulp -g` pour installer gulp globalement
3. Installer gulp localement: `npm install gulp --save-dev`
4. Installer les modules spécifiques utilisés dans notre gulpfile: `npm install --save-dev`

