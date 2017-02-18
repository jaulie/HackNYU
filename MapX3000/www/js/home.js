// Variables
var changeSearchTypeBtn = document.getElementById('change_search_type_btn');
var searchBar = document.getElementById('searchBar');
var searchBarDiv = document.getElementsByClassName('search_bar_div')[0];

var foodBtn = $('#foodBtn');
var eventsBtn = $('#eventsBtn');
var drivingBtn = $('#drivingBtn');

var foodOptions = $('.food_search_options_menu_hidden');
var eventsOptions = $('.events_search_options_menu_hidden');
var drivingOptions = $('.driving_search_options_menu_hidden');
var foodOptionChoices = $('.food_options_btn_hidden');
var eventsOptionChoices = $('.events_options_btn_hidden');
var drivingOptionChoices = $('.driving_options_btn_hidden');


// Event handlers
changeSearchTypeBtn.onclick = function() {
    // Remove all search options if there are showing.
    removeAllSearchTypeOptions();
    hideElement(foodOptions, 'food_search_options_menu_showing', 'food_search_options_menu_hidden');
    hideElement(drivingOptions, 'driving_search_options_menu_showing', 'driving_search_options_menu_hidden');
    hideElement(eventsOptions, 'events_search_options_menu_showing', 'events_search_options_menu_hidden');
    
	// If the buttons are closed, expand them. Vice-versa.
	if(foodBtn.hasClass('foodBtn_closed')) {
		foodBtn.removeClass('foodBtn_closed')
		foodBtn.addClass('foodBtn_expanded');
	} else {
		foodBtn.removeClass('foodBtn_expanded')
		foodBtn.addClass('foodBtn_closed');
	}

	if(eventsBtn.hasClass('eventsBtn_closed')) {
		eventsBtn.removeClass('eventsBtn_closed')
		eventsBtn.addClass('eventsBtn_expanded');
	} else {
		eventsBtn.removeClass('eventsBtn_expanded')
		eventsBtn.addClass('eventsBtn_closed');
	}

	if(drivingBtn.hasClass('drivingBtn_closed')) {
		drivingBtn.removeClass('drivingBtn_closed')
		drivingBtn.addClass('drivingBtn_expanded');
	} else {
		drivingBtn.removeClass('drivingBtn_expanded')
		drivingBtn.addClass('drivingBtn_closed');
	}
};


foodBtn.click(function(){
	searchBarDiv.style.backgroundColor = foodBtn.css('background-color');
    
    // If the options are showing, close them. Vice-versa.
    if(foodOptions.hasClass('food_search_options_menu_showing')) {
        hideElement(foodOptions, 'food_search_options_menu_showing', 'food_search_options_menu_hidden');
        
        removeAllSearchTypeOptions();
    } else {
        showElement(foodOptions, 'food_search_options_menu_showing', 'food_search_options_menu_hidden');
        hideElement(drivingOptions, 'driving_search_options_menu_showing', 'driving_search_options_menu_hidden');
        hideElement(eventsOptions, 'events_search_options_menu_showing', 'events_search_options_menu_hidden');
        
        showElement(foodOptionChoices,'food_options_btn_showing', 'food_options_btn_hidden');
        hideElement(eventsOptionChoices,'events_options_btn_showing', 'events_options_btn_hidden');
        hideElement(drivingOptionChoices,'driving_options_btn_showing', 'driving_options_btn_hidden');
    }
});

eventsBtn.click(function(){
	searchBarDiv.style.backgroundColor = eventsBtn.css('background-color');
    
    if(eventsOptions.hasClass('events_search_options_menu_showing')) {
        hideElement(eventsOptions, 'events_search_options_menu_showing', 'events_search_options_menu_hidden');
        
        removeAllSearchTypeOptions();
    } else {
        hideElement(foodOptions, 'food_search_options_menu_showing', 'food_search_options_menu_hidden');
        hideElement(drivingOptions, 'driving_search_options_menu_showing', 'driving_search_options_menu_hidden');
        showElement(eventsOptions, 'events_search_options_menu_showing', 'events_search_options_menu_hidden');
        
        hideElement(foodOptionChoices,'food_options_btn_showing', 'food_options_btn_hidden');
        showElement(eventsOptionChoices,'events_options_btn_showing', 'events_options_btn_hidden');
        hideElement(drivingOptionChoices,'driving_options_btn_showing', 'driving_options_btn_hidden');
    }
});

drivingBtn.click(function(){
	searchBarDiv.style.backgroundColor = drivingBtn.css('background-color');
    
    if(drivingOptions.hasClass('driving_search_options_menu_showing')) {
        hideElement(drivingOptions, 'driving_search_options_menu_showing', 'driving_search_options_menu_hidden');
        
        removeAllSearchTypeOptions();
    } else {
        hideElement(foodOptions, 'food_search_options_menu_showing', 'food_search_options_menu_hidden');
        showElement(drivingOptions, 'driving_search_options_menu_showing', 'driving_search_options_menu_hidden');
        hideElement(eventsOptions, 'events_search_options_menu_showing', 'events_search_options_menu_hidden');
        
        hideElement(foodOptionChoices,'food_options_btn_showing', 'food_options_btn_hidden');
        hideElement(eventsOptionChoices,'events_options_btn_showing', 'events_options_btn_hidden');
        showElement(drivingOptionChoices,'driving_options_btn_showing', 'driving_options_btn_hidden');
    }
});


/* Hides all of the options that you get when you click on one of the search buttons (food, events, driving). */
function removeAllSearchTypeOptions() {
    drivingOptionChoices.removeClass('driving_options_btn_showing');
    drivingOptionChoices.addClass('driving_options_btn_hidden');
    eventsOptionChoices.removeClass('events_options_btn_showing');
    eventsOptionChoices.addClass('events_options_btn_hidden');
    foodOptionChoices.removeClass('food_options_btn_showing');
    foodOptionChoices.addClass('food_options_btn_hidden');
};


/* Hides an html element. */
function hideElement(element, showClass, hideClass) {
    element.removeClass(showClass);
    element.addClass(hideClass);
};

/* Shows an html element. */
function showElement(element, showClass, hideClass) {
    element.removeClass(hideClass);
    element.addClass(showClass);
};