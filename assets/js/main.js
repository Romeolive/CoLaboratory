window.onscroll = function showheader(){

	var header = document.querySelector('divided');

	if(window.pageYOffset > 200){
		header.classList.add('header_fixed');
		
	}
	else{
		header.classList.add('header_fixed');
	}

}



function onclickFunction(){
					
	var par = document.querySelector('.textClass');
	par.innerHTML = 'Очень добрый человек, хороший друг, на таких как она хочется ровняться, она очень открытая и милая, но не стоит её обижать она может и в дыню дать. Также она очень умная и  весёлая, с ней не бывает скучно и она поддержит любую глупую идею. Не стоит забывать, что она стрелец поэтому достаточно пылкая натура!!!! Для друзей она сделает всё: поможет, выслушает, поддержит... Не смотря на свою стойкость и силу, в душе она миленький маленький ребёнок, который тоже любит получать милости';

}

function onclickFunction1(){				
	var par1 = document.querySelector('.textAbout1');
	var par2 = document.querySelector('.textAbout2');
	var par3 = document.querySelector('.textAbout3');
	par1.innerHTML = 'Описать данное существо, обитающее в Сибири, можно одним словом "микроволновка".Маленькая, но, что удивительно, старше всех.Имеет прекрасного молодого человека. Варвара очень целеустремлённая личность. В сложных ситуациях, конечно, как и всем ей не легко, но наша микроволновка умеет перебарывать трудности. Отличная подруга и милая одноклассница.';
	par2.innerHTML = '';
	par3.innerHTML = '';
}
function onclickFunction2(){				
	var par1 = document.querySelector('.textAbout1');
	var par2 = document.querySelector('.textAbout2');
	var par3 = document.querySelector('.textAbout3');
	par1.innerHTML = '';
	par2.innerHTML = 'Про Настю могу сказать, что она очень чуткий и ответственный человек, который может помочь не только словом, но и делом. Она один из немногих людей, которые меня не бесят. Я рад, что познакомился с ней. Наше знакомство произошло еще в 5 классе, мы частенько встречались на переменках и обменивались парочкой слов, и почему-то я ее начал называть капустиной.';
	par3.innerHTML = '';
}
function onclickFunction3(){				
	var par1 = document.querySelector('.textAbout1');
	var par2 = document.querySelector('.textAbout2');
	var par3 = document.querySelector('.textAbout3');
	par1.innerHTML = '';
	par2.innerHTML = '';
	par3.innerHTML = 'Описать данное существо, обитающее в Сибири, можно одним словом "микроволновка".Маленькая, но, что удивительно, старше всех.Имеет прекрасного молодого человека. Варвара очень целеустремлённая личность. В сложных ситуациях, конечно, как и всем ей не легко, но наша микроволновка умеет перебарывать трудности. Отличная подруга и милая одноклассница.';
}



function onclickFunction4(){				
	var par1 = document.querySelector('.textAbout4');
	var par2 = document.querySelector('.textAbout5');
	var par3 = document.querySelector('.textAbout6');
	par1.innerHTML = 'Настоящая подруга, которая поддержит в трудной ситуации. Всегда готова выслушать и помочь. Та, которая открыта к новым встречам и приключениям. Старающаяся ставить перед собой цели и достигать их.';
	par2.innerHTML = '';
	par3.innerHTML = '';
}
function onclickFunction5(){				
	var par1 = document.querySelector('.textAbout4');
	var par2 = document.querySelector('.textAbout5');
	var par3 = document.querySelector('.textAbout6');
	par1.innerHTML = '';
	par2.innerHTML = 'Если кратко, то Милена - это очень противоречивый человек, который, если захочет, заботиться о других, но редко осознаёт, когда нужно заботится о себе. Я бы сказал, что у неё имеется «синдром мамочки», но к счастью в малой степени(если вы не ее цель). А вообще она очень разносторонняя и позитивная личность, которая делает в основном очень безбашенные вещи и за которой надо следить(лень), чтобы не убилась. Так что да, она очень крутая и веселая девочка)💫За тебя!';
	par3.innerHTML = '';
}
function onclickFunction6(){				
	var par1 = document.querySelector('.textAbout4');
	var par2 = document.querySelector('.textAbout5');
	var par3 = document.querySelector('.textAbout6');
	par1.innerHTML = '';
	par2.innerHTML = '';
	par3.innerHTML = 'Отличная подруга, общительный и добрый человек. Хороша во всем, за что ни возьмётся. Очень любознательная. Имеет собственное мнение и готова его отстаивать.';
}

var boxshadow = "";

for(var i = 0; i <= 2000; i++){
    px = Math.random() < 0.5 ? "-" : "";
    py = Math.random() < 0.5 ? "-" : "";
    x = Math.floor((Math.random() * window.innerWidth) + 1);
    y = Math.floor((Math.random() * window.innerHeight) + 1);
    s = Math.floor((Math.random() * 2) - 1);
    boxshadow += px+x+"px "+py+y+"px 0 "+s+"px #fff,";
}

boxshadow = boxshadow.slice(0, -1);

stars.style.boxShadow = boxshadow;

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});


		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
			if (browser.name == 'ie')
				(function() {

					var flexboxFixTimeoutId;

					$window.on('resize.flexbox-fix', function() {

						var $x = $('.fullscreen');

						clearTimeout(flexboxFixTimeoutId);

						flexboxFixTimeoutId = setTimeout(function() {

							if ($x.prop('scrollHeight') > $window.height())
								$x.css('height', 'auto');
							else
								$x.css('height', '100vh');

						}, 250);

					}).triggerHandler('resize.flexbox-fix');

				})();

			if (!browser.canUse('object-fit'))
				(function() {

					$('.banner .image, .spotlight .image').each(function() {

						var $this = $(this),
							$img = $this.children('img'),
							positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/);

						// Set image.
							$this
								.css('background-image', 'url("' + $img.attr('src') + '")')
								.css('background-repeat', 'no-repeat')
								.css('background-size', 'cover');

						// Set position.
							switch (positionClass.length > 1 ? positionClass[1] : '') {

								case 'left':
									$this.css('background-position', 'left');
									break;

								case 'right':
									$this.css('background-position', 'right');
									break;

								default:
								case 'center':
									$this.css('background-position', 'center');
									break;

							}

						// Hide original.
							$img.css('opacity', '0');

					});

				})();

	// Smooth scroll.
		$('.smooth-scroll').scrolly();
		$('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

		$wrapper.children()
			.scrollex({
				top:		'30vh',
				bottom:		'30vh',
				initialize:	function() {
					$(this).addClass('is-inactive');
				},
				terminate:	function() {
					$(this).removeClass('is-inactive');
				},
				enter:		function() {
					$(this).removeClass('is-inactive');
				},
				leave:		function() {

					var $this = $(this);

					if ($this.hasClass('onscroll-bidirectional'))
						$this.addClass('is-inactive');

				}
			});

		$('.items')
			.scrollex({
				top:		'30vh',
				bottom:		'30vh',
				delay:		50,
				initialize:	function() {
					$(this).addClass('is-inactive');
				},
				terminate:	function() {
					$(this).removeClass('is-inactive');
				},
				enter:		function() {
					$(this).removeClass('is-inactive');
				},
				leave:		function() {

					var $this = $(this);

					if ($this.hasClass('onscroll-bidirectional'))
						$this.addClass('is-inactive');

				}
			})
			.children()
				.wrapInner('<div class="inner"></div>');

	// Gallery.
		$('.gallery')
			.wrapInner('<div class="inner"></div>')
			.prepend(browser.mobile ? '' : '<div class="forward"></div><div class="backward"></div>')
			.scrollex({
				top:		'30vh',
				bottom:		'30vh',
				delay:		50,
				initialize:	function() {
					$(this).addClass('is-inactive');
				},
				terminate:	function() {
					$(this).removeClass('is-inactive');
				},
				enter:		function() {
					$(this).removeClass('is-inactive');
				},
				leave:		function() {

					var $this = $(this);

					if ($this.hasClass('onscroll-bidirectional'))
						$this.addClass('is-inactive');

				}
			})
			.children('.inner')
				//.css('overflow', 'hidden')
				.css('overflow-y', browser.mobile ? 'visible' : 'hidden')
				.css('overflow-x', browser.mobile ? 'scroll' : 'hidden')
				.scrollLeft(0);

		// Style #1.
			// ...

		// Style #2.
			$('.gallery')
				.on('wheel', '.inner', function(event) {

					var	$this = $(this),
						delta = (event.originalEvent.deltaX * 10);

					// Cap delta.
						if (delta > 0)
							delta = Math.min(25, delta);
						else if (delta < 0)
							delta = Math.max(-25, delta);

					// Scroll.
						$this.scrollLeft( $this.scrollLeft() + delta );

				})
				.on('mouseenter', '.forward, .backward', function(event) {

					var $this = $(this),
						$inner = $this.siblings('.inner'),
						direction = ($this.hasClass('forward') ? 1 : -1);

					// Clear move interval.
						clearInterval(this._gallery_moveIntervalId);

					// Start interval.
						this._gallery_moveIntervalId = setInterval(function() {
							$inner.scrollLeft( $inner.scrollLeft() + (5 * direction) );
						}, 10);

				})
				.on('mouseleave', '.forward, .backward', function(event) {

					// Clear move interval.
						clearInterval(this._gallery_moveIntervalId);

				});

		// Lightbox.
			$('.gallery.lightbox')
				.on('click', 'a', function(event) {

					var $a = $(this),
						$gallery = $a.parents('.gallery'),
						$modal = $gallery.children('.modal'),
						$modalImg = $modal.find('img'),
						href = $a.attr('href');

					// Not an image? Bail.
						if (!href.match(/\.(jpg|gif|png|mp4)$/))
							return;

					// Prevent default.
						event.preventDefault();
						event.stopPropagation();

					// Locked? Bail.
						if ($modal[0]._locked)
							return;

					// Lock.
						$modal[0]._locked = true;

					// Set src.
						$modalImg.attr('src', href);

					// Set visible.
						$modal.addClass('visible');

					// Focus.
						$modal.focus();

					// Delay.
						setTimeout(function() {

							// Unlock.
								$modal[0]._locked = false;

						}, 600);

				})
				.on('click', '.modal', function(event) {

					var $modal = $(this),
						$modalImg = $modal.find('img');

					// Locked? Bail.
						if ($modal[0]._locked)
							return;

					// Already hidden? Bail.
						if (!$modal.hasClass('visible'))
							return;

					// Lock.
						$modal[0]._locked = true;

					// Clear visible, loaded.
						$modal
							.removeClass('loaded')

					// Delay.
						setTimeout(function() {

							$modal
								.removeClass('visible')

							setTimeout(function() {

								// Clear src.
									$modalImg.attr('src', '');

								// Unlock.
									$modal[0]._locked = false;

								// Focus.
									$body.focus();

							}, 475);

						}, 125);

				})
				.on('keypress', '.modal', function(event) {

					var $modal = $(this);

					// Escape? Hide modal.
						if (event.keyCode == 27)
							$modal.trigger('click');

				})
				.prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
					.find('img')
						.on('load', function(event) {

							var $modalImg = $(this),
								$modal = $modalImg.parents('.modal');

							setTimeout(function() {

								// No longer visible? Bail.
									if (!$modal.hasClass('visible'))
										return;

								// Set loaded.
									$modal.addClass('loaded');

							}, 275);

						});

})(jQuery);