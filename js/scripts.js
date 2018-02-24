/*var url = 'http://api.icndb.com/jokes/random';

window.onload = getJoke();


var $button = $('#get-joke').click(function() {
	getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
$.ajax({
	method: 'GET',
	url: url, 
	success: function(res) {
		$paragraph.text(res.value.joke);
	}

});
}
*/

var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
var prefix = "https://cors-anywhere.herokuapp.com/";

function getQuote() {
	showLoad();
    $.getJSON(prefix + quoteUrl).done(createTweet).fail(function(data) {
    	hideLoad();
    	alert('error');
    }); 
}

function showLoad() {
	$(".trigger").hide();
	$(".loader").show();
}

function hideLoad() {
	$(".loader").hide();
	$(".trigger").show();
}

function createTweet(input) {
	hideLoad();
    var data = input[0];

    var quoteText = $(data.content).text().trim();
    var quoteAuthor = data.title;

    if (!quoteAuthor.length) {
        quoteAuthor = "Unknown author";
    }

	var tweetText = "Quote of the day - " + quoteText + " Author: " + quoteAuthor;    
	if (tweetText.length > 140) {
		console.log('higher than 140');
	    getQuote();
	} else {
	    var tweet = tweetLink + encodeURIComponent(tweetText);
	    $('.quote').text(quoteText);
	    $('.author').text("Author: " + quoteAuthor);
	    $('.tweet').attr('href', tweet);
	}
}

$(document).ready(function() {
	$.ajaxSetup({ cache: false });
    getQuote();
    $('.trigger').click(function() {
        getQuote();
    });
});