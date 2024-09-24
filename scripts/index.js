let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

let rollback = 10;
let fullPrice;
const servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));
let allServicePrices;

const showTypeOf = function(variable) {
	console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
	if (price > 30000) {
		return 'Даем скидку в 10%';
	} else if (price >= 1500 && price < 30000) {
		return 'Даем скидку в 5%';
	} else if (price < 1500 && price >= 0) {
		return 'Скидка не предусмотрена';
	} else {
		return 'Что то пошло не так';
	}
};

const getAllServicePrices = function(servicePrice1, servicePrice2) {
	return servicePrice1 + servicePrice2;
};

const getFullPrice = function(screenPrice, allServicePrices) {
	return screenPrice + allServicePrices;
};

const getTitle = function(title) {
	return title.trim().charAt(0).toUpperCase() + string.slice(1)
};

const  getServicePercentPrices = function(fullPrice, rollback) {
	return fullPrice - rollback;
};

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

fullPrice = getFullPrice(screenPrice, allServicePrices);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(`${getRollbackMessage(25000)}`);
console.log(`Стоимость составит ${getServicePercentPrices(fullPrice, rollback)}`);
