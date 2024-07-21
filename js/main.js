const btnBurger = document.querySelector('.btn-burger');
const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('.header__nav-menu');

btnBurger.addEventListener('click', () => {
	menu.classList.add('header__nav-menu-open');
	document.body.classList.add('menu-open');
});

btnClose.addEventListener('click', () => {
	menu.classList.remove('header__nav-menu-open');
	document.body.classList.remove('menu-open');
})

