var modal = document.getElementsByClassName("overlay")[0];
	callOrderBtn = document.getElementsByClassName("call-order");
	knowMoreBtn = document.querySelectorAll(".know-more-btn");
	btnClose = document.getElementsByClassName("popup__close_btn")[0];
	blur = document.getElementsByClassName("blur")[0];
	body = document.body;
	email = document.getElementById("email");

for (var i = 0; i < callOrderBtn.length; i++) {
  callOrderBtn[i].onclick = function(e){
  	e.preventDefault();
    modal.style.display = 'inline-block'; //Включает модальное окно
	blur.style.filter = 'blur(3px)'; //Включаем размытие фона
	body.style.overflow = 'hidden'; //Выключаем скролл для body
	email.style.display = 'none'; // Скрывает поле email
  };
}

for (var i = 0; i < knowMoreBtn.length; i++) {
  knowMoreBtn[i].onclick = function(e){
  	e.preventDefault();
    modal.style.display = 'inline-block'; //Включает модальное окно
	blur.style.filter = 'blur(3px)'; //Включаем размытие фона
	body.style.overflow = 'hidden'; //Выключаем скролл для body
	email.style.display = 'block'; //Показывает поле email
  };
}


btnClose.onclick = function () {
	modal.style.display = 'none'; //Выключает модальное окно по нажатию на кнопку Х
	blur.style.filter = 'blur(0)'; //Выключаем размытие фона
	body.style.overflow = 'visible'; //Включаем скролл для body

};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'; //Выключает модальное окно по нажатию вне окна
		blur.style.filter = 'blur(0)'; //Выключаем размытие фона
		body.style.overflow = 'visible'; //Включаем скролл для body
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

			$('.overlay').append (`
				<div class="wrapper__popup_sended">
        			<p>Благодарим!</p>
        			<button class="close-btn-ok">OK</button>
       			</div>`)

			
		} else{
			$('#name').addClass('error');
			$('#phone').addClass('error');
			$('#email').addClass('error');
		}

			var btnCloseOk = document.getElementsByClassName("close-btn-ok")[0];
			var popupSended = document.getElementsByClassName("wrapper__popup_sended")[0];

			btnCloseOk.onclick = function () {
				modal.style.display = 'none'; //Выключает модальное окно по нажатию на кнопку Х
				blur.style.filter = 'blur(0)'; //Выключаем размытие фона
				body.style.overflow = 'visible'; //Включаем скролл для body
				$('.wrapper__popup_sended').hide(); //Скрывает окно сообщения отправки
				};


	}

   $('.popup__send-btn').on('click', send);




	

	

