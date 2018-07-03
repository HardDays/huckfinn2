$(document).ready(function () {

	$('.slider-init').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
	    dots: true
	});
    
    $('.attraction__slider-for').slick({
      	slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: false,
	    asNavFor: '.attraction__slider-nav',
	    infinite: false
    });

    $('.attraction__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.attraction__slider-for',
        infinite: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
    });
    

});


