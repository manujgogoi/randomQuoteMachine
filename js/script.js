$(document).ready(function() {
  function randomQuote() {
        $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success : function(response) {
        $("#quote #body").html('<i class="fa fa-xl fa-quote-left" aria-hidden="true"></i> ' + response.quoteText + ' <i class="fa fa-xl fa-quote-right" aria-hidden="true"></i>');
        $("#quote #author").html("-----" + response.quoteAuthor);

        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
    });
  }

  $(function() {
    randomQuote();
  });

  $('#btn-next').click(function() {
    randomQuote();
  });
});
