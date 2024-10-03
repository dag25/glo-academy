const title = document.getElementsByTagName('h1')[0];
console.log(title);
const btns = document.getElementsByClassName('.handler_btn');
const screenBtn = document.querySelector('.screen-btn');
const percent = document.querySelectorAll('.percent ');
const number = document.querySelectorAll('.number ');
const rollBack = document.querySelector('.rollback ');
const range = rollBack.querySelector('[type=range]');
const value = rollBack.querySelector('.range-value');
const inputs = document.getElementsByClassName('total-input');
let screens = document.querySelectorAll('.screen');



// const appData = {
// 	title: '',
// 	screens: [],
// 	screenPrice: 0,
// 	adaptive: true,
// 	rollback: 10,
// 	allServicePrices: 0,
// 	fullPrice: 0,
// 	servicePercentPrice: 0,
// 	services: {},
// 	asking: function () {
// 		appData.title = prompt('Как называется ваш проект?');

// 		for (let i = 0; i < 2; i++) {
// 			let name = prompt('Какие типы экранов нужно разработать?');
// 			let price = 0;

// 			do {
// 				price = prompt('Сколько будет стоить данная работа?');
// 			} while (!appData.isNumber(price));

// 			appData.screens.push({ id: i, name: name, price: price });
// 		}

// 		for (let i = 0; i < 2; i++) {
// 			let name = prompt('Какой дополнительный тип услуги нужен?');
// 			let price = 0;

// 			do {
// 				price = prompt('Сколько будет стоить данный услуга?');
// 			} while (!appData.isNumber(price));

// 			appData.services[name] = +price;
// 		}
// 		appData.adaptive = confirm('Нужен ли адаптив на сайте?');
// 	},
// 	addPrices: function () {
// 		for (const screen of appData.screens) {
// 			appData.screenPrice += +screen.price;
// 		}
// 		for (const key in appData.services) {
// 			appData.allServicePrices += appData.services[key];
// 		}
// 	},
// 	isNumber: function (num) {
// 		return !isNaN(parseFloat(num)) && isFinite(num);
// 	},
// 	isString: function (str) {
// 		return (
// 			(typeof str === 'string' && str.trim() !== '') || str instanceof String
// 		);
// 	},
// 	getFullPrice: function () {
// 		appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
// 	},
// 	getServicePercentPrice: function () {
// 		appData.servicePercentPrice =
// 			appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
// 	},
// 	getTitle: function () {
// 		appData.title =
// 			appData.title.trim()[0].toUpperCase() +
// 			appData.title.trim().substr(1).toLowerCase();
// 	},
// 	getRollbackMessage: function (price) {
// 		if (price > 30000) {
// 			return 'Даем скидку в 10%';
// 		} else if (price >= 1500 && price < 30000) {
// 			return 'Даем скидку в 5%';
// 		} else if (price < 1500 && price >= 0) {
// 			return 'Скидка не предусмотрена';
// 		} else {
// 			return 'Что то пошло не так';
// 		}
// 	},
// 	start: function () {
// 		appData.asking();
// 		appData.addPrices();
// 		appData.getFullPrice();
// 		appData.getServicePercentPrice();
// 		appData.getTitle();
// 		appData.logger();
// 	},
// 	logger: function () {
// 		console.log(appData.fullPrice);
// 		console.log(appData.servicePercentPrice);
// 		console.log(appData.screens);
// 	},
// };
// appData.start();
