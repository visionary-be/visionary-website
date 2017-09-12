			<!-- -->
      <section id="guide" class="box-guide">

	    	<div class="uk-grid">

          <div class="uk-width-medium-1-3 uk-hidden-small" id="guide-menu-wrapper">
            <div class="box-guide-menu uk-text-contrast" id="guide-menu" data-uk-sticky="{top:-200,getWidthFrom:#guide-menu-wrapper}">
		         <h1>Le guide</h1>
		         <p>Apprenez à concevoir des écrans accessibles aux daltoniens.</p>
  		       <ul class="uk-nav uk-nav-side uk-nav-parent-icon" data-uk-nav>
                <li><a href="#chp1" data-uk-smooth-scroll>Démarrer</a></li>
                <li class="uk-parent"><a href="#">Typologie de contenu</a>
                	<ul class="uk-nav-sub">
                    <li><a href="#chp2-a" data-uk-smooth-scroll>Icônes</a></li>
                    <li><a href="#chp2-b" data-uk-smooth-scroll>Graphiques de visualisation de données</a></li>
                    <li><a href="#chp2-c" data-uk-smooth-scroll>Liens</a></li>
                    <li><a href="#chp2-d" data-uk-smooth-scroll>Formulaires</a></li>
                    <li><a href="#chp2-e" data-uk-smooth-scroll>E-commerce color picker</a></li>
                    <li><a href="#chp2-f" data-uk-smooth-scroll>Cartes</a></li>
                  </ul>
                </li>
          			<li><a href="#ressources" data-uk-smooth-scroll>Ressources / Outils</a></li>

            	</ul>
            </div>
          </div>

          <div class="uk-width-1-1 uk-visible-small" style="z-index:1">
          <div class="box-guide-menu uk-text-contrast">
             <h1>Le guide</h1>
             <p>Comment concevoir des écrans accessibles aux daltoniens.</p>
             <div class="box-guide-menu-wrapper" data-uk-sticky="{getWidthFrom:'#header',clsactive:'utility1'}">

               <div class="uk-button-dropdown" data-uk-dropdown="{mode:'click',justify:'#guide'}" style="width:100%;">
                <button class="uk-button uk-width-1-1">Menu <i class="uk-icon-caret-down"></i></button>
                <div class="uk-dropdown uk-dropdown-bottom" aria-hidden="true" style="top: 30px; left: 0px;" tabindex="">
                  <ul class="uk-nav uk-nav-dropdown">
                    <li><a href="#chp1" data-uk-smooth-scroll>Démarrer</a></li>
                    <li class="uk-nav-divider"></li>
                    <li class="uk-nav-header">Typologie de contenu</li>
                    <li><a href="#chp2-a" data-uk-smooth-scroll>Icônes</a></li>
                    <li><a href="#chp2-b" data-uk-smooth-scroll>Graphiques de visualisation de données</a></li>
                    <li><a href="#chp2-c" data-uk-smooth-scroll>Liens</a></li>
                    <li><a href="#chp2-d" data-uk-smooth-scroll>Formulaires</a></li>
                    <li><a href="#chp2-e" data-uk-smooth-scroll>E-commerce</a></li>
                    <li><a href="#chp2-f" data-uk-smooth-scroll>Cartes</a></li>
                    <li class="uk-nav-divider"></li>
                    <li><a href="#ressources" data-uk-smooth-scroll>Ressources</a></li>
                    <li><a href="#chp4" data-uk-smooth-scroll>W3C</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          </div>

	        <div class="uk-width-medium-2-3">
              <div class="box-guide-content" id="guide-content"></iv>

                <article id="chp1" class="uk-margin-large-bottom">
                  <h2><span class="hidden">Démarrer</span></h2>
                  <div class="uk-panel uk-panel-box positive">
                  <blockquote>
                  <p>Ne pas se fier uniquement à la couleur</p>
                  </blockquote>
                  <p>Si vous réalisez des travaux graphiques et que vous n'êtes pas daltonien(ne), il y a de forte chance pour que vous utilisiez spontanément la couleur comme système visuel principal pour signaler des éléments différents. Sachant que <strong>8% de la population masculine est daltonienne</strong>, cela signifie qu'un homme sur 12 aura des difficultés, voire ne pourra pas, utiliser votre création.</p>
                  <p>La solution? Utilisez un autre procédé à la place ou en complément de la couleur, comme par exemple des motifs répétitifs, des différences de trait (pointillé, rectiligne...).</p>
                </div>
    		        </article>

                <article id="chp2">
                <h2>Types de contenu</h2>
                <p>
                  Examinons plusieurs cas posant typiquement problème aux daltoniens et voyons comment appliquer cette règle dans des cas concrets
                </p>
                <!-- icones -->
                <h3 id="chp2-a">Icônes</h3>
                <p>Lorsque vous utilisez la couleur pour établir un système graphique d’icônes, pensez à utiliser une forme en complément.</p>
                <h4>Exemple de ce qu’il ne faut pas faire</h4>
                <p>L’application Messages (anciennement iChat) utilise la couleur pour indiquer le statut de ses contacts.</p>
                
                <figure class="uk-grid" style="border:1px solid #DDD;margin:0 1rem">
    <div class="uk-width-1-2"><p>Vision normale</p>
                  <img src="/assets/images/guide/messages.png" alt="Messages n'utilise que la couleur pour indiquer le statut"/>
                </p></div>
    <div class="uk-width-1-2"><p>
                  Vu par un daltonien (simulation) :
                </p>
                <p>
                  <img src="/assets/images/guide/messages-daltonien.png" alt="Messages Vu par un daltonien (simulation)"/>
                </p></div>
</figure>
                
                
                <h4>Solution</h4>
                <p>Il est piquant de noter que la version précédente (iChat), associait une forme au statut, solutionnant ainsi la confusion pour les daltoniens.</p>
                <figure>
                  <img src="/assets/images/guide/ichat.png" alt="Messages n'utilise que la couleur pour indiquer le statut"/>

                <figcaption>
                  iChat utilisait la forme en plus de la couleur...
                </figcaption>
                </figure>
                <hr />
                <p class="uk-margin-large-bottom">
                  <a href="#chp1" data-uk-smooth-scroll class="uk-float-right">Haut de page <i class="uk-icon-angle-up"></i></a>
                </p>

                <!-- dataviz -->
                <h3 id="chp2-b">Graphiques de visualisation de données</h3>
                <p>
                  Attention aux surfaces de couleur. Vérifiez, à l’aide d’outils simulant la dyschromatopsie (<a href="#ressources">voir la liste des outils</a>) si les couleurs choisies sont suffisamment contrastées.
                </p>
                <p>Au besoin:</p>
                <ul>
                  <li>Pensez à ajouter une texture pour renforcer la différentiation visuelle</li>
                  <li>Placez la légende directement dans le graphique</li>
                  <li>si le graphique est interactif, utilisez l’état "hover" (survol de la souris) pour afficher les données chiffrées (solution impraticable sur les supports tactiles).</li>
                </ul>

                <h4>Aplats de couleurs</h4>
                <p>Prenons ce graphique utilisant uniquement la couleur comme système graphique.</p>

	
<div class="uk-grid">
    <div class="uk-width-large-1-3 uk-width-medium-1-2 uk-row-first">
	<h5>Vision normale</h5>
	    <img src="/assets/images/guide/graphique-daltonisme.png" alt="Graphique à barres de couleurs uniuqment"/>
    </div>
    <div class="uk-width-large-1-3 uk-hidden-medium">
	    <h5>Vision deutéranope</h5>
	    <img src="/assets/images/guide/graphique-daltonisme-deutera.png" alt="Graphique à barres de couleurs perçu par un deutéranope"/>
    </div>
    <div class="uk-width-large-1-3 uk-width-medium-1-2">
	    <h5>Vision Tritanope</h5>
	    <img src="/assets/images/guide/graphique-daltonisme-trita.png" alt="Graphique à barres de couleurs perçu par un deutéranope"/>
    </div>
</div>


                <h4>Solution: utiliser un motif répétitif</h4>
                <p>
                  <img src="/assets/images/guide/bar-chart-v21.png" alt="Graphique à barres accessible aux daltoniens"/>
                </p>
                <h4>Solution pour les graphiques utilisant des lignes</h4>
                <p>
                  Voici un exemple d’un graphique à lignes qui utilise la couleur et le type de traits pour différencier les lignes. Ainsi, le graphique est adapté aux personnes daltoniennes.
                </p>
                <p>
                  <img src="/assets/images/guide/line-chart-v21.png" alt="Graphique à lignes accessible aux daltoniens"/>
                </p>
                <p>
                  Source : <a href="https://tekhnologic.wordpress.com/2016/03/18/color-blindness-in-the-classroom-part-1-color-blind-friendly-charts/" target="_blank">teknologic</a>.
                </p>
                <hr />
                <p class="uk-margin-large-bottom">
                  <a href="#chp1" data-uk-smooth-scroll class="uk-float-right">Haut de page <i class="uk-icon-angle-up"></i></a>
                </p>

                <!-- liens -->
                <h3 id="chp2-c">Les liens</h3>
                <h4>Vérifier le contraste de l’état survolé des liens !</h4>
                <p>Faites attention à la stylisation des liens, particulièrement à l’état <code>:link</code> et <code>:hover</code>. Ne vous satisfaisez pas de simplement changer la couleur au survol, ou alors, choisissez des couleurs fort contrastées en luminosité (par exemple, vert clair et vert foncé).
Si possible, augmentez l’effet en jouant sur un autre élément visuel (border, underline, ombre de texte, modification d’icône, etc).</p>
                <h4>Exemple</h4>
                <p>
                  Les liens "visité" sur Google ne sont pas perçus par tous les visiteurs (ici le lien "Téléviseurs") car le contraste n'est pas suffisemment marqué entre un lien visité et un autre non visité.
                </p>
                <p>
                  <img src="/assets/images/guide/link_blurred.png" alt="Liens visités dans une recherche Google"/>
                </p>
                <p>
                  Voici cette page vue par un <strong>deutéranope</strong>.
                </p>
                <p>
                  <img src="/assets/images/guide/link_blurred-deutera.png" alt="Liens visités dans une recherche Google vu par un deutéranope"/>
                </p>

                <hr />
                <p class="uk-margin-large-bottom">
                  <a href="#chp1" data-uk-smooth-scroll class="uk-float-right">Haut de page <i class="uk-icon-angle-up"></i></a>
                </p>

                <!-- formulaires -->
                <h3 id="chp2-d">Formulaires</h3>
                <h4>Attention aux messages d'erreur</h4>
                <p>
                  Ne vous limitez pas à la couleur pour indiquer qu’un champ est obligatoire.
                </p>
                <h4>Solution : Combiner la couleur avec une typographie ou des formes qui relèvent plus fortement l’importance de l’information.</h4>
                <p>
                  <img src="/assets/images/guide/orange-formulaire-errormessage.png" alt="Message d'erreur dans un formulaire du site Orange"/>
                </p>
                <p>Pour un daltonien, l'information viendra plutôt de l'icône avec la croix plutôt que des instructions et champs passés en rouge.</p>
                <p>
                  <img src="/assets/images/guide/orange-formulaire-errormessage-daltonized.png" alt="Message d'erreur dans un formulaire du site Orange"/>
                </p>
                <hr />
                <p class="uk-margin-large-bottom">
                  <a href="#chp1" data-uk-smooth-scroll class="uk-float-right">Haut de page <i class="uk-icon-angle-up"></i></a>
                </p>

                <!-- color picker -->
                <h3 id="chp2-e">E-commerce color picker</h3>
                <p>Sur un e-commerce, pensez à afficher le nom de la couleur en plus d’une pastille. Et choisissez des noms de couleur simple.</p>
                <hr />
                <p class="uk-margin-large-bottom">
                  <a href="#chp1" data-uk-smooth-scroll class="uk-float-right">Haut de page <i class="uk-icon-angle-up"></i></a>
                </p>

                <!-- carte -->
                <h3 id="chp2-f">Cartes</h3>
                <p>Les cartes sont souvent des objets complexes avec beaucoup d'information. Une personne atteint d’une anomalie de la couleur ne pourra pas bénéficier pleinement de ces principes de perception, comme le montre par-exemple cette image : </p>
                <h4>Exemple</h4>
                <p>
                  <img src="/assets/images/guide/visionary_carte-de-france.png" alt="La carte de France avec une légende de couleurs pour la météo"/>
                </p>
                <p>
                  Voici la carte perçue par un <strong>deutéranope</strong>.
                </p>
                <p>
                  <img src="/assets/images/guide/visionary_carte-de-france_deutera.png" alt="La carte de France avec une légende de couleurs pour la météo vue par un Deutéranope"/>
                </p>
                <h4>Solution</h4>
                <p>
                  Employer un contraste élevé entre les couleurs. Penser à tester le contraste entre deux couleurs via des outils en ligne comme <a href="http://www.snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=C73333" target="_blank">Snook Color Contrast Checker</a>.
                </p>
                <hr />
                <p>
                  <a href="#chp1" data-uk-smooth-scroll class="uk-float-right">Haut de page <i class="uk-icon-angle-up"></i></a>
                </p>

                </article>

                <article id="ressources">
                  <h2>Ressources pour designers</h2>

                  <dl class="uk-definition">
                    
                    <dt>
                      <h3>Suis-je daltonien/ne ?</h3>
                    </dt>
                    <dd>
                      <p>Un test ludique de classement des couleurs, pour vérifier votre perception des couleurs, développé par Visionary.
                      <br /><a href="https://test-your.colour-blindness.org" target="_blank">test-your.colour-blindness.org</a></p>
                    </dd>
                    
                    
                    <dt><h3>Sim Daltonism</h3></dt>
                    <dd>
                    <p>Sim Daltonism (Mac, iOS), est une application gratuite permettant de simuler différents types de daltonisme sur des portions de votre écran. Indispensable! 
	                    <br>
	                    <a href="https://michelf.ca/projects/sim-daltonism/" target="_blank">Sim Daltonism</a>
                    </p></dd>
                    
                    <dt>
                      <h3>Stark</h3>
                    </dt>
                    <dd>
                      <p>Un plugin gratuit pour Sketch (Mac), qui implémente un simulateur de daltonisme et vérificateur de contraste. 
                      <br /><a href="http://www.getstark.co/" target="_blank">getstark.co</a></p>
                    </dd>
                    
                    <dt>
                      <h3>Comprendre le daltonisme en 1 minute.</h3>
                    </dt>
                    <dd>
                      <p>Par Alexandre Plennevaux
                      <br /><a href="https://medium.com/scribe/comprendre-le-daltonisme-ffc73e81666f" target="_blank">https://medium.com/scribe/comprendre-le-daltonisme-ffc73e81666f</a></p>
                    </dd>
                    <dt>
                      <h3>Tips for designing scientific figures for color blind readers</h3>
                    </dt>
                    <dd>
                      <p>Par Luke
                      <br /><a href="http://www.somersault1824.com/tips-for-designing-scientific-figures-for-color-blind-readers/" target="_blank">http://www.somersault1824.com/tips-for-designing-scientific-figures-for-color-blind-readers/</a></p>
                    </dd>
                    
                    <dt><h3>Coblis</h3></dt>
                    <dd>
                    <p>Colour Blindness simulator <br>
	                    <a href="http://www.color-blindness.com/coblis-color-blindness-simulator/">Coblis</a>
                    </p></dd>
                    <dt>
                      <h3>Eyeteq / Spectral Edge</h3>
                    </dt>
                    <dd>
                      <p>Eyeteq enhances visibility by improving colour rendering and definition on streaming video content in real-time.
                      <br /><a href="http://spectraledge.co.uk/eyeteq/" target="_blank">spectraledge.co.uk/eyeteq</a></p>
                    </dd>
                    <dt>
                      <h3>Visolve</h3>
                    </dt>
                    <dd>
                      <p>The assistive software for people with color blindness
                      <br /><a href="http://www.ryobi-sol.co.jp/visolve/en/" target="_blank">http://www.ryobi-sol.co.jp/visolve/en/</a></p>
                    </dd>
                                   <dt>
                      <h3>ColorBrewer</h3>
                    </dt>
                    <dd>
                      <p>Outil fournissant des palettes de couleurs adaptées aux personnes daltoniennes
                      <br /><a href="http://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3" target="_blank">colorbrewer2.org</a></p>
                    </dd>
                    <dt>
                      <h3>Snook Color Contrast Checker</h3>
                    </dt>
                    <dd>
                      <p>Un indicateur de différence de contraste en précisant la conformité aux critères WCAG 2.
                      <br /><a href="http://www.snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=C73333" target="_blank">Snook Color Contrast Checker</a></p>
                  </dl>

                </article>

                
                              </div>
            </div>
					</div>

	    	</div>
    	</section>
