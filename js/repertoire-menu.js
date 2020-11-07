$(document).ready(function () {

	anime({
		targets: ".plus",
		opacity: [0, 1],
		duration: 600,
		easing: 'easeInOutQuart',
		delay: anime.stagger(600),
		begin: function(){
			$('.plus').css('visibility', 'visible')
		  },
		complete: function () {
			repertoireMenuAnim()
		}
	})

	function repertoireMenuAnim() {
		$.easing.def = "easeOutBounce";
		$('li.main-li a').click(function (e) {
			var dropDown = $(this).parent().next();
			dropDown.slideToggle('slow');
			$(this).parent().find('img').toggleClass("close-style");
			e.preventDefault();

			if ($('.open').is(dropdown)) {
				$(this).parent().find('img').removeClass("close-style");
			}
		})
	}

});