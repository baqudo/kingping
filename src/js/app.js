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
		$llink = $('.lang__link');

	$llink.on('click', function() {
		var $this = $(this);

		if(!$this.hasClass('is-active')) {
			$this.addClass('is-active');
			$this.siblings().removeClass('is-active');
		} else {
			return;
		}
	})

	$body.on('click', function(e) {
		$this = $(this);
		if ($this.hasClass('menu__button')) {
			if(!$menu__button.hasClass('is-active')) {
				$menu__button.addClass('is-active');
				$menu.slideToggle();
			} else {
				$menu__button.removeClass('is-active');
				$menu.slideUp();
			}
		} else {
				$menu__button.removeClass('is-active');
				$menu.slideUp();
			}
	})
})
