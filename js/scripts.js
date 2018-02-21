var url = 'http://api.icndb.com/jokes/random';

window.onload = getJoke();


var $button = $('#get-joke').click(function() {
	getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
$.ajax({
	method: 'GET',
	url: url, //here's a weird construction, but on the left we have the name of the parameter, and to the right is the name of the variable that holds the value
	success: function(res) {
		$paragraph.text(res.value.joke);
	}

});
}


var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

function getQuote() {
    $.getJSON(quoteUrl, createTweet);
}