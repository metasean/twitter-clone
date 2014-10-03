$(document).ready( function (){

	// Hide the button and char count on load
	$('#tweet-controls').hide();



    $(".tweet-compose").focus(function() {
    	$(this).animate({
    		height: "5em"
    	}, "normal");
    	$('#tweet-controls').show();
    });

});