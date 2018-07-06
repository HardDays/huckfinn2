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

    $('#phone').mask('(000) 000-0000');
    
    var menu = $('.bott');
    var section = $('.sec-lvl-1');
    var scrollOffset = menu.offset().top + menu.outerHeight();
    var scrollLength = 0;

    // $(window).resize(function(){
    //     scrollOffset = menu.offset().top + menu.outerHeight();
    //     // scrollLength = $(this).scrollTop();
    //     // console.log($(this).scrollTop());
    //     // if(scrollLength > scrollOffset) {
    //     //     section.addClass('fixed');
    //     // } else {
    //     //     section.removeClass('fixed');
    //     // }
    // });

    $(window).scroll(function(){
        
        scrollLength = $(this).scrollTop();
        
        if(scrollLength > scrollOffset) {
            section.addClass('fixed');
        } else {
            section.removeClass('fixed');
        }
    });

});


