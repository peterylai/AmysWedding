$(function(){

  var scrolltime = 500;

  $('#welcome-nav').click(function(){
    $.scrollTo('#welcome', scrolltime );
  });

  $('#ourstory-nav').click(function(){
    $.scrollTo('#ourstory', scrolltime );
  });

  $('#weddingevents-nav').click(function(){
    $.scrollTo('#weddingevents', scrolltime );
  });

  $('#location-nav').click(function(){
    $.scrollTo('#location', scrolltime );
  });

  $('#registry-nav').click(function(){
    $.scrollTo('#registry', scrolltime );
  });

  $('#photos-nav').click(function(){
    $.scrollTo('#photos', scrolltime );
  });

})