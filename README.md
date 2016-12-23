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

## Développer
1. `gulp build` pour créer une version fraîche du site dans le dossier build
2. `gulp watch` pour développer en livereload.

## Livrer  ( A FAIRE )
Pour pusher une nouvelle version sur le serveur: 
`gulp release`


# Troubleshooting

## Livereload ne fonctionne pas !
Assure-toi que ton php génère un DOM html complet (html, head, body) et valide, car livereload injecte une librairie javascript et a besoin d'un DOM bien structuré.

## quand je crée un nouveau fichier, il n'apparait pas automatiquement.
En effet, il faut arrêter (`CTRL+C`) et relancer `gulp`. Pas mieux pour l'instant.