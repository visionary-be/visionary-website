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
