(function($) {
	
	
	// basic SwitchButtons click function
	$(".switch-button").click( function(e) {
		$(this).toggleClass("active");
		e.preventDefault();
	});
	
	
	// rating
	$('.switch-button-group.rating > .switch-button').click( function(e){
		// if this button isn't active yet, add the active class
		if ($(this).is(":not(active)")){
			$(this).addClass("active");
		}	
		
		// add active class to all SwitchButtons before the clicked one
		$(this).prevAll(".switch-button").addClass("active");
		
		// remove active class from all SwitchButtons after the clicked one
		$(this).nextAll(".switch-button").removeClass("active");
		e.preventDefault();
	});
	
	
	// Star all
	$('.switch-button.star-all').click( function(e){
		// determines whether the clicked button becomes active. If yes, all target buttons become .active
		if ($(this).is(".active")){
			$(".switch-button-target.star").addClass("active");
		}	
		
		// if the clicked button doesn't become active, all the target buttons become inactive
		else {
			$(".switch-button-target.star").removeClass("active");
		}	
		e.preventDefault();
	});
	
	
	// Check all
	$('.switch-button.check-all').click( function(e){
		// determines whether the clicked button becomes active. If yes, all checkboxes are checked
		if ($(this).is(".active")){
			$(".switch-button-target.checkbox").prop('checked', true);
		}	
		
		// if the clicked button doesn't become active, all the checkboxes are unchecked
		else {
			$(".switch-button-target.checkbox").prop('checked', false);
		}	
		e.preventDefault();
	});
})(jQuery);