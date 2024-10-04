const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const a = document.querySelectorAll('a');
const adv = document.querySelector('.adv');

const ul_0 = book[0].querySelector('ul');
const children_0 = [...ul_0.children];

const ul_5 = book[5].querySelector('ul');
const children_5 = [...ul_5.children];

const ul_2 = book[2].querySelector('ul');
const children_2 = [...ul_2.children];

children_0[3].after(children_0[6]);
children_0[6].after(children_0[8]);
children_0[9].after(children_0[2]);
a[4].innerText = 'Книга 3. this и Прототипы Объектов';
children_5[3].before(children_5[9]);
children_5[4].after(children_5[2]);
children_5[8].before(children_5[5]);
children_2[8].after(
	(children_2[8].cloneNode(true).textContent = 'Глава 8: За пределами ES6'),
);


book[0].before(book[1]);
book[3].before(book[4]);
book[5].after(book[2]);
adv.remove();
document.body.style.backgroundImage="url(image/you-dont-know-js.jpg)";
