document.addEventListener( 'DOMContentLoaded', function () {
    var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 100,
		height      : 60,
		gap         : 10,
		cover       : true,
		isNavigation: true,
        arrows     : false,
        pagination : false,
		focus       : 'center',
		breakpoints : {
			'600': {
				fixedWidth: 66,
				height    : 40,
			}
		},
	} ).mount();
	var primarySlider = new Splide( '#primary-slider', {
		cover      : true,
		heightRatio: 0.5,
		breakpoints: {
			600: {
				perPage: 1,
			}
		}
	} );
    primarySlider.sync( secondarySlider ).mount();
} );

