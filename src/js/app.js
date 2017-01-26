// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
console.log('Hello, World!');

$(document).ready(function () {
	var $menu = $('.menu'),
		$menu__button = $('.menu__button'),
		$body = $('body'),
		$llink = $('.lang__link'),
		menu = $('#menu');

	$llink.on('click', function() {
		var $this = $(this);
		if(!$this.hasClass('is-active')) {
			$this.addClass('is-active');
			$this.siblings().removeClass('is-active');
		} else {
			return;
		}
	})
	$body.on('click', function() {
		$this = $(this);

		if(!$this.hasClass('menu__button')) {
			return;
		} else {
			$menu__button.removeClass('is-active');
			$menu.slideUp(1000);
		}
	})
	$menu__button.on('click', function () {
		$(this).toggleClass('is-active');
		$menu.slideToggle(1000);
	});



		// $('.slider').slick({
		// 	centerMode: true,
		// 	centerPadding: 20%,
		// 	slidesToShow: 3,
		// 	slidesToScroll: 1,
		// 	infinite: true,
		// 	dots: true
		// });

})


$(document).ready(function () {
	$dot = $('.dot')
	$('.slider').slick({
	  infinite: true,
	  speed: 600,
	  slidesToShow: 3, 
	  slidesToScroll: 1,
	  focusOnSelect: true,
	  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1
      }
    }
  ]
	});
})

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
