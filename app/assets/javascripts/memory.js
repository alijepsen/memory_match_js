$(document).ready(function() {
 var firstCard, secondCard;

 $('.cards').click(function() {
   var card = $(this).children();

   if(!firstCard) {
     firstCard = card;
     card.show();
   } else {
     secondCard = card;
     card.show();
     matchCards(firstCard, secondCard);
   }
 });

  function matchCards(first, second) {
    if (first.attr('class') === second.attr('class')){
      first.fadeOut(750);
      second.fadeOut(750);
      swal({
        title: "Good job!",
        text: "You got a match!",
        type: 'success',
        timer: 1500,
        showConfirmButton: false
      });
      firstCard = null
      secondCard = null
    } else {
      first.fadeOut(850);
      second.fadeOut(850);
      //swal("Nope!", "Not a match, try again", "error")
      swal({
        title: "Not a Match!",
        text: "Try again...",
        type: 'warning',
        timer: 1200,
        showConfirmButton: false
      });
      firstCard = null
      secondCard = null
    }
  }

});




