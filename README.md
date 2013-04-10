SwitchButtons
============

SwitchButtons are a simple set of jQuery-based toggle buttons for faster prototyping in code.

For examples, check out the demo site: http://cattsmall.github.io/SwitchButtons/


* Using SwitchButtons *
-----------------------
Using Switchbuttons is very simple.

1. Get jQuery

2. Add switchbuttons.js to your main JavaScript file or folder

3. Add switchbutton.css to your main CSS file or folder

4. Attach Switchbuttons.js to any pages on which toggle buttons are needed

5. Copy and paste the SwitchButton you need from the demo site or this readme!


* List of SwitchButtons + code *
--------------------------------

1. Star - Use for favoriting or rating</h5>

*Basic favorite button:*

	<button class="switch-button star"><i class="foundicon-star"></i></button>


*Favorite all button:*

Add the "star-all" class to the button, then add "switch-button-target" to the other buttons you wish to trigger.

	<button class="switch-button star star-all"><i class="foundicon-star"></i></button>

Example of target:	

	<div class="example">
		<button class="switch-button switch-button-target star"><i class="foundicon-star"></i></button>
		<button class="switch-button switch-button-target star"><i class="foundicon-star"></i></button>
		<button class="switch-button switch-button-target star"><i class="foundicon-star"></i></button>
		<button class="switch-button switch-button-target star"><i class="foundicon-star"></i></button>
	</div>

Feel free to duplicate & edit the JavaScript if you ever need more than one set of targeted favorite buttons on a page.


*Rating stars:*	

	<div class="switch-button-group rating">
		<button class="switch-button star"><i class="foundicon-star"></i></button>
		<button class="switch-button star"><i class="foundicon-star"></i></button>
		<button class="switch-button star"><i class="foundicon-star"></i></button>
		<button class="switch-button star"><i class="foundicon-star"></i></button>
	</div>
	
	

2. Heart - Use to show appreciation

	<button class="switch-button heart"><i class="foundicon-heart"></i></button>


3. Thumbsup - Use for liking content

	<button class="switch-button thumbsup"><i class="foundicon-social-thumb-up"></i></button>


4. Delete/Ban - Signify deletion or banning

	<button class="switch-button ban"><i class="foundicon-remove"></i></button>


5. Checkbox - Can be used to check one option or check & uncheck all targeted checkboxes

*Bacic checkbox button:*

	<button class="switch-button checkbox"><i class="foundicon-checkmark"></i></button>


*Check all button:*

	<button class="switch-button checkbox check-all"><i class="foundicon-checkmark"></i></button>
	<div class="example">
		<input type="checkbox" class="switch-button-target checkbox">
		<input type="checkbox" class="switch-button-target checkbox">
		<input type="checkbox" class="switch-button-target checkbox">
		<input type="checkbox" class="switch-button-target checkbox">
		<input type="checkbox" class="switch-button-target checkbox">
	</div>


6. Alert bell/flag - Can be used to toggle alerts or an alarm for a later date

	<button class="switch-button alert"><i class="foundicon-flag"></i></button>


7. Lock - Can be used to signify that something is secured on click

	<button class="switch-button lock"><i class="foundicon-lock"></i></button>


------------------------------------------------------------------------------------

Thanks! If you have any questions, tweet me @CattSmall.