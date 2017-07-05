			<!-- HERO -->
			<section id="contact-hero" class="uk-block uk-block-primary uk-text-contrast">
				<div class="uk-grid">
					<div class="uk-width-large-2-3 uk-container-center">
						<div class="uk-panel uk-panel-box uk-panel-box-secondary positive">
							<h1 class="uk-text-center">Contacter Visionary</h1>
							<p class="uk-text-center">Complétez le formulaire ci-dessous. Nous reviendrons vers vous dès que possible.</p>
							
							<form id="contactform" class="uk-form uk-form-stacked uk-container-center" method="post" >
								<?php
								
								if (isset($errors)){
									?>
									<div class="uk-form-danger" style="padding:1rem;">	
									<h2>Erreur:</h2>
									<ol>
									<?php
									foreach($errors as $e){
										echo '<li>'.$e. '</li>';
									}
									?>
									</ol>
									</div>
									<?php
								}
								if(isset($result) && true === $result){
									?>
									<div class="uk-form-success" style="padding:1rem;">
									<h2>Merci!</h2>
									<p>Votre message a bien été envoyé.</p>
									</div>
									<?php
								}
									
								?>
								<fieldset class="uk-transform-center">
									<div class="uk-form-row">
										<label class="uk-form-label" for="fullname">Votre nom</label>	
										<input id="fullname" name="fullname" class="uk-input uk-form-large" type="text">
									</div>
									<div class="uk-form-row uk-width-1-1">
										<label class="uk-form-label" for="em-ail">Votre e-mail <span class="mandatory">(obligatoire)</span></label>	
										<input id="em-ail" name="em-ail" class="uk-input uk-form-large <?php echo (isset($errors['em-ail']))? 'uk-form-danger': '' ?>" type="email" >
										<input type="email" name="email" id="email" class="invis">
									</div>
									<div class="uk-form-row">
										<label class="uk-form-label" for="message">Votre message <span class="mandatory">(obligatoire)</span></label>	
										<textarea class="uk-textarea uk-form-large <?php echo (isset($errors['message']))? 'uk-form-danger': '' ?>" rows="5" name="message" placeholder="Je souhaiterais entrer en contact avec vous car..."></textarea>
									</div>
									<p class="uk-text-center">
										<button type="submit" class="uk-button uk-button-primary ">Envoyer votre message</button>
									</p>
				        		</fieldset>
				    		</form>
				    </div>
				</div>
				</div>
			</section>
