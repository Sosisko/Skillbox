// $('.burger').click(function() {
// 	$('.burger').toggleClass('close');
//   $('.menu-adv').toggleClass('active');	
// })

$('.burger').click(function() {
	$('.burger').toggleClass('close');
	$('.burger').toggleClass('burger-active')
  $('.nav-adv__menu').toggleClass('active');
  	
});


$('.flowing-scroll').on( 'click', function(){ 
    var el = $(this);
    var dest = el.attr('href'); // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 1000 // скорость прокрутки
        );
    }
    return false;
});



if(window.matchMedia('(max-width: 320px)').matches){
	 $('.social__call-order').addClass('know-more-btn');
     $('.know-more-btn').removeClass('social__call-order');
};

$(function () {
  $('.my-info__fly-elements_item').addClass('active');

});

$(function () {
  $('.fly-elements__footer_item').addClass('active');

});
