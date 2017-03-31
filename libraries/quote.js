var currentQuote = "";
var currentAuthor = "";

function displayQuote() {
  $("#myquote").html("Loading..."); //Change button to Loading...
  $("#myquote").addClass("disabled"); // Disable button to avoid multiple ajax call
  $.ajax({
    headers: {
      "X-Mashape-Key": "IF4UVymxfGmshHkYK5dLJaKQuyDkp1bkewUjsnf23lgIXxVvz7",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
    complete: function(jqXHR, textStatus) {
      $("#myquote").html("Next Quote"); //Revert button text to origin
      $("#myquote").removeClass("disabled"); //Remove class disable after ajax call is complete
    },
    success: function(response) {
      var quote = JSON.parse(response);
      currentQuote = quote.quote;
      currentAuthor = quote.author;
      $("#quote-content").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#quote-text').text(quote.quote);
        });

      $("#quote-author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').html(quote.author);
        });
    }
  });
};
$(document).ready(function() {
  displayQuote();
  $('#myquote').on('click', displayQuote);
});
