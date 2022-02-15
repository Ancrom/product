let buttonBurger = document.querySelector('.burger');
let sideMenu = document.querySelector('.side-menu');
let buttonClose = sideMenu.querySelector('.is-active');

buttonBurger.onclick = function() {
	sideMenu.classList.toggle('show');
};

buttonClose.onclick = function() {
	sideMenu.classList.toggle('show');
};
