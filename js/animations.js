$(document).ready( function (){

	// Hide the button and char count on load
	$('#tweet-controls').hide();



    $(".tweet-compose").focus(function() {
    	$(this).animate({
    		height: "5em"
    	}, "normal");
    	$('#tweet-controls').show();
    });

    $('.tweet-compose').keypress(function() {
        var charCount = 139 - $('.tweet-compose').val().length;
        $('#char-count').html(charCount);
    });

});

// $("tweet-compose").on('click', function() {
// 	$(this).height(66);
// });