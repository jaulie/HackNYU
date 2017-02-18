// VARIABLES
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

/* Google Maps Variables. */
var isShowingMarkers = false;   // Whether or not the location markers are showing.
var map;                        // The actual map that gets displayed.
var markers = [];               // All of the points on the map that the user is looking for.
var largeInfowindow;            // The information window about the location.




// EVENT HANDLERS
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




// GOOGLE MAPS API

/* Initializes the map. */
function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.9980244},
        zoom: 15,
        mapTypeControl: false
    });
    
    // These are the real estate listings that will be shown to the user.
    // Normally we'd have these in a database instead.
    var locations = [
      {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
      {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
      {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
      {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
      {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
      {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
    ];
    
    largeInfowindow = new google.maps.InfoWindow();
    
    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });
         
        // Push the marker to our array of markers.
        markers.push(marker);
        
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
    } // end of for-loop.
    
    foodOptionChoices.click(showListings());
    eventsOptionChoices.click(showListings());
    drivingOptionChoices.click(showListings());
} // end of method.
             
        
/* This function populates the infowindow when the marker is clicked. We'll only allow
one infowindow which will open at the marker that is clicked, and populate based
on that markers position. */
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.title + '</div>');
        infowindow.open(map, marker);
  
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
        });
    }
} // end of method.


/* This function will loop through the markers array and display them all. */
function showListings() {
    if(isShowingMarkers == true) {
        hideListings();
        isShowingMarkers = false;
        return;
    } else {
        var bounds = new google.maps.LatLngBounds();
        // Extend the boundaries of the map for each marker and display the marker
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
            bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
        isShowingMarkers = true;
        return;
    }
} // end of method.


/* This function will loop through the listings and hide them all. */
function hideListings() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
} // end of method.




// OTHER METHODS

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