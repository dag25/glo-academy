const title = 'Курс "JavaScript"';
const screens = 'Простые, Сложные, Интерактивные';
const screenPrice = 1;
const rollback = 100;
const fullPrice = 150;
const adaptive = true;
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



