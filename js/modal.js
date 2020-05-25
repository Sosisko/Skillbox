var modal = $('.overlay')[0];
	callOrderBtn = $('.call-order');
	btnClose = $('.popup__close_btn')[0];
	sendBtb = $('.popup__send-btn');
	knowMoreBtn = $('.know-more-btn');

callOrderBtn.click(function(e){
	e.preventDefault();
	$('.overlay').css('display', 'inline-block'); //Включает модальное окно
	$('.blur').css('filter','blur(3px)'); //Включаем размытие фона
	$(document.body).css('overflow', 'hidden'); //Выключаем скролл для body
	$('.popup__form_more').hide(); //Скрывает форму в инпутом емайл
	$('.popup__form_call').show(); //Показывает форму без инпута емайл
  });


knowMoreBtn.click(function(e){
  	e.preventDefault();
	$('.overlay').css('display', 'inline-block'); //Включает модальное окно
	$('.blur').css('filter','blur(3px)'); //Включаем размытие фона
	$(document.body).css('overflow', 'hidden'); //Выключаем скролл для body
	$('.popup__form_more').show(); //Показывает форму в инпутом емайл
	$('.popup__form_call').hide(); //Скрывает форму без инпута емайл
  });


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


var btnCloseOk = $('.close-btn-ok')[0];

		btnCloseOk.onclick = function () {
			$('.overlay').css('display', 'none'); //Выключает модальное окно по нажатию вне окна
			$('.blur').css('filter','blur(0)'); //Выключаем размытие фона
			$(document.body).css('overflow', 'visible'); //Включаем скролл для body
			$('.wrapper__popup_sended').hide(); //Скрывает окно сообщения отправки
		};




$('input[type="tel"]').inputmask({"mask": "+7(999)-999-99-99"});


$('.popup__form_call').each(function() { //Валидация формы "Заказать звонок"
	$(this).validate({
		// errorPlacement(error, element) {
		// 	return true;
		// },
		focusInvalid: false,
		rules: {
			name: {
				required: true,
			},
			phone: {
				required: true,
			}
		},
		messages: {
			name: {
				required: 'Введите ваше имя'
			},
			phone: {
				required: 'Введите номер телефона'
			},
		},
		submitHandler(form) {
			$('.wrapper__popup_sended').show(); //Показывает отрисовку, что форма отправлена
			$('.popup__input').val(''); //Очищает поля инпутов после отправки
		}
	})
});

$('.popup__form_more').each(function() { //Валидация формы с емайлом
	$(this).validate({
		errorPlacement(error, element) {
		 	},

		focusInvalid: false,
		rules: {
			name: {
				required: true
			},
			phone: {
				required: true
			},
			email: {
				required: true,
				email: true
			}

		},
		// messages: {
		// 		email: {
		// 		required: 'Введите Корректный Email'
		// 	}
		// },
		submitHandler(form) {
			$('.wrapper__popup_sended').show(); //Показывает отрисовку, что форма отправлена
			$('.popup__input').val(''); //Очищает поля инпутов после отправки
		}
	})
});

