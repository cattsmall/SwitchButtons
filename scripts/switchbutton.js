$(document).ready(function() {
	$(".switch-button").click( function() {
		$(this).toggleClass("active");
	});
	
	$('.switch-button-group.rating > .switch-button').click( function(){
		if ($(this).is(":not(active)")){
			$(this).addClass("active");
		}	
		$(this).prevAll(".switch-button").addClass("active");
		$(this).nextAll(".switch-button").removeClass("active");
	});
});
