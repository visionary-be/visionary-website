$(document).ready(function(){
    var data = {},
		colorOrder = [],
		order = [],
		$colorList = $("#list-normal"),
		colorListItems = '',
		result = {},
		sortable = true,
		sortableIsActive = false,
		key, choice,
		types = {
        	"succeed" : "Aucun",
        	"protan" : "Protane (Rouge - bleu vert)",
        	"deutan" : "Deutan (Vert - rouge pourpre)",
        	"tritan" : "Tritane (Violet - jaune vert)",
        },
    	buildTest = function(callback){
	    	$.getJSON("/assets/js/data/data.json", function(json){

	    		data = json;

				colorOrder = shuffleArray(data.colors);

				drawDom();

				$('#choices .pick').shuffle();
				$('#choices .pick').each(function(i, k){
					$(this).find("a").text(i + 1);
				});

				$("html").addClass("js-testDeClassement");

				$(window).trigger('resize');
				if(callback) {
					callback();	
				}
			})
    	},
		updateOrder = function(){

			//console.log("updateOrder");
			order = [];
			$colorList.find("li").each(function () {
				if($(this).data("item") !== undefined){
					order.push(parseInt($(this).data("item")))
				}
			})
			$("#diag_serie").val(order.join(","));
			//order[0] = "P";
			//$(".currentOrder").html(order.join(" - "));
			//order[0] = 0;

			colorOrder = orderArray(data.colors, order);
				
			if(sortable) {
				
				if(!sortableIsActive){
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

					sortableIsActive = true;
				}

			} else {
				$("#list-normal").removeClass("sortable").sortable({ disabled: true });
				$(".color-item").first().removeClass("pilot ignore");
			}

			$(window).trigger('resize');
			result = new MomentOfInertia(colorOrder);
			checkResult();
		},

		drawDom = function(){
			//console.log("drawDom");
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

		checkResult = function() {
			// console.log("checkResult");

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
	        
	        // add some properties
	        result.serie = order;
	        result.result = cvd_type;
	        result.ratio = Math.round((adjusted_c - 1.6) * 100 / (4.2 - 1.6)) + "%";

	        // update de the form
	        for(var item in result){
	        	var value, float = parseFloat(result[item]);
	        	switch(item){
	        		case "angle": value = float.toFixed(1); break;
					case "c_index": value = float.toFixed(2); break;
					case "majorAngle": value = float.toFixed(1); break;
					case "majorRadius": value = float.toFixed(1); break;
					case "minorRadius": value = float.toFixed(1); break;
					case "s_index": value = float.toFixed(2); break;
					case "tes": value = float.toFixed(1); break;
					case "serie": value = result[item].join(","); break;
					case "result": value = result[item]; break; 
					case "ratio": value = result[item]; break; 
	        	}
	        	$("#"+item).val(value);
	        }
	        
	    };

	    if( $( "#test" ).length ){
			buildTest(function(){
	        	$("#test").removeClass("hide").velocity("transition.slideUpIn", { duration: 420 });
	        });
		}

})