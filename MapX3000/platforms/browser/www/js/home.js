// Variables
var changeSearchTypeBtn = document.getElementById('change_search_type_btn');

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