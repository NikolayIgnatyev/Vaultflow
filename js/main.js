const btnBurger = document.querySelector('.btn-burger');
const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('.header__nav-menu');

btnBurger.addEventListener('click', () => {
	menu.classList.toggle('header__nav-menu-open');
});

btnClose.addEventListener('click', () => {
	console.log('sgfsdfg');
	menu.classList.remove('header__nav-menu-open');
})