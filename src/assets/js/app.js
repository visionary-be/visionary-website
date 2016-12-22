
$(document).ready(function(){

	$('#js-revoir-content').hide();
	$('#js-revoir').prepend('<p><button id="js-revoir-trigger" href="#js-revoir" class="button-secondary"><i class="fa fa-chevron-down" aria-hidden="true"></i> <span class="label">Cliquez ici pour revoir votre test</span></button></p>');
	$('#js-revoir-trigger')
		.on('click',function(e){
		e.preventDefault();
		$('#js-revoir-content').stop().slideToggle();
		$('i.fa', this).stop().toggleClass('fa-rotate-180');
	});

	var $subscribeMail = $("#subscribe-mail");
	var $registerForm = $("#register-form");

	$subscribeMail.on("click", function(){
		$subscribeMail.fadeOut("fast", function(){
			$("#connexion-form").addClass("hidden");
			$registerForm.fadeIn().removeClass("hidden");	
		});
	});

	var ruleRegex = /^(.+?)\[(.+)\]$/,
	    numericRegex = /^[0-9]+$/,
	    integerRegex = /^\-?[0-9]+$/,
	    decimalRegex = /^\-?[0-9]*\.?[0-9]+$/,
	    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	    alphaRegex = /^[a-z]+$/i,
	    alphaNumericRegex = /^[a-z0-9]+$/i,
	    alphaDashRegex = /^[a-z0-9_\-]+$/i,
	    naturalRegex = /^[0-9]+$/i,
	    naturalNoZeroRegex = /^[1-9][0-9]*$/i,
	    ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
	    base64Regex = /[^a-zA-Z0-9\/\+=]/i,
	    numericDashRegex = /^[\d\-\s]+$/,
	    urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
	    dateRegex = /\d{4}-\d{1,2}-\d{1,2}/;

	$("#login-mail").on("click", function(event){
		$("#login-mail-form").fadeIn().removeClass("hidden");
	});

	$("#auth-register").submit(function(event){
		
		var $name = $( "input[name*='name']" );
		var $email = $( "input[name*='email']" );
		var $password = $( "input[name*='password']" );
		var $countries_iso = $( "select[name*='countries_iso']" );
		var $postcode = $( "input[name*='postcode']" );
		var $birth_date = $( "select[name*='birth_date']" );
		var $gender = $( "input[name*='gender']" );
		
		// check for errors
		var errors = [];
		if( $name.val().length < 2 ){
			errors.push([$name, "Votre nom est trop court"]);
		}

		if( !emailRegex.test($email.val()) || $email.val().indexOf('.') == -1 ){
			errors.push([$email, "Veuillez indiquer une adresse email valide."]);
		}
		if( $password.val().length === 0 || $password.val().length < 8 ){
			errors.push([$password, "Veuillez indiquer un mot de passe valide."]);
		}
		if( !naturalRegex.test( $birth_date.val()) ){
			errors.push([$birth_date, "Veuillez indiquer votre année de naissance."]);
		}
		if(errors.length){
			event.preventDefault();
			$(".voice--error").each(function(){
				$(this).remove();
			});
			for (var i = 0; i < errors.length; i++) {
				var $el = errors[i][0];
				var msg = errors[i][1];
				$el.after("<p class='voice--error'>"+msg+"</p>");
			}
		}
	});

});

