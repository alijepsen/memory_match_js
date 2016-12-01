
var points = 0;
var score = $("h2");
var card = $(".game li");

$(document).ready(function() {

  var $cards = $('.cards');
  var $firstCard, $secondCard;

  card.click(function () {

  if ( $(this).hasClass('matched') ) {
    return;
}

  /* Toggle the flip class */
  $(this).toggleClass("flipped");

  /* Get all of the currently flipped cards */
  var flipped = $(".flipped").not(".matched");

  /* Check to make sure at least 2 are flipped */

  if ( flipped.length === 2 ) {
    /* Select the first and second cards from the collection */
    var firstCard = flipped.first();
    var secondCard = flipped.last();

    /* Compare to see if the first and second in our collection are equal */
    if ( firstCard.text() === secondCard.text() ) {
      points++;
      score.text("You've found " + points + " matches.");
      firstCard.addClass("matched");
      secondCard.addClass("matched");
    } else {

      setTimeout(function () {
        firstCard.removeClass("flipped");
        secondCard.removeClass("flipped");
    }, 1000);

    }

    /*


    */
  } //endif

});


