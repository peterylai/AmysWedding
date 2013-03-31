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

})