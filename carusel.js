var prev 	 = document.querySelector(".next");
var next 	 = document.querySelector(".prev");
var carusel  = document.querySelector(".carusel-block");
var position = 0;

next.onclick = function () {
	if (position <= 2023) {
		position += 289; 
		carusel.style.right = position + 'px';
	}
}

prev.onclick = function () {
	if (position > 0) {
	position -= 289; 
	carusel.style.right = position + 'px';
	}
}

function getStyle(elem) {
  return window.getComputedStyle ? getComputedStyle(elem) : elem.currentStyle;
}