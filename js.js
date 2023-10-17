/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Ничто не истинно.');
	alert('Всё дозволено.')
	alert('Хороший, плохой.')
	alert('Главное - у кого ружье!')
})