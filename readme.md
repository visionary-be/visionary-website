# Visionary 
URL : https://colour-blindness.org

## comment démarrer
Le site se fait en PHP.

Dans le dossier `./src`  :  `composer update ` pour installer le framework MVC FatFree

## Framework PHP
https://fatfreeframework.com/

## Framework CSS
https://getuikit.com/
v2 > scss

## Installer Gulp

1. Dans le terminal se rendre dans le dossier racine: `cd ~/path/to/folder`
2. une fois dedans :  `npm install gulp -g` pour installer gulp globalement
3. Installer gulp localement: `npm install gulp --save-dev`
4. Installer les modules spécifiques utilisés dans notre gulpfile: `npm install --save-dev`

## Développer
1. `gulp` pour créer une version fraîche du site dans le dossier build et lancer en browsersync.

## Livrer
Pour pusher une nouvelle version sur le serveur:
`gulp version:bump`  puis `gulp release`

## Maintenance
Dans le dossier `./src`  :  `composer update ` 
