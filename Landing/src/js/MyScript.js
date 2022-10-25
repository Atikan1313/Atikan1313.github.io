"use strict"

confirm("Давайте рассчитаем стоимость вашего будущего сайта!!!")

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


