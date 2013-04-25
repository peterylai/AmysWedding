$(document).ready(function(){
    var ctr = 0;
    $('#yes').hover(
      function() {
        $(this).text('Enter site');
      },
      function() {
        $(this).text('Yes');
      });
    $('#yes').on('click', function(e){
      e.preventDefault();
      $('body').fadeOut(1000, function() {
        window.location = 'home.html';
      });
    })
  $('#no').bind('mouseover', function(){
    if (ctr < 20) {
      var random_int = Math.random()*250;
      var random_int2 = Math.random()*300;
      var animate_left;
      var animate_top;
      if (Math.abs(random_int - $(this).position().left) > 100) {
        animate_left = random_int;
      } else if ($(this).position().left < 200) {
        animate_left = '+=200px';
      } else {
        animate_left = '-=200px';
      }
      if (Math.abs(random_int - $(this).position().top) > 100) {
        animate_top = random_int2;
      } else if ($(this).position().top < 200) {
        animate_top = '+=200px';
      } else {
        animate_top = '-=200px';
      }
      $(this).animate({
        left: animate_left,
        top: animate_top,
        opacity: '-=0.04',
      }, 3);
      ctr += 1;
    } else {
      $(this).animate({
        left: '-=500'
      }, 5000);
    }
  });
  $('#no').bind('click', function() {
    $('body').fadeOut(1000, function() {
      window.location = 'lasers.html';
    });
  });
});