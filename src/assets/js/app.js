$(document).ready(function() {
  //
  jQuery.fn.extend({
     changeLettrine: function () {

       $(this).each(function(){
          var lettrine = $(this).html().charAt(0);
           $(this).attr( "data-lettrine", lettrine );
        });
     }
  });
  $(".lettrine").changeLettrine();
  // close off-canvas
  $( "#menu-offcanvas-close" ).click(function() {
    UIkit.offcanvas.hide();
  });
});/* jshint ignore:start */
