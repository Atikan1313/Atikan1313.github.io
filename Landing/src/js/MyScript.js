/*скрипт калькулятора рассчета стоимости (начало)*/
/*confirm("Давайте рассчитаем стоимость вашего будущего сайта!!!")

let site, design, adaptive;
let calculator = {
	price: [
		[2000, 1000, 5000, 800, 500, 1200],
		[1500, 1000, 1200],
		[100, 100, 100, 100],
	],
	days: [
		[3, 2, 5, 1, 1, 4],
		[3, 2, 4],
		[1, 2, 1, 2],
	],
	run(siteType, desingType, adaptiveType){
		let sum = parseInt(calculator.price[0][siteType]) + parseInt(calculator.price[1][desingType]) + parseInt(calculator.price[2][adaptiveType]);
		let days = parseInt(calculator.days[0][siteType]) + parseInt(calculator.days[1][desingType]) + parseInt(calculator.days[2][adaptiveType]);
		alert("Сроки: "+ days + " дня " + " Стоимость: "+ sum + " рублей");
	}
}

function getAnswers() {
site = prompt("Тип сайта: 0 - интернет магазин (2000 руб.), 1 - сайты услуг (1000 руб.), 2 - корпоративные порталы (5000 руб.), 3 - простые (800 руб.), 4 - новостные ресурсы (500 руб.), 5 - статейники (1200 руб.)");
design = prompt("Дизайн: 0 - Рисованный дизайн - Hand Draw (1500 руб.), 1 - плоский дизайн - Flat Design (1000 руб.), 2 - Материальный дизайн - Material Design (1200 руб.)", "Напишите соответствующую цифру");
adaptive = prompt("Адаптивность: 0 - Windows (100 руб.), 1 - MacOS (100 руб.), 2 - Android (100 руб.), 3 - IOS (100 руб.)", "Напишите соответствующую цифру");
	calculator.run(site, design, adaptive);
}	

getAnswers();

*/
/*скрипт калькулятора рассчета стоимости (конец)*/

/*прогрузка изображений (начало)*/
if ('IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
  !('isIntersecting' in IntersectionObserverEntry.prototype)) {

  Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
    get: function () {
      return this.intersectionRatio > 0
    }
  })
}

const imgElements = [ ...document.querySelectorAll( '.enlarged' ) ];

let observer = new IntersectionObserver( onChange, {
  threshold: [ 1.0 ],
});

function onChange( changes ) {
  
  changes.forEach( change => {
    
    if ( change.isIntersecting ) {
      
      change.target.classList.add( 'visible' );
      
      
      change.target.src = change.target.dataset.src;
      
      observer.unobserve( change.target );
    }
  });
}


const createObserver = function () {
  
  imgElements.forEach( img => {
    
    observer.observe( img );
  });
};

window.addEventListener("load", () => {
    createObserver();
}, false);
/*прогрузка изображений (конец)*/

/*скрипт пролистывания страницы (якорные ссылки) (начало)*/
$(document).ready(function(){
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $(".section").each((i, el) => {
            if($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                       $(el).removeClass('active');
                    }
                });
                
                $('nav li:eq('+ i +')').find('a').addClass('active');
            }
        });
    });
});
$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 62 + "px"});
});

/*скрипт пролистывания страницы (якорные ссылки) (конец)*/
/*скрипт открытия кейса в модальном окне при помощи magnificPopup (начало)*/
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
/*скрипт открытия кейса в модальном окне при помощи magnificPopup (конец)*/
/*скрипт ожидающий прокрутки до нужного момента, когда начнется анимация (начало)*/
$(document).ready(function(){
    let options = {threshold: [0.5]};
        let observer = new IntersectionObserver(onEntry, options);
        let elements = $('.element-animation');
        elements.each((i,el) => {
            observer.observe(el);
        });
});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
}
/*скрипт ожидающий прокрутки до нужного момента, когда начнется анимация (конец)*/
/*скрипт бегающих цифр (начало)*/
$(document).ready(function() {
	var time = 2,
  		cc = 1;
	$(window).scroll(function() {
  		$('#counter').each(function() {
    		var
      			cPos = $(this).offset().top,
      			topWindow = $(window).scrollTop();
    		if (cPos < topWindow + 200) {
      			if (cc < 2) {
        			$(".number").addClass("viz");
        			$('div').each(function() {
          				var
            				i = 1,
            				num = $(this).data('num'),
							step = 1000 * time / num,
            				that = $(this),
            				int = setInterval(function() {
              					if (i <= num) {
                					that.html(i);
              					} else {
                					cc = cc + 2;
                					clearInterval(int);
              					}
              					i++;
            				}, step);
        			});
      			}
    		}
  		});
	});
});
/*скрипт бегающих цифр (конец)*/
/*скрипт модального окна (начало)*/
$(document).ready(function(){
	function showWindow() {
  		$("#staticBackdrop").modal("show").on("shown", function () {});
	}
	setTimeout(showWindow, 10000);
});
/*скрипт модального окна (конец)*/
/*скрипт калькулятора (начало)*/
$(document).ready(function() {
	function Calculator(){
		let sum = parseInt($("#slct1 option:selected").val()) + parseInt($("#slct2 option:selected").val()) + parseInt($("#slct3 option:selected").val());
		let days = parseInt($("#slct1 option:selected").attr("days")) + parseInt($("#slct2 option:selected").attr("days")) + parseInt($("#slct3 option:selected").attr("days"));
		$(".numbers .deadlines").text(days);
		$(".numbers .final_cost").text(sum);
	}
	$("select").on('change', function(){
		Calculator();
	});
	Calculator();
});
/*скрипт калькулятора (конец)*/

