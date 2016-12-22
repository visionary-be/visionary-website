$(document).ready(function(){
    var data = {},
    	stageWidth = parseInt($("#stage").attr("width")), // 400
		stageHeight = parseInt($("#stage").attr("height")), // 360
		colorOrder = [],
		order = [],
		$colorList = $("#list-normal"),
		$btnPrint = $(".js-print"),
		key, 
    	buildResult = function(callback){
	    	$.getJSON("/assets/js/data/data.json", function(json){
	    		data = json;
				order = $("#scheme").data("serie").split(",");
				colorOrder = orderArray(data.colors, order);
				scaleCoords();
				drawGraph();
				
				$btnPrint.on("click", function(e){
					window.print();
					e.preventDefault();
					return false;
				})

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

			var textPosition = pointInAngleDist(5, data.protan.from, data.protan.to);

			var $textProtan = $(document.createElementNS("http://www.w3.org/2000/svg","text"));
				$textProtan
					.text("Protan")
					.css({"font-size" : "12px","transform" : "translate("+textPosition.x+"px, "+textPosition.y+"px) rotate("+textPosition.angle+"deg)" })
					.attr("x", 0).attr("y", 0);

			//  DEUTANE
			var $lineDeutane = $(document.createElementNS("http://www.w3.org/2000/svg","line"));
			    $lineDeutane
			    	.attr("x1", data.deutan.from.x ).attr("y1", data.deutan.from.y )
			    	.attr("x2", data.deutan.to.x ).attr("y2", data.deutan.to.y )
			    	.attr("stroke", "#aaffaa").attr("stroke-width", lineThick);

			var textPosition = pointInAngleDist(-10, data.deutan.from, data.deutan.to);
			var $textDeutane = $(document.createElementNS("http://www.w3.org/2000/svg","text"));
				$textDeutane
					.text("Deutane")
					.css({"font-size" : "12px","transform" : "translate("+textPosition.x+"px, "+textPosition.y+"px) rotate("+textPosition.angle+"deg)" })
					.attr("x", 0).attr("y", 0)

			//  TRITANE
			var $lineTritane = $(document.createElementNS("http://www.w3.org/2000/svg","line"));
			    $lineTritane
			    	.attr("x1", data.tritan.from.x ).attr("y1", data.tritan.from.y )
			    	.attr("x2", data.tritan.to.x ).attr("y2", data.tritan.to.y )
			    	.attr("stroke", "#aaaaff").attr("stroke-width", lineThick);

			var textPosition = pointInAngleDist(-10, data.tritan.from, data.tritan.to);
			var $textTritane = $(document.createElementNS("http://www.w3.org/2000/svg","text"));
				$textTritane
					.text("Tritane")
					.css({"font-size" : "12px","transform" : "translate("+textPosition.x+"px, "+textPosition.y+"px) rotate("+textPosition.angle+"deg)" })
					.attr("x", 0).attr("y", 0)


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

			$stage.append($lineProtane);
			$stage.append($lineDeutane);
			$stage.append($lineTritane);

			$stage.append($textProtan);
			$stage.append($textDeutane);
			$stage.append($textTritane);
		};

		if( $( "#stage" ).length ){
			buildResult();	
		}

})

