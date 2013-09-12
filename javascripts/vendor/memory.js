var shuffle = function(array) {
  var new_ary = [];
  for (var i in array){
     new_ary[i] = array[i];
  }
  for (i = new_ary.length - 1; i > 1 ; i--) {
     var j = Math.floor(Math.random()*i);
     var temp = new_ary[i];
     new_ary[i] = new_ary[j];
     new_ary[j] = temp;
  }
  return new_ary;
};

var stop_game = function(){
  clearInterval(clock);
}

$(document).ready(function() {
  var images = ['url(images/teton.jpg)', 'url(images/engagement.jpg)', 'url(images/beijing.jpg)', 'url(images/wyoming.jpg)', 'url(images/lionhead.jpg)', 'url(images/balloons.jpg)', 'url(images/minigolf.jpg)', 'url(images/reunions.jpg)', 'url(images/lawnmower.jpg)', 'url(images/hat.jpg)', 'url(images/cornmaze.jpg)', 'url(images/rainy.jpg)', 'url(images/hi.jpg)', 'url(images/lantern.jpg)'];
  var time_limit = 90000;
  var cards = shuffle(images.concat(images));
  var num_cards = cards.length;
  for (var i = 0; i < num_cards; i++) {
    $('.playspace').append($('<div/>').addClass('card hidden').attr('id', cards[i]));
    $('.card:last').prepend($('<div/>').hide().addClass('answer').css('background-image', cards[i]));
  }
  var first_guess = true;
  var $first_card;
  var guess_counter = 0;
  var match_counter = 0;
  var best_score = null;
  var best_time = null;
  var game_started = false;

  var update_bests = function(){
    var solution_time = time_limit/1000 - $('#time').text();
    if (best_score === null) {
      best_score = guess_counter;
      best_time = solution_time;
    } else {
      best_score = Math.min(best_score, guess_counter);
      best_time = Math.min(best_time, solution_time);
    }
    $('.best_score').text(best_score);
    $('.best_time').text(best_time + " secs");
  };

  var update_clock = function(){
    var old_time = $('#time').text();
    $('#time').text(old_time - 1);
    if (old_time - 1 == 0) {
      show_missed();
    }
  }

  var show_missed = function(){
    stop_game();
    $('.card:not(".matched")').addClass('missed').removeClass('hidden');
    $('.card').children('div').show();
    $('.alert').text('Out of time!').slideDown();
  }

  var reset = function(){
    stop_game();
    $('.alert').slideUp();
    $('.card').removeClass('matched').removeClass('missed').addClass('hidden');
    $('.playspace').empty();
    cards = shuffle(cards);
    for (var i = 0; i < num_cards; i++) {
      $('.playspace').append($('<div/>').addClass('card hidden').attr('id', cards[i]));
      $('.card:last').prepend($('<div/>').hide().addClass('answer').css('background-image', cards[i]));
    }
    $('#time').text(time_limit/1000);
    guess_counter = 0;
    match_counter = 0;
    $('.guess_counter').text(guess_counter);
    $('.match_counter').text(match_counter);
    first_guess = true;
    game_started = false;
  };

  $('#reset').on('click', function(){
    reset();
  });

  $('.playspace').on('show', '.card', function(){
      $(this).removeClass('hidden');
      $(this).children('div').show();
    }).on('hide', '.card', function() {
      $(this).addClass('hidden');
      $(this).children('div').delay(2000).fadeOut();
    }).on('click', '.card', function() {
      if (game_started === false) {
        game_started = true;
        clock = setInterval(function(){ update_clock() }, 1000)
      }
      if ($(this).hasClass('hidden')) {
        if (first_guess === true) { //first card
          $('.card.hidden div').stop(true, true).hide();
          $first_card = $(this);
          $(this).trigger('show');
          first_guess = false;
        } else { //second card
          if ($first_card.attr('id') === $(this).attr('id')) { //match
            $(this).trigger('show');
            $(this).addClass('matched');
            $first_card.addClass('matched');
            match_counter++;
            $('.match_counter').text(match_counter);
          } else { //no match
            $(this).trigger('show');
            $first_card.trigger('hide');
            $(this).trigger('hide');
          }
          first_guess = true;
          guess_counter++;
          $('.guess_counter').text(guess_counter);
        }
      }
      if ($('.matched').length === num_cards) {
        stop_game();
        update_bests();
        $('.alert').text('You win!').slideDown();
      }
    });
});
