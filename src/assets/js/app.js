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
  // window height (guide)
  function setHeight() {
    windowHeight = $(window).innerHeight();
    headerHeight = $('#header').innerHeight()+60;
    fullHeightBox = windowHeight - headerHeight;
    fullHeightContent = windowHeight - headerHeight - 80;
    $('.box-guide').css('min-height', fullHeightBox);
    $('.box-guide-content').css('height', fullHeightContent);
  };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });

});/* jshint ignore:start */
