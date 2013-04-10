(function($) {
	$(".switch-button").click( function(e) {
		$(this).toggleClass("active");
		e.preventDefault();
	});
	
	$('.switch-button-group.rating > .switch-button').click( function(e){
		if ($(this).is(":not(active)")){
			$(this).addClass("active");
		}	
		$(this).prevAll(".switch-button").addClass("active");
		$(this).nextAll(".switch-button").removeClass("active");
		e.preventDefault();
	});
	
	$('.switch-button.star-all').click( function(e){
		if ($(this).is(".active")){
			$(".switch-button-target.star").addClass("active");
		}	
		else {
			$(".switch-button-target.star").removeClass("active");
		}	
		e.preventDefault();
	});
	
	$('.switch-button.check-all').click( function(e){
		if ($(this).is(".active")){
			$(".switch-button-target.checkbox").prop('checked', true);
		}	
		else {
			$(".switch-button-target.checkbox").prop('checked', false);
		}	
		e.preventDefault();
	});
})(jQuery);