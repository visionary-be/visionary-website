$(document).ready(function() {
  //
  jQuery.fn.extend({
     //lettrine
     changeLettrine: function () {
       $(this).each(function(){
          var lettrine = $(this).html().charAt(0);
          $(this).attr( 'data-lettrine', lettrine );
        });
     }
  });

  jQuery.fn.extend({
    //video
    setVideoBg: function () {
      $(this).each(function(){
         var windowWidth = $( window ).width();
         var fullWidthBox = windowWidth - 40;
         $(this).css('width', fullWidthBox);
       });
    }
  });

  $('.lettrine').changeLettrine();
  // close off-canvas
  $( '#menu-offcanvas-close' ).click(function() {
    UIkit.offcanvas.hide();
  });
  // video dimensions
  $('#home-hero-vid').setVideoBg();
  $(window).resize(function() {
    $('#home-hero-vid').setVideoBg();
  });

});/* jshint ignore:start */
