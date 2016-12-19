/* TOOLS */



// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){
    window.setTimeout(callback, 1000 / 60);
  };
})();

(function($){
    $.fn.shuffle = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
    };
})(jQuery);


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateName(name) {
  if (/^[a-z0-9][a-z0-9._\-]*$/.exec(name)) {
    return true;
  }
  return false;
}

function validateFullName(str) {
  if (/^[a-zA-Z ]+$/.exec(str)) {
    return true;
  }
  return false;
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

/************** UTILS *******************/

function encode(string) {
    var number = "";
    var length = string.length;
    for (var i = 0; i < length; i++)
        number += string.charCodeAt(i).toString(16);
    return number;
}

function decode(number) {
    var string = "";
    var length = number.length;
    for (var i = 0; i < length;) {
        var code = number.slice(i, i += 2);
        string += String.fromCharCode(parseInt(code, 16));
    }
    return string;
}

function eliminateDuplicates(arr) {
    var i, len = arr.length,
        out = [],
        obj = {};

    for (i = 0; i < len; i++) {
        obj[arr[i]] = 0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}

var uniqid = function(str) {
    var len = str.length;
    var chars = [];
    for (var i = 0; i < len; i++) {
        chars[i] = str[Math.floor((Math.random() * len))];
    }
    var filtered = eliminateDuplicates(chars);
    return filtered.join('');
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var shuffleArray = function (arr) {
  var array = arr.slice(0);
  //keep the first
  var item = array.shift();
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  array.unshift(item);
  return array;
}

var orderArray = function (arr, order){
  var newOrder = [];
  for(var i = 0; i < order.length; i++){
    newOrder.push(arr[parseInt(order[i])]);
  }
  return newOrder;
}

var Vector = function(spot0, spot1) {
      this.u = spot1.u - spot0.u;
      this.v = spot1.v - spot0.v;
}


// get distance between
function distanceBetween(x1, y1, x2, y2) {
    var dx = x1 - x2, 
        dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
}



function pointInAngleDist(offset, start, to){
  var angle = Math.atan2(to.y - start.y - offset, to.x - start.x - offset);
  var angleDeg = (angle * 180 / Math.PI).toFixed(2);
  var dist = distanceBetween(start.x, start.y, to.x, to.y);
  var x =  (start.x - offset) + Math.cos(angle) * (dist*.5); 
  var y =  (start.y - offset) + Math.sin(angle) * (dist*.5); 
  return { x : x, y : y, angle : angleDeg}
}


/************** MOI *******************/

var MomentOfInertia = function(spots) {
  this.spots = spots;
  this.vectors = this.vectors();
  this.angle = this.angle();
  this.moments = this.moments();
  this.c_index = this.c_index();
  this.s_index = this.s_index();
  this.tes = this.tes();
};

MomentOfInertia.prototype.vectors = function() {
    vecs = [];
    for(i = 1; i < this.spots.length; i++) {
      vecs.push(new Vector(this.spots[i-1], this.spots[i]));
    }
    return vecs;
}
    
MomentOfInertia.prototype.angle = function() {
    var sum1 = 0;
    var sum2 = 0;
    for (i = 0; i < this.vectors.length; i++) {
      sum1 = sum1 + 2 * this.vectors[i].u * this.vectors[i].v;
      sum2 = sum2 + (Math.pow(this.vectors[i].u, 2) - Math.pow(this.vectors[i].v, 2));
    }
    var piAngle = Math.atan(sum1/sum2) / 2;
    return piAngle;
}
    
MomentOfInertia.prototype.moments = function() {
    moms = [];
    moms[0] = 0;
    moms[1] = 0;
    var angle1 = this.angle;
    var angle2;
    if (angle1 < 0) {
      angle2 = angle1 + (Math.PI / 2);
    } else {
      angle2 = angle1 - (Math.PI / 2);
    }
    for (i = 0; i < this.vectors.length; i++) {
      moms[0] = moms[0] + Math.pow(this.vectors[i].v * Math.cos(angle1) - this.vectors[i].u * Math.sin(angle1), 2);
      moms[1] = moms[1] + Math.pow(this.vectors[i].v * Math.cos(angle2) - this.vectors[i].u * Math.sin(angle2), 2);
    }
    moms[0] = Math.sqrt(moms[0] / this.vectors.length);
    moms[1] = Math.sqrt(moms[1] / this.vectors.length);
    if (moms[0] > moms[1] ) {
      this.majorRadius = moms[0];
      this.minorRadius = moms[1];
      this.majorAngle = (180 * angle2 / Math.PI);
    } else {
      this.majorRadius = moms[1];
      this.minorRadius = moms[0];
      this.majorAngle = (180 * angle1 / Math.PI);
    }
    return moms;
}
    
MomentOfInertia.prototype.c_index = function() {
  return (this.majorRadius / 9.23705);
}
    
MomentOfInertia.prototype.s_index = function() {
  return (this.majorRadius / this.minorRadius);
}

MomentOfInertia.prototype.tes = function() {
  return (Math.sqrt(Math.pow(this.majorRadius, 2) + Math.pow(this.minorRadius, 2)));
}



           
/*
// color coordinates are from Lu'v'
var DiscColor = Class.create({
    initialize: function(id, color, u, v) {
      this.id = id;
      this.color = color;
      this.u = u;
      this.v = v;
      this.element = null;
    }
});

// used for the Graph
var Square = Class.create({
    initialize: function(id, color, x, y) {
      this.id = id;
      this.color = color;
      this.x = x;
      this.y = y;
    },
    
    paint: function(graph) {
      graph.setColor(this.color);
      graph.fillRect(this.x, this.y, 8, 8);
      if ((this.id == "P") || (this.id <= 8)) {
        graph.drawString(this.id, this.x + 8, this.y - 12);
      } else if (this.id == 9) {
        graph.drawString(this.id, this.x + 8, this.y + 8);      
      } else {
        graph.drawString(this.id, this.x - 10, this.y + 8);
      }
    },
    
    connect: function(graph, otherSquare) {
      graph.setColor("#999");
      graph.drawLine(otherSquare.x + 3, otherSquare.y + 3, this.x + 3, this.y + 3);    
    }
});

var CoordPoint = Class.create({
    initialize: function(u, v) {
      this.minXcoord = 0;
      this.maxXcoord = 150;
      this.minXvalue = -35;
      this.maxXvalue = 35;
      this.minYcoord = 0;
      this.maxYcoord = 150;
      this.minYvalue = -35;
      this.maxYvalue = 35;
      this.xFactor = (this.maxXcoord - this.minXcoord) / (this.maxXvalue - this.minXvalue);
      this.yFactor = (this.maxYcoord - this.minYcoord) / (this.maxYvalue - this.minYvalue);
      this.u = u;
      this.v = v;
      this.xCoord = (this.v - this.minXvalue) * this.xFactor + this.minXcoord;
      this.yCoord = (this.u - this.minYvalue) * this.yFactor + this.minYcoord
    }
});

// Has to be global, as it is used from the Ajax callback
var testId;

// colors in correct order
var color_pilot = new DiscColor(0, '#3781C1', -21.54, -38.39);
var discs = [
  new DiscColor(1, '#3583B4', -23.26, -25.56),
  new DiscColor(2, '#3B84A7', -22.41, -15.53),
  new DiscColor(3, '#39859C', -23.11, -7.45),
  new DiscColor(4, '#3B8690', -22.45, 1.1),
  new DiscColor(5, '#3F8782', -21.76, 7.35),
  new DiscColor(6, '#588473', -14.08, 18.74),
  new DiscColor(7, '#6C8164', -2.72, 28.13),
  new DiscColor(8, '#837B5D', 14.84, 31.13),
  new DiscColor(9, '#907660', 23.87, 26.35),
  new DiscColor(10, '#9E6E6F', 31.82, 14.76),
  new DiscColor(11, '#9F6D7C', 31.42, 6.99),
  new DiscColor(12, '#9C6D89', 29.79, 0.1),
  new DiscColor(13, '#927099', 26.64, -9.38),
  new DiscColor(14, '#8F6FA4', 22.92, -18.65),
  new DiscColor(15, '#8073B2', 11.2, -24.61)];


var spots = new Array(discs.length);


var Arrangement = Class.create({
    initialize: function() {
      var discCount = discs.length;
      
      // TESTING ONLY: Comment if no shuffling requested!
      discs.sort( randOrd );
      
      var xspace_spots = 30;
      var xspace_discs = 31;
    
    var pilot_left = 48;
    var pilot_top = 80;

      $('spot_pilot').style.left = pilot_left - 2;
      $('spot_pilot').style.top = pilot_top - 2;
      $('disc_pilot').style.left = pilot_left;
      $('disc_pilot').style.top = pilot_top;
      $('disc_pilot').style.background = color_pilot.color;

      for (i = 1; i <= discCount; i++) {
        // set up spots
        $('spot' + i).style.left = (i)*xspace_spots + pilot_left - 2;
        $('spot' + i).style.top = pilot_top - 2;
        Droppables.add('spot' + i, { 
          accept: 'draggable',
          hoverclass: 'hover',
          onDrop: moveDiscIntoSpot
        });
        // set up discs
        var discEl = 'disc' + i;
        $(discEl).style.left = (i-1)*xspace_discs + pilot_left + 9;
        $(discEl).style.top = pilot_top + 55;
        $(discEl).style.background = discs[i - 1].color;
        discs[i - 1].element = $(discEl);
        new Draggable(discEl, { 
          revert: 'failure',
          starteffect: '',
          onStart: this.removeFromSpotList
        });
        
        // Testing: disable = false
        $('resultbutton').disabled = true;
        
        $('resultbutton').onclick = this.showResults.bindAsEventListener(this);
        $('detailedresultbutton').onclick = this.showDetailedResults.bindAsEventListener(this);
        // $('save_button').onclick = this.saveInfo.bindAsEventListener(this);
        
        this.resultButton_clicked = false;
        this.detailedResultButton_clicked = false;
        this.saveButton_clicked = false;
      }
    },

    removeFromSpotList: function(disc) {
      for (i = 0; i < spots.length; i++) {
        if (spots[i] && (spots[i].element.id == disc.element.id)) {
          delete spots[i];
        }
      }
      $('resultbutton').disabled = true;
    },
    
    showResults: function(e) {
        if (this.resultButton_clicked) return;
        this.resultButton_clicked = true;
        
        // TESTING ONLY: Comment out if not in testing mode!
        // for (i = 1; i <= spots.length; i++) {
        //   moveDiscIntoSpot(discs[i-1].element, $('spot' + i));
        // }

        Effect.Fade('droppable_container');
        Effect.Appear('graph_container', { queue: 'end' } );

        // The graph is plotten in a 90deg right turned Lu'v' diagram. This comes
        // closest to the original test result plot used.

        var graph = new jsGraphics($('canvas'));
        graph.setFont("arial", "10px", Font.NORMAL);

        // plot protan, deutan, tritan confusion lines
        graph.setStroke(1);
        graph.setColor("#aaa");
        var protanFirstPoint = new CoordPoint(35, 1.74);
        var protanSecondPoint = new CoordPoint(-35, -1.74);
        graph.drawLine(protanFirstPoint.xCoord, protanFirstPoint.yCoord, protanSecondPoint.xCoord, protanSecondPoint.yCoord);
        graph.drawString("protan", protanSecondPoint.xCoord - 30, protanSecondPoint.yCoord -3);
        var deutanFirstPoint = new CoordPoint(35, -7.77);
        var deutanSecondPoint = new CoordPoint(-35, 7.77);
        graph.drawLine(deutanFirstPoint.xCoord, deutanFirstPoint.yCoord, deutanSecondPoint.xCoord, deutanSecondPoint.yCoord);
        graph.drawString("deutan", deutanSecondPoint.xCoord, deutanSecondPoint.yCoord -3);
        var tritanFirstPoint = new CoordPoint(4.92, -35);
        var tritanSecondPoint = new CoordPoint(-4.92, 35);
        graph.drawLine(tritanFirstPoint.xCoord, tritanFirstPoint.yCoord, tritanSecondPoint.xCoord, tritanSecondPoint.yCoord);
        graph.drawString("tritan", tritanFirstPoint.xCoord - 7, tritanFirstPoint.yCoord - 13);

        graph.setColor('#666');        
        graph.setStroke(2);

        var squares = new Array();
        var pilot = new CoordPoint(color_pilot.u, color_pilot.v);
        squares.unshift(new Square("P", color_pilot.color, pilot.xCoord, pilot.yCoord));
        
        // plotting v on x-axis and v on y-axis!
        for (i = 0; i < spots.length; i++) {
          var nextSpot = new CoordPoint(spots[i].u, spots[i].v);
          squares.unshift(new Square(spots[i].id, spots[i].color, nextSpot.xCoord, nextSpot.yCoord));
          squares[0].connect(graph, squares[1]);
        }
        for (i = 0; i < squares.length; i++) {
          squares[i].paint(graph);
        }        
        
        graph.paint();
    },

    showDetailedResults: function(e) {
        if (this.detailedResultButton_clicked) return;
        this.detailedResultButton_clicked = true;

        spots.unshift(color_pilot);
        var moi = new MomentOfInertia(spots);
        
        $('angle').innerHTML = moi.majorAngle.toFixed(1);
        $('major_radius').innerHTML = moi.majorRadius.toFixed(1);
        $('minor_radius').innerHTML = moi.minorRadius.toFixed(1);
        $('tes').innerHTML = moi.tes.toFixed(1);
        $('s_index').innerHTML = moi.s_index.toFixed(2);
        $('c_index').innerHTML = moi.c_index.toFixed(2);

        Effect.Fade('graph_container', { queue: 'front' });
        Effect.Appear('result_container', { queue: 'end' });
        // if (moi.c_index.toFixed(2) > 1) {
        //   Effect.Appear('tag_email', { queue: 'end' });
        // }

        // CVD Type Criterions:
        // C-index: 1.6 (for cvd vs. normal)
        // Protan > +0.7 > Deutan > -65.0 > Tritan
        if (moi.c_index <= 1.6) {
          $('cvd_type').innerHTML = 'are <b>not colorblind</b>';
        } else if (moi.majorAngle >= +0.7) {
          $('cvd_type').innerHTML = 'have a <a href="http://www.color-blindness.com/2006/11/16/protanopia-red-green-color-blindness/" target="_top"><b>protan color vision defect</b></a>';
        } else if (moi.majorAngle < -65) {
          $('cvd_type').innerHTML = 'have a <a href="http://www.color-blindness.com/2006/05/08/tritanopia-blue-yellow-color-blindness/" target="_top"><b>tritan color vision defect</b></a>';
        } else {
          $('cvd_type').innerHTML = 'have a <a href="http://www.color-blindness.com/2007/04/17/deuteranopia-red-green-color-blindness/" target="_top"><b>deutan color vision defect</b></a>';
        }
        
        // Severity Criterions
        // C-index range: 1.6 - 4.2
        var max_width = 434;
        var adjusted_c = moi.c_index;
        if (adjusted_c < 1.6) adjusted_c = 1.6;
        if (adjusted_c > 4.2) adjusted_c = 4.2;
        $('severity_range').style.width = (adjusted_c - 1.6) * 434 / (4.2 - 1.6);
        
        this.saveResult();
    },
    
    saveResult: function() {
       var url = 'http://www.color-blindness.com/disc_arrangement/php/save_testresult.php';
       var pars = 'testtype=D-15&';
       pars += 'order=';
       for (i = 0; i < (spots.length-1); i++) {
        pars += spots[i].id + '-';
       }
       pars += spots[i].id;

       var myAjax = new Ajax.Request(url,
        { method: 'get',
            parameters: pars,
            onSuccess: function(transport) {
              testId = transport.responseText;
            }
        });        
    },

    saveInfo: function(e) {
        if (this.saveButton_clicked) return;
        this.saveButton_clicked = true;

        Effect.Fade('tag_email');
        Effect.Appear('thank_you', { queue: 'end' } );
        
        var url = 'http://www.colblindor.com/disc_arrangement/php/save_email.php';
        var pars = 'testid='+testId+"&";
        pars += 'email='+escape($('email').value);
//        var myAjax = new Ajax.Request(url, {  method: 'get', parameters: pars });
    }
    
});



*/






/*
DIM U(85),V(85),C(85)
INPUT "TYPE 1 FOR D-15, 2 FOR D-15DS, 3 FOR FM 100-HUE",TE
IF TE<> 1 AND TE<>2 AND TE<>3 THEN 20: REM ILLEGAL TEST NUMBER 40 IF TE=TO GOTO 100: REM SAME TYPE AS LAST TEST
REM RECALL U AND V
IF TE= 1 THEN RESTORE 500
IF TE=2 THEN RESTORE 600
IF TE=3 THEN RESTORE 700
READ H: REM NUMBER OF CAPS
SU=0:SV=0
FOR N=0 TO H: READ U(N),V(N): SU=SU+U(N): SV=SV+V(N): NEXT N
  PRINT "SUMS OF U AND V",SU,SV
  PRINT "ENTER CAP NUMBERS FROM PILOT CAP END" 105 PRINT "(FM 100 STARTS AT POSITION 85)"
  REM DATA ENTRY
  FORN=1TOH
  PRINT USING "##";N;: INPUT C(N)
  
  62 INVESTIGATIVE OPHTHALMOLOGY b VISUAL SCIENCE / January 1988
  Vol. 29
  IF C(N)>0 AND C(N)<=H AND C(N) = INT(C(N)) GOTO 150 140 PRINT "INPUT ERROR": GOTO 130
  REM CHECK FOR REPEA TED ENTRY
  FORM=1TON-1:IFC(M)oC(N)GOTO200
  PRINT "REPEATED ENTRY, TYPE 1 TO CORRECT CAP VALUE, 2 TO START AGAIN"; 180 INPUT P: IF P<> 1 AND P<>2 THEN 170: REM INCORRECT RESPONSE
  ON P GOTO 120,100
  NEXTM
  NEXTN
  IF TE=3 THEN C(O)=C(85) ELSE C(0)=0: REM CHOOSE FIRST CAP NUMBER
  REM CALCULATE SUMS OF SQUARES AND CROSS PRODUCTS
  U2=0: V2=0: UV=0
  FORN=1TOH
  DU=U(C(N))-U(C(N-1)): DV=V(C(N))-V(C(N-1)): REM COLOR DIFFERENCE VECTORS
  U2=U2+DU 2: V2=V2+DV 2: UV=UV+DU*DV
  NEXTN
  REM CALCULATE MAJOR AND MINOR RADII AND ANGLE
  D=U2-V2: IF D=0 THEN A0=.7854 ELSE A0=ATN(2*UV/D)/2: REM ANGLE
  I0=U2*SIN(A0) 2+V2*COS(A0) 2-2*UV*SIN(A0)*COS(A0): REM MAJOR MOMENT
  IF A0<0 THEN A1 = A0+1.5708 ELSE A1 = A0-1.5708: REM PERPENDICULAR ANGLE
  I1=U2*SIN(A1) 2+V2*COS(A1) 2-2*UV*SIN(A1)*COS(A1): REM MINOR MOMENT
  IF I0>I 1 THEN 340: REM CHECK THA T MAJOR MOMENT GREA TER THAN MINOR
  P=A0: A0=Al: A1=P: P=I0:10=11: Il=P: REM SWAP ANGLES & MOMENTS
  R0=SQR(I0/H): R1=SQR(I1/H): R=SQR(R0 2+Rl 2): REM RADII & TOTAL ERROR
  IF TE= 1 THEN R2=9.234669: PRINT "STANDARD D-15"
  IFTE=2 THEN R2=5.121259: PRINT "DESATURATED D-15"
  IF TE=3 THEN R2=2.525249: PRINT "FM-100 HUE"
  PRINT" ANGLE MAJ RAD MIN RAD TOT ERR S-INDEX C-INDEX" 390 PRINT USING "######.##"; 57.3*A 1, R0, R1, R, R0/R1, R0/R2
  T0=TE:GOTO20
  DATA 510 DATA 520 DATA 530 DATA 540 DA T A 550 DATA 600 DATA 610 DATA 620 DATA 630 DATA 640 DA T A 650 DATA 700 DATA 710 DATA 720 DATA 730 DATA 740 DATA 750 DATA 760 DATA 770 DATA 780 DATA 790 DATA 800 DATA 810 DATA 820 DATA 830 DATA 840 DATA 850 DATA 860 DATA 870 DATA
  15, -21.54, -38.39: REM STANDARD D-15 -23.26,-25.56,
  -22.45,1.10, -2.72,28.13 31.82,14.76
  26.64,-9.38,
  15, -4.77,-16.63: REM DESA TURA TED D-15
  -8.63,-14.65, -12.26,-2.67,
  1.30,15.78, 15.48,2.56, 11.06,-9.17,
  85,43.57,4.76: REM FM100-HUE
  -22.41,-15.53 -21.67,7.35
  14.84,31.13 31.42,6.99, 22.92,-18.65,
  -12.08,-11.94, -11.18,2.01,
  9.90,16.46, 14.76,-2.24,
  8.95,-12.39,
  44.07,13.62, 42.28,25.15, 33.38,38.03, 18.86,45.87,
  3.11,41.70, -8.53,33.19, -21.93,22.52,
  -27.35,9.52, -31.72,-2.42, -31.04,-14.30, -26.31,-29.24, -14.10,-35.21,
  -5.16,-37.08, 5.88,-31.18, 19.63,-24.79, 32.93,-12.30,
  40.90,-1.50,
  -23.11,-7.45 -14.08,18.74 23.87,26.35
  29.79,0.10 11.20,-24.61
  -12.86,-6.74 -7.02,9.12
  15.03,12.05 13.56,-5.04
  5.62,-15.20
  44.11,18.52 37.68,29.55 28.99,43.07 13.01,42.12
  -1.70,39.23 -15.07,27.89 -25.32,17.76 -29.54,5.10 -32.26,-8.16 -29.67,-19.59 -21.31,-32.92 -10.55,-37.74
  -.31,-33.94 9.75,-29.46 25.60,-20.51
  38.24,-8.88 43.57,4.76
  43.18,8.03, 42.92,20.64, 37.11,32.95, 25.00,44.12, 10.91,42.85,
  -4.14,36.66, -17.13,26.31, -25.10,13.29, -30.37,2.63, -29.86,-9.51, -28.61,-22.65, -19.15,-33.17,
  -8.49,-34.78, 1.55,-34.50, 12.24,-27.35, 26.94,-18.40,
  39.06,-6.81,
  44.37,11.34, 42.02,22.49, 35.41,35.94, 22.87,46.44,
  8.49,41.35, -6.57,32.41, -19.39,23.82,
  -26.58,11.87, -31.07,0.10, -31.13,-10.59, -27.76,-26.66, -16.00,-34.90
  -7.21,-35.44, 3.68,-30.63, 15.61,-25.68, 29.39,-16.29,
  39.51,-3.03,
  44.95,16.04, 40.96,27.78, 30.88,39.59, 15.47,44.97,
  .68,39.23, -10.98,31.47, -23.40,20.14,
  -28.41,7.26, -31.44,-5.13, -29.10,-17.32, -23.16,-31.24, -12.47,-35.84,
  -3.00,-35.95, 8.46,-29.46, 21.20,-22.83 34.96,-11.57,
  42.80,0.60,
  
*/










/*

// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
var s = Snap("#svg");
// Lets create big circle in the middle:
var bigCircle = s.circle(150, 150, 100);
// By default its black, lets change its attributes
bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
});
// Now lets create another small circle:
var smallCircle = s.circle(100, 150, 70);
// Lets put this small circle and another one into a group:
var discs = s.group(smallCircle, s.circle(200, 150, 70));
// Now we can change attributes for the whole group
discs.attr({
    fill: "#fff"
});
// Now more interesting stuff
// Lets assign this group as a mask for our big circle
bigCircle.attr({
    mask: discs
});
// Despite our small circle now is a part of a group
// and a part of a mask we could still access it:
smallCircle.animate({r: 50}, 1000);
// We don’t have reference for second small circle,
// but we could easily grab it with CSS selectors:
discs.select("circle:nth-child(2)").animate({r: 50}, 1000);
// Now lets create pattern
var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 5
    });
// To create pattern,
// just specify dimensions in pattern method:
p = p.pattern(0, 0, 10, 10);
// Then use it as a fill on big circle
bigCircle.attr({
    fill: p
});
// We could also grab pattern from SVG
// already embedded into our page
discs.attr({
    fill: Snap("#pattern")
});
// Lets change fill of circles to gradient
// This string means relative radial gradient
// from white to black
discs.attr({fill: "r()#fff-#000"});
// Note that you have two gradients for each circle
// If we want them to share one gradient,
// we need to use absolute gradient with capital R
discs.attr({fill: "R(150, 150, 100)#fff-#000"});
// Of course we could animate color as well
p.select("path").animate({stroke: "#f00"}, 1000);
// Now lets load external SVG file:
Snap.load("mascot.svg", function (f) {
    // Note that we traversre and change attr before SVG
    // is even added to the page
    f.selectAll("polygon[fill='#09B39C']").attr({fill: "#bada55"});
    g = f.select("g");
    s.append(g);
    // Making croc draggable. Go ahead drag it around!
    g.drag();
    // Obviously drag could take event handlers too
    // That’s better! selectAll for the rescue.
});
// Writing text as simple as:
s.text(200, 100, "Snap.svg");
// Provide an array of strings (or arrays), to generate tspans
var t = s.text(200, 120, ["Snap", ".", "svg"]);
t.selectAll("tspan:nth-child(3)").attr({
    fill: "#900",
    "font-size": "20px"
});
 

 */
