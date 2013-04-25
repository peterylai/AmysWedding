$(document).ready(function(){
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  var scrolltime = 500;

  $('#welcome-nav, #ourstory-nav, #info-nav, #registry-nav, #photos-nav, #rsvp-nav, #extras-nav').click(function(ev){
    ev.preventDefault();
    var nav_id = $(this).attr('id');
    var section_name = '#' + nav_id.substring(0, nav_id.length - 4);
    $.scrollTo(section_name, scrolltime );
  });

  $('#justin').mouseenter(function() {
    $('#danger').stop().fadeIn(500);
  }).mouseleave(function() {
    $('#danger').stop().fadeOut(500);
  });

  $('#amy').mouseenter(function() {
    $('#doesnt').fadeIn(500);
  }).mouseleave(function() {
    $('#doesnt').fadeOut(500);
  });

});