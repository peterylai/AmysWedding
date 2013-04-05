$(function(){

  var scrolltime = 500;

  $('#welcome-nav').click(function(ev){
    ev.preventDefault();
    $.scrollTo('#welcome', scrolltime );
  });

  $('#ourstory-nav').click(function(ev){
    ev.preventDefault();
    $.scrollTo('#ourstory', scrolltime );
  });

  $('#weddingevents-nav').click(function(ev){
    ev.preventDefault();
    $.scrollTo('#weddingevents', scrolltime );
  });

  $('#location-nav').click(function(ev){
    ev.preventDefault();
    $.scrollTo('#location', scrolltime );
  });

  $('#registry-nav').click(function(ev){
    ev.preventDefault();
    $.scrollTo('#registry', scrolltime );
  });

  $('#photos-nav').click(function(ev){
    ev.preventDefault();
    $.scrollTo('#photos', scrolltime );
  });

  $('#rsvp-nav').click(function(ev){
    ev.preventDefault();
    $.scrollTo('#rsvp', scrolltime );
  });

})