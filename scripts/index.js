let title = 'Курс "JavaScript"';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 1;
let rollback = 10;
let fullPrice = 150;
let adaptive = true;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
	`Стоимость верстки экранов ${screenPrice} рублей/ долларов/гривен/юани`,
);
console.log(
	`Стоимость разработки сайта ${fullPrice} рублей/ долларов/гривен/юани`,
);
console.log(screens.toLowerCase());
console.log(screens.split(', '));
console.log(fullPrice * (rollback / 100));

title = prompt('Как называется ваш проект?');
screens = prompt('Какие типы экранов нужно разработать?');
screenPrice = +prompt('Сколько будет стоить данная работа?');
adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
fullPrice = screenPrice + servicePrice1 + servicePrice2;
const servicePercentPrice = fullPrice - fullPrice * (rollback / 100);
console.log(Math.floor(servicePercentPrice));
if (fullPrice > 30000) {
	console.log('Даем скидку в 10%');
} else if(fullPrice> 1500 && fullPrice < 30000) {
	console.log('Даем скидку в 5%');
} else if(fullPrice < 1500 && fullPrice > 0) {
	console.log('Скидка не предусмотрена');
} else if(fullPrice < 0) {
	console.log('Что то пошло не так');
}
