$(document).ready(function(){
	/**
		current user informations
	*/

	console.log("Hello");

	var firstTrial = true;

	var currentUser = {
		name : null,
		email : null,
		url : null,
		date : null,
		serie : null,
		result : null,
	}
   
    var data = {},
    	stageWidth = 400, // 400
		stageHeight = 280, // 360
		colorOrder = [],
		points = [],
		order = [],
		$colorList = $("#list-normal"),
		$btnPrint = $(".btn-print"),
		colorListItems = "",
		result = {},
		sortable = false,
		key, choice,
		types = {
        	"succeed" : "Aucun",
        	"protan" : "Protane (Rouge - bleu vert)",
        	"deutan" : "Deutan (Vert - rouge pourpre)",
        	"tritan" : "Tritane (Violet - jaune vert)",
        },
    	buildTest = function(callback){
	    	$.getJSON("ui/data/data.json", function(result){

	    		data = result;

	    		console.log(data)

				colorOrder = data.colors; //shuffleArray(data.colors);

				scaleCoords();
				drawDom();

				$('#choices .pick').shuffle();
				$('#choices .pick').each(function(i, k){
					$(this).find("a").text(i + 1);
				});

				commands();

				$(window).trigger('resize');
				if(callback) {
					callback();	
				}
			})
    	},

		scaleCoords = function(){
			var n = data.colors.length;
			var factor = stageWidth / 130;
			
			while(n--){
				data.colors[n].x = (data.colors[n].v * factor) + stageWidth/2;
				data.colors[n].y = (data.colors[n].u * factor) + stageHeight/2;
			}

			function _s(coord){
				return {
					x : (coord.x * factor) + stageWidth/2,
					y : (coord.y * factor) + stageHeight/2
				}
			}

			data.protan.from = _s(data.protan.from);
			data.protan.to = _s(data.protan.to);

			data.deutan.from = _s(data.deutan.from);
			data.deutan.to = _s(data.deutan.to);

			data.tritan.from = _s(data.tritan.from);
			data.tritan.to = _s(data.tritan.to);
		},

		updateOrder = function(){
			console.log("updateOrder")
			order = [];
			$colorList.find("li").each(function () {
				if($(this).data("item") !== undefined){
					order.push(parseInt($(this).data("item")))
				}
			})
			order[0] = "P";
			$(".currentOrder").html(order.join(" - "));

			order[0] = 0;
			colorOrder = orderArray(data.colors, order);

				console.log( sortable )
				
			if(sortable) {
				
				// http://ma.rkusa.st/touch-dnd/sortable.html
				$('#list-normal').addClass("sortable").sortable({ 
					disabled: false,
					cancel: '.ignore',
					unmove : '.ignore',
					constraint : 'x',
					updateHandler: function(item, index){
						return true;
					}
				})
				.on('sortable:start', function(el, ui) {
					ui.item.addClass("dragging");
				})
				.on('sortable:stop', function(el, ui) {
					ui.item.removeClass("dragging");
					updateOrder();
				})

				$(".color-item").first().addClass("pilot ignore"); 

			} else {
				$("#list-normal").removeClass("sortable").sortable({ disabled: true });
				$(".color-item").first().removeClass("pilot ignore");
			}

			$(window).trigger('resize');
			result = new MomentOfInertia(colorOrder);
		},

		checkResult = function() {
			console.log("checkResult")
	        $('.angle').html( result.majorAngle.toFixed(1) );
	        $('.major_radius').html( result.majorRadius.toFixed(1) );
	        $('.minor_radius').html( result.minorRadius.toFixed(1) );
	        $('.tes').html( result.tes.toFixed(1) );
	        $('.s_index').html( result.s_index.toFixed(2) );
	        $('.c_index').html( result.c_index.toFixed(2) );
	        var cvd_type = "fail";
	        // CVD Type Criterions:
	        // C-index: 1.6 (for cvd vs. normal)
	        // Protan > +0.7 > Deutan > -65.0 > Tritan
	        if (result.c_index <= 1.6) {
	          $('.cvd_type').html("n'êtes pas daltonien"); //not colorblind
	          cvd_type = "succeed";
	        } else if (result.majorAngle >= +0.7) {
	          $('.cvd_type').html('êtes daltonien de type protanope'); //protan color vision
	           cvd_type = "protan";
	        } else if (result.majorAngle < -65) {
	          $('.cvd_type').html('êtes daltonien de type tritanope');
	          cvd_type = "tritan";
	        } else {
	          $('.cvd_type').html('êtes daltonien de type deuteranope');
	          cvd_type = "deutan";
	        }
	        // Severity Criterions
	        // C-index range: 1.6 - 4.2
	        var adjusted_c = result.c_index;
	        if (adjusted_c < 1.6) { adjusted_c = 1.6 };
	        if (adjusted_c > 4.2) { adjusted_c = 4.2 };
	        

	        currentUser.serie = order;
	        currentUser.result = cvd_type;


	        $("#result-text span").text(types[cvd_type]);

	        $('.severity_range').html( Math.round((adjusted_c - 1.6) * 100 / (4.2 - 1.6)) + "%" );  

	        if(firstTrial){
	        	$.ajax({type: "POST",
				  url: "/test/newuser",
				  dataType: "json",
				  data : currentUser,
				  success: function(result){
				  	console.log( result )
				  }
				})	
	        }
	    },

		checkAnwser = function(evt){
			if(_.isEqual(order, data.protan.scheme)){
				result = "protanope";
			} else if(_.isEqual(order, data.deutan.scheme)) {
				result = "deuteranope";
			} else if(_.isEqual(order, data.tritan.scheme)){
				result = "tritanope";
			} else if(_.isEqual(order, data.normal.scheme)){
				result = "normal";
			} else {
				result = "unknow";
			}
		},

		drawDom = function(){
			console.log("drawDom")
			$colorList.empty();

			for(key = 0; key < colorOrder.length; key++){
				colorListItems = $("<li></li>")
					.data("item", colorOrder[key].id)
					.addClass("color-item")
					.css("background-color",colorOrder[key].color)
				$colorList.append(colorListItems);
			}
			
			$colorList.find("li").velocity("transition.slideDownIn", { duration: 400, stagger: 20 })

			updateOrder();
		},

		commands = function(){
			console.log("commands")
			$("html").addClass("testDeClassement");
			// $("body").addClass("no-scroll");

			$btnPrint.on("click", function(){
				window.print();
			})

			$("#show-final").on("click", function(e){
				e.preventDefault();
				if( $("#choices a.active").length ){
					checkResult();
					drawGraph();

					$("#list-normal").addClass("no-border");
					$("#test").velocity({ height: "140px"}, { duration : 1000, delay:500,  easing: "easeInBack" });
					$(".color-arrangement").velocity({ height: "5px"}, { duration : 1000, delay:500,  easing: "easeInBack" });
					$(".brienfing").velocity({ height: "100px"}, { duration : 1000, delay : 500,  easing : "easeInBack" });
					// $("body").removeClass("no-scroll");

					$("#result").removeClass("hide");

					// $("#list-normal").addClass("no-border");

					$("#choices").velocity("transition.slideDownOut");

					$(this).velocity("transition.slideDownOut", function(){
						$(".test-instruction").toggleClass("hide");
						$(".result-instruction").toggleClass("hide");
					});
				}

			})

			$("#choices").on("click", "a", function(e){
				e.preventDefault();
				$("#choices a").removeClass("active");
				$("#show-final").removeClass("btn-disabled");

				$(this).addClass("active");
				sortable = false;
				switch($(this).attr("id")){ 
					case "pick-normal": colorOrder = orderArray(data.colors, data.normal.scheme); choice = "normal"; break;
					case "pick-protan": colorOrder = orderArray(data.colors, data.protan.scheme); choice = "protan"; break;
					case "pick-deutan": colorOrder = orderArray(data.colors, data.deutan.scheme); choice = "deutan"; break;
					case "pick-tritan": colorOrder = orderArray(data.colors, data.tritan.scheme); choice = "tritan"; break;
					case "pick-deuteranormal": colorOrder = orderArray(data.colors, data.presets.tritanCrossing); choice = "deutan"; break;
					case "pick-tritan-crossing": colorOrder = orderArray(data.colors, data.presets.deuteranomal); choice = "tritan"; break;
					case "pick-other": colorOrder = shuffleArray(data.colors); choice = "other"; sortable = true; break;
				}

				$colorList.find("li").velocity("transition.slideUpOut", { 
					duration: 400, 
					stagger: 20, 
					complete: function() {
						drawDom();
					}
				})
			})
		},

		drawGraph = function(){
			// GRAPH
			var $stage = $("#stage");
				$stage.attr("width", stageWidth).attr("height", stageHeight);

				$stage.empty();

			var circleRadius = 10;
			var lineThick = 2;

			for(key = 0; key < data.colors.length; key++) {
				var num = key == 0 ? 'P' : key;

				var $textNum = $(document.createElementNS("http://www.w3.org/2000/svg","text"));
				var offsetX = -4;
				var offsetY = key < 7 ? -14 : 24;
					$textNum
						.text(num)
						.css("font-size", "12px")
						.attr("x", data.colors[key].x + offsetX)
						.attr("y", data.colors[key].y + offsetY);
				    $stage.append($textNum);

				var $circle = $(document.createElementNS("http://www.w3.org/2000/svg","circle"));
				    $circle
				    	.attr("cx", data.colors[key].x )
				    	.attr("cy", data.colors[key].y )
				    	.attr("r", circleRadius)
				    	.attr("fill", data.colors[key].color);
					$stage.append($circle);
			}

			// plot protan, deutan, tritan confusion lines

			//  PROTANE
			var $lineProtane = $(document.createElementNS("http://www.w3.org/2000/svg","line"));
			    $lineProtane
			    	.attr("x1", data.protan.from.x ).attr("y1", data.protan.from.y )
			    	.attr("x2", data.protan.to.x ).attr("y2", data.protan.to.y )
			    	.attr("stroke", "#ffaaaa").attr("stroke-width", lineThick);

			var $textProtan = $(document.createElementNS("http://www.w3.org/2000/svg","text"));
				$textProtan.text("Protan")
						.css({"font-size" : "12px","transform" : "translate(168px, 130px) rotate(-98deg)" })
						.attr("x", 0).attr("y", 0);

			//  DEUTANE
			var $lineDeutane = $(document.createElementNS("http://www.w3.org/2000/svg","line"));
			    $lineDeutane
			    	.attr("x1", data.deutan.from.x ).attr("y1", data.deutan.from.y )
			    	.attr("x2", data.deutan.to.x ).attr("y2", data.deutan.to.y )
			    	.attr("stroke", "#aaffaa").attr("stroke-width", lineThick);

			var $textDeutane = $(document.createElementNS("http://www.w3.org/2000/svg","text"));
				$textDeutane.text("Deutane").attr("x", 0).attr("y", 0)
						.css({"font-size" : "12px","transform" : "translate(190px, 138px) rotate(-78deg)" })

			//  TRITANE
			var $lineTritane = $(document.createElementNS("http://www.w3.org/2000/svg","line"));
			    $lineTritane
			    	.attr("x1", data.tritan.from.x ).attr("y1", data.tritan.from.y )
			    	.attr("x2", data.tritan.to.x ).attr("y2", data.tritan.to.y )
			    	.attr("stroke", "#aaaaff").attr("stroke-width", lineThick);

			var $textTritane = $(document.createElementNS("http://www.w3.org/2000/svg","text"));
				$textTritane.text("Tritane").attr("x", 0).attr("y", 0)
						.css({"font-size" : "12px","transform" : "translate(194px, 160px) rotate(-7deg)" })

			$stage.append($lineProtane);
			$stage.append($textProtan);

			$stage.append($lineDeutane);
			$stage.append($textDeutane);

			$stage.append($lineTritane);
			$stage.append($textTritane);

			var $lineOrder = $(document.createElementNS("http://www.w3.org/2000/svg","polyline"));
				$lineOrder.attr("stroke", "#666666").attr("fill", "none").attr("stroke-width", lineThick);

			var points = "";
				points = parseInt(data.colors[0].x) +","+ parseInt(data.colors[0].y)+" ";
				for(key = 1; key < order.length; key++){
					var color = data.colors[parseInt(order[key])];
					points += parseInt(color.x) +","+ parseInt(color.y)+" ";
				}
				$lineOrder.attr("points", points);
				$stage.append($lineOrder);
		};

		console.log("Yooo")

		buildTest(function(){
			console.log("START")
        	$("#test").removeClass("hide").velocity("transition.slideUpIn", { duration: 420 });
        });


})


	/*
	// check the url
    var testUrl = getUrlParameter('see');

    // check if new user
    if( testUrl ){
    	var email = decode(testUrl);
    	if( validateEmail(email) ){
    		$("#email").val( email )
    	}
    } 
    */
    /*else {
        // probably new user
        firstTrial = true;
        console.log("Normal url");
    }*/

    // $('.tooltip').tooltipster();
  	
  	/**
  		setup the form
  	*/
  	/*
    var $alert = $("#alert");

    $("form").on("submit", function(e){
    	e.preventDefault();
        $alert.empty().addClass("hide");
        var name = $("input[name='name']").val();
        var email = $("input[name='email']").val();
        var alerts = [];

        if( !validateEmail(email) ){
            alerts.push( $("<li></li>").html("Le champ email n'est pas valide") );
        } 

        if( !validateFullName(name) ){
            alerts.push( $("<li></li>").html("Le champ nom n'est pas valide") );
        } 

        if(alerts.length){
            $.each(alerts, function(key, element){
                $alert.append(element).removeClass("hide");
            })
        } else {
        	// update user informations
        	currentUser.name = name;
        	currentUser.email = email;
        	currentUser.url = encode(currentUser.email);
        	//AlphabeticID.encode(Math.round(Math.random() * new Date()));

	        // check if url exist
	        $.ajax({type: "POST",
	          url: "/test/userByUrl",
	          dataType: "json",
	          data : { url : currentUser.url },
	          success: function(result){
	          	console.log( result.data )
	          	// url invalid test already made
	            if(result.data.result){
	            	firstTrial = false;
	            	currentUser = result.data;
	            	currentUser.serie = currentUser.serie.split(",").map(Number);

	            	if( confirm("Vous avez déjà fait le test, voulez-vous le refaire ?")){
	            		transitionToTest();
	            	} else {
	            		window.location.href = '/'; 
	            	}
	            } 

	            if(!result.data){
	            	firstTrial = true;
	            	// url does not exist
	            	console.log( "url does not exist" );
	            	// show the test
	            	transitionToTest();
	            }
	          }
	        });
        }
    })

    // animation to test
    var transitionToTest = function(){
    	// change url
        window.history.pushState({}, '', '?see='+currentUser.url);
         // nice an smooth transition
    	$("#homeScreen").addClass("hide").velocity("transition.slideUpOut", { duration: 420 });
        // build the test design
        buildTest(function(){
        	$("#test").removeClass("hide").velocity("transition.slideUpIn", { duration: 420 });
        });
    }
    */

