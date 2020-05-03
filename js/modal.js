
$('#phone').inputmask('+7(999)-999-99-99');



	
$('.popup__form').validate({
	rules: {
		email: {
			required: true,
			email: true,
			minlength: 1
		},
		name: {
			required: true,
			minlength: 1
		}
	},
	messages: {
		required: "Поле 'Email' обязательно к заполнению",
 		email: "Необходим формат адреса email" 
	}
	
});
















var modal = $('.overlay')[0];
	callOrderBtn = $('.call-order');
	knowMoreBtn = $('.know-more-btn');
	btnClose = $('.popup__close_btn')[0];




for (var i = 0; i < callOrderBtn.length; i++) {
  callOrderBtn[i].onclick = function(e){
	e.preventDefault();
	$('.overlay').css('display', 'inline-block'); //Включает модальное окно
	$('.blur').css('filter','blur(3px)'); //Включаем размытие фона
	$(document.body).css('overflow', 'hidden'); //Выключаем скролл для body
	$('#email').css('display', 'none'); // Скрывает поле email
  };
}

for (var i = 0; i < knowMoreBtn.length; i++) {
  knowMoreBtn[i].onclick = function(e){
  	e.preventDefault();
	$('.overlay').css('display', 'inline-block'); //Включает модальное окно
	$('.blur').css('filter','blur(3px)'); //Включаем размытие фона
	$(document.body).css('overflow', 'hidden'); //Выключаем скролл для body
	$('#email').css('display', 'block'); //Показывает поле email
  };
}


btnClose.onclick = function () {
	$('.overlay').css('display', 'none'); //Выключает модальное окно по нажатию на кнопку Х
	$('.blur').css('filter','blur(0)'); //Выключаем размытие фона
	$(document.body).css('overflow', 'visible'); //Включаем скролл для body

};


window.onclick = function (event) {
	if (event.target == modal) {
		$('.overlay').css('display', 'none'); //Выключает модальное окно по нажатию вне окна
		$('.blur').css('filter','blur(0)'); //Выключаем размытие фона
		$(document.body).css('overflow', 'visible'); //Включаем скролл для body
		$('.wrapper__popup_sended').hide(); //Скрывает окно сообщения отправки
	}
};


	function send(e){
		let name = $('#name').val(),
			text = $('#phone').val();

		e.preventDefault();

		if(name.length !==0 && text.length !==0) {

			$('#name').removeClass('error');
			$('#phone').removeClass('error');
			$('#email').removeClass('error');

			name = $('#name').val('');
			text = $('#phone').val('');
			text = $('#email').val('');

			$('.wrapper__popup_sended').show();

			
		} else{
			$('#name').addClass('error');
			$('#phone').addClass('error');
			$('#email').addClass('error');
		}
	}


   $('.popup__send-btn').on('click', send);


var btnCloseOk = $('.close-btn-ok')[0];

		btnCloseOk.onclick = function () {
			$('.overlay').css('display', 'none'); //Выключает модальное окно по нажатию вне окна
			$('.blur').css('filter','blur(0)'); //Выключаем размытие фона
			$(document.body).css('overflow', 'visible'); //Включаем скролл для body
			$('.wrapper__popup_sended').hide(); //Скрывает окно сообщения отправки
		};




