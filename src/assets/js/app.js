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
  // window height
  function setHeight() {
    windowHeight = $(window).innerHeight();
    fullHeight = windowHeight - 100;
    $('.box-guide').css('min-height', fullHeight);
  };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });
});/* jshint ignore:start */
