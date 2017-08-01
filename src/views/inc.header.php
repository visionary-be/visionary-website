<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8"/>
        <meta http-eq="X-UA-Compatible" content="IE=edge">

        <meta name="apple-mobile-web-app-title" content="Visionary">
        <meta name="application-name" content="Visionary">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="theme-color" content="#000000">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title><?php echo $metatags['title']; ?> | Visionary</title>

        <link rel="apple-touch-icon" sizes="57x57" href="assets/images/icons/apple-touch-icon-57x57.png?v=vMMWa37WBk">
        <link rel="apple-touch-icon" sizes="60x60" href="assets/images/icons/apple-touch-icon-60x60.png?v=vMMWa37WBk">
        <link rel="apple-touch-icon" sizes="72x72" href="assets/images/icons/apple-touch-icon-72x72.png?v=vMMWa37WBk">
        <link rel="apple-touch-icon" sizes="76x76" href="assets/images/icons/apple-touch-icon-76x76.png?v=vMMWa37WBk">
        <link rel="apple-touch-icon" sizes="114x114" href="assets/images/icons/apple-touch-icon-114x114.png?v=vMMWa37WBk">
        <link rel="apple-touch-icon" sizes="120x120" href="assets/images/icons/apple-touch-icon-120x120.png?v=vMMWa37WBk">
        <link rel="apple-touch-icon" sizes="144x144" href="assets/images/icons/apple-touch-icon-144x144.png?v=vMMWa37WBk">
        <link rel="apple-touch-icon" sizes="152x152" href="assets/images/icons/apple-touch-icon-152x152.png?v=vMMWa37WBk">
        <link rel="apple-touch-icon" sizes="180x180" href="assets/images/icons/apple-touch-icon-180x180.png?v=vMMWa37WBk">

        <link rel="icon" type="image/png" href="assets/images/icons/favicon-32x32.png?v=vMMWa37WBk" sizes="32x32">
        <link rel="icon" type="image/png" href="assets/images/icons/favicon-194x194.png?v=vMMWa37WBk" sizes="194x194">
        <link rel="icon" type="image/png" href="assets/images/icons/favicon-96x96.png?v=vMMWa37WBk" sizes="96x96">
        <link rel="icon" type="image/png" href="assets/images/icons/android-chrome-192x192.png?v=vMMWa37WBk" sizes="192x192">
        <link rel="icon" type="image/png" href="assets/images/icons/favicon-16x16.png?v=vMMWa37WBk" sizes="16x16">

        <link rel="manifest" href="assets/images/icons/manifest.json?v=vMMWa37WBk">
        <link rel="mask-icon" href="assets/images/icons/safari-pinned-tab.svg?v=vMMWa37WBk" color="#333333">
        <link rel="shortcut icon" href="assets/images/icons/favicon.ico?v=vMMWa37WBk">

        <meta property="og:title" content="<?php echo $metatags['title']; ?> | Visionary"/>
        <meta property="og:image" content="<?php echo $metatags['image']; ?>"/>
        <meta property="og:site_name" content="<?php echo $metatags['title']; ?> | Visionary"/>
        <meta property="og:description" content="<?php echo $metatags['description']; ?>"/>
        <meta property="og:url" content="<?php echo $metatags['url'].'/'.$current_url; ?>">
        <meta property="og:type" content="article">

        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="<?php echo $metatags['title']; ?> | Visionary">
        <meta name="twitter:description" content="<?php echo $metatags['description']; ?>">
        <meta name="twitter:image" content="<?php echo $metatags['image']; ?>">

        <base href="<?php echo WWWROOT; ?>" />

        <link rel="stylesheet" href="/assets/css/app.css?v={VERSION}" />

    </head>

    <body>
      <!-- -->
      <header id="header">
        <nav class="uk-navbar">
          <a href="/" class="uk-navbar-brand"><img src="/assets/images/visionary.svg" alt="<?php echo $brand; ?>"></a>

          <ul class="uk-navbar-nav uk-hidden-small">
            <li id="menu-item-1"<?php echo ($current_url === 'about') ? ' class="uk-active"': ''; ?>><a href="/about"><?php echo $nav1; ?></a></li>
            <li id="menu-item-2"<?php echo ($current_url === 'colour') ? ' class="uk-active"': ''; ?>><a href="/colour-blindness"><?php echo $nav2; ?></a></li>
            <li id="menu-item-3"<?php echo ($current_url === 'guide') ? ' class="uk-active"': ''; ?>><a href="/guide"><?php echo $nav3; ?></a></li>
            <li id="menu-item-4"<?php echo ($current_url === 'download') ? ' class="uk-active"': ''; ?>><a href="/download"><?php echo $nav4; ?></a></li>
            <li id="menu-item-5"<?php echo ($current_url === 'contact') ? ' class="uk-active"': ''; ?>><a href="/contact"><?php echo $nav5; ?></a></li>
          </ul>

          <div class="uk-navbar-content uk-navbar-flip uk-hidden-small">
            <!--<div class="uk-button-dropdown" data-uk-dropdown>
              <div><a href="">Français <i class="uk-icon-caret-down"></i></a></div>
              <div class="uk-dropdown uk-dropdown-navbar uk-dropdown-bottom">
                <ul class="uk-nav uk-nav-navbar">
                  <li><a href="#">Anglais</a></li>
                  <li><a href="#">Français</a></li>
                </ul>
              </div>
            </div>-->
            <a class="uk-button uk-button-default" href="https://dev.colour-blindness.org/" data-uk-tooltip="{pos:'bottom',animation:true}" title="<?php echo $navButton1Title; ?>"><?php echo $navButton1; ?></a>
            <a class="uk-button uk-button-primary" href="https://dev.colour-blindness.org/"><?php echo $navButton2; ?></a>
          </div>

          <div class="uk-navbar-flip uk-visible-small">
            <a href="#menu" class="uk-navbar-toggle"  data-uk-offcanvas="{target:'#menu-offcanvas',mode:'slide'}"></a>
            <div id="menu-offcanvas" class="uk-offcanvas">
                <div class="uk-offcanvas-bar uk-offcanvas-bar-flip">
                  <a href="#" class="uk-close uk-close-offcanvas" id="menu-offcanvas-close"></a>
                  <ul class="uk-nav uk-nav-offcanvas" data-uk-nav>
                    <li id="menu-item-1"<?php echo ($current_url === 'about') ? ' class="uk-active"': ''; ?>><a href="/about"><?php echo $nav1; ?></a></li>
                    <li id="menu-item-2"<?php echo ($current_url === 'colour') ? ' class="uk-active"': ''; ?>><a href="/colour-blindness"><?php echo $nav2; ?></a></li>
                    <li id="menu-item-3"<?php echo ($current_url === 'guide') ? ' class="uk-active"': ''; ?>><a href="/guide"><?php echo $nav3; ?></a></li>
                    <li id="menu-item-4"<?php echo ($current_url === 'download') ? ' class="uk-active"': ''; ?>><a href="/download"><?php echo $nav4; ?></a></li>
                    <li id="menu-item-5"<?php echo ($current_url === 'contact') ? ' class="uk-active"': ''; ?>><a href="/contact"><?php echo $nav5; ?></a></li>
                  </ul>
                  <div class="uk-panel">
                    <a class="uk-button uk-button-default" href="https://dev.colour-blindness.org/" data-uk-tooltip title="test"><?php echo $navButton1; ?></a>
                    <a class="uk-button uk-button-primary" href="https://dev.colour-blindness.org/"><?php echo $navButton2; ?></a>
                  </div>
                </div>
            </div>
          </div>

        </nav>
	    </header>
      <!-- -->
