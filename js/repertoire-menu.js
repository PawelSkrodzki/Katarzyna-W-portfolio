$(document).ready(function(){
	$.easing.def = "easeOutBounce";
	$('li.main-li a').click(function(e){
		var dropDown = $(this).parent().next();
		$('.open').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		$(this).parent().find('span').toggleClass("close-style");
		e.preventDefault();
	})
});