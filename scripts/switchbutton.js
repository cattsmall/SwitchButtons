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
	
	
	// Lock/unlock toggle 
	// if you're using an icon font that targets CSS classes, remove the optional section.
	$(".switch-button.lock-unlock").click( function(e) {
		// checks if the icon is a lock icon class. If so, it changes it to unlock
		if ($(this).find("i").is(".foundicon-lock")){
			$(this).find(".foundicon-lock").addClass("foundicon-unlock");
			$(this).find(".foundicon-lock").removeClass("foundicon-lock");
		}
		
		// else, it checks if it's an unlock icon.
		else if ($(this).find("i").is(".foundicon-unlock")){
			$(this).find(".foundicon-unlock").addClass("foundicon-lock");
			$(this).find(".foundicon-unlock").removeClass("foundicon-unlock");
		}
		
		// OPTIONAL check for active class on the button. Use for unicode symbols.
		else if ($(this).is(".active")){
			$(this).find("i").html("&#x1F512;");
		}
		
		// OPTIONAL else in case active class is not on the button. Use for unicode symbols.
		else {
			$(this).find("i").html("&#x1F513;");
		}
		e.preventDefault();
	});
})(jQuery);