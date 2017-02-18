// Variables
var changeSearchTypeBtn = document.getElementById('change_search_type_btn');


// Event handles
changeSearchTypeBtn.onclick = function() {
	$("#foodBtn").addClass('animated fadeIn');
	$("#foodBtn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		
	});
}