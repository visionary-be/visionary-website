<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8"/>
        <meta http-eq="X-UA-Compatible" content="IE=edge">

        <script src="https://use.typekit.net/rtv5ulo.js"></script>
        <script>try{Typekit.load({ async: true });}catch(e){}</script>

        <meta name="apple-mobile-web-app-title" content="Visionary">
        <meta name="application-name" content="Visionary">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="theme-color" content="#000000">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Visionary</title>

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

        <meta name="apple-mobile-web-app-title" content="Visionary">
        <meta name="application-name" content="Visionary">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="assets/images/icons/mstile-144x144.png?v=vMMWa37WBk">
        <meta name="msapplication-config" content="assets/images/icons/browserconfig.xml?v=vMMWa37WBk">
        <meta name="theme-color" content="#ffffff">

        <meta property="og:title" content="Test du daltonisme"/>
        <meta property="og:image" content="http://dev.colour-blindness.org/assets/images/logo.png"/>
        <meta property="og:site_name" content="Visionary"/>
        <meta property="og:description" content="Visionary - Test du daltonisme"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.11/css/uikit.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.11/js/uikit.min.js"></script>

        <style >
	        .wrapper1{
		        border-top:1px solid #ccc;
		        padding: 50px 20px;
		        background-color: #eee;
	        }
	        .wrapper2{
		        border-top:1px solid #ccc;
		        padding: 50px 20px;
		        background-color: #fff;
	        }
	        .center{
		        margin:0 auto;
	        }
	        .center > *{
		        text-align: center;
	        }
          .right {
            text-align: right;
          }
	        .pure-g > div {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
	        }
	        .l-box {
	            padding: 1em;
	        }
          .custom-restricted{
            height: 480px;
            background-color: #eee;
          }
          /* menu */
          .custom-wrapper {
              background-color: #eee;
              -webkit-font-smoothing: antialiased;
              height: 2.1em;
              overflow: hidden;
              -webkit-transition: height 0.5s;
              -moz-transition: height 0.5s;
              -ms-transition: height 0.5s;
              transition: height 0.5s;
          }
          .custom-wrapper.open {
              height: 17em;
          }
          .custom-menu-3 {
              text-align: right;
          }
          .custom-toggle {
              width: 34px;
              height: 34px;
              display: block;
              position: absolute;
              top: 0;
              right: 0;
              display: none;
          }
          .custom-toggle .bar {
              background-color: #777;
              display: block;
              width: 20px;
              height: 2px;
              border-radius: 100px;
              position: absolute;
              top: 18px;
              right: 7px;
              -webkit-transition: all 0.5s;
              -moz-transition: all 0.5s;
              -ms-transition: all 0.5s;
              transition: all 0.5s;
          }

          .custom-toggle .bar:first-child {
              -webkit-transform: translateY(-6px);
              -moz-transform: translateY(-6px);
              -ms-transform: translateY(-6px);
              transform: translateY(-6px);
          }

          .custom-toggle.x .bar {
              -webkit-transform: rotate(45deg);
              -moz-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
          }

          .custom-toggle.x .bar:first-child {
              -webkit-transform: rotate(-45deg);
              -moz-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
              transform: rotate(-45deg);
          }

          @media (max-width: 63.999em) {

              .custom-menu-3 {
                  text-align: left;
              }

              .custom-toggle {
                  display: block;
              }

          }
        </style>


    </head>

    <body>
      <!-- -->
      <header id="header" class="">
      <div class="custom-wrapper pure-g" id="menu">
          <div class="pure-u-1 pure-u-md-1-3">
              <div class="pure-menu">
                  <a href="/" class="pure-menu-heading custom-brand">Visionary</a>
                  <a href="#" class="custom-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></a>
              </div>
          </div>
          <div class="pure-u-1 pure-u-lg-1-3">
              <nav class="pure-menu pure-menu-horizontal custom-can-transform">
                  <ul class="pure-menu-list">
                      <li id="menu-item-1" class="pure-menu-item"><a href="/about" class="pure-menu-link">A propos</a></li>
          	          <li id="menu-item-2" class="pure-menu-item"><a href="/colour-blindness" class="pure-menu-link">Daltonisme</a></li>
          	          <li id="menu-item-3" class="pure-menu-item"><a href="/guide" class="pure-menu-link">Guide</a></li>
          	          <li id="menu-item-4" class="pure-menu-item"><a href="/download" class="pure-menu-link">Télécharger</a></li>
          	          <li id="menu-item-5" class="pure-menu-item"><a href="/contact" class="pure-menu-link">Contact</a></li>
                  </ul>
              </nav>
          </div>
          <div class="pure-u-1 pure-u-lg-1-3">
              <nav class="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                  <ul class="pure-menu-list">
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Français</a></li>
                      <li class="pure-menu-item"><a href="#" class="pure-menu-link">Se connecter</a></li>
                  </ul>
              </nav>
          </div>
      </div>
      <script>
      (function (window, document) {
      var menu = document.getElementById('menu'),
          WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

      function toggleHorizontal() {
          [].forEach.call(
              document.getElementById('menu').querySelectorAll('.custom-can-transform'),
              function(el){
                  el.classList.toggle('pure-menu-horizontal');
              }
          );
      };

      function toggleMenu() {
          // set timeout so that the panel has a chance to roll up
          // before the menu switches states
          if (menu.classList.contains('open')) {
              setTimeout(toggleHorizontal, 500);
          }
          else {
              toggleHorizontal();
          }
          menu.classList.toggle('open');
          document.getElementById('toggle').classList.toggle('x');
      };

      function closeMenu() {
          if (menu.classList.contains('open')) {
              toggleMenu();
          }
      }

      document.getElementById('toggle').addEventListener('click', function (e) {
          toggleMenu();
          e.preventDefault();
      });

      window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
      })(this, this.document);

      </script>
	    <!-- -->
	    </header>
