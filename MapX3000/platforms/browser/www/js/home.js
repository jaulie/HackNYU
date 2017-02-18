// Variables
var changeSearchTypeBtn = document.getElementById('change_search_type_btn');
var searchBar = document.getElementById('searchBar');
var searchBarDiv = document.getElementsByClassName('search_bar_div')[0];

var foodBtn = $('#foodBtn');
var eventsBtn = $('#eventsBtn');
var drivingBtn = $('#drivingBtn');


// Event handlers
changeSearchTypeBtn.onclick = function() {
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
	// searchBar.style.backgroundColor = foodBtn.css('background-color');
	searchBarDiv.style.backgroundColor = foodBtn.css('background-color');
});

eventsBtn.click(function(){
	// searchBar.style.backgroundColor = eventsBtn.css('background-color');
	searchBarDiv.style.backgroundColor = eventsBtn.css('background-color');
});

drivingBtn.click(function(){
	// searchBar.style.backgroundColor = drivingBtn.css('background-color');
	searchBarDiv.style.backgroundColor = drivingBtn.css('background-color');
});


