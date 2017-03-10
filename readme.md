# Visionary Website
Site de visionary

## Responsable de la branche MASTER + CONVERT-UIKIT:
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
https://getuikit.com/
v2 > scss

## Framework PHP
https://fatfreeframework.com/

## Installer Gulp

1. Dans le terminal se rendre dans le dossier racine: `cd ~/path/to/folder`
2. une fois dedans :  `npm install gulp -g` pour installer gulp globalement
3. Installer gulp localement: `npm install gulp --save-dev`
4. Installer les modules spécifiques utilisés dans notre gulpfile: `npm install --save-dev`

## Développer
1. `gulp` pour créer une version fraîche du site dans le dossier build, puis développer en browsersync.

## Livrer
Pour pusher une nouvelle version sur le serveur:
`gulp release`

## Questions
### Twig ?
Il faut la version 7 de PHP sur l'ordi (Sierra est en 5.6)
### Comment mettre en place le multilinguisme avec F3 ?
### Comment stocker la variable de la page courante en F3 pour avoir un menu dynamique ?
