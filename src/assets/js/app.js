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
});/* jshint ignore:start */
