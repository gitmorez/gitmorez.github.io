var prev 	 = document.querySelector(".next");
var next 	 = document.querySelector(".prev");
var carusel  = document.querySelector(".carusel-block");
var position = 0;

next.onclick = function () {
	if (position <= 2023 && document.documentElement.clientWidth > 1300) {
		position += 289; 
		carusel.style.right = position + 'px';
	}

	if (position <= 2312 && document.documentElement.clientWidth > 1050 && document.documentElement.clientWidth <= 1300) {
		position += 289; 
		carusel.style.right = position + 'px';
	}

	if (position <= 2601 && document.documentElement.clientWidth <= 1050 && document.documentElement.clientWidth > 750) {
		position += 289; 
		carusel.style.right = position + 'px';
	}

	if (position <= 2890 && document.documentElement.clientWidth <= 750) {
		position += 289; 
		carusel.style.right = position + 'px';
	}
}

prev.onclick = function () {
	if (position > 0) {
	position -= 289; 
	carusel.style.right = position + 'px';
	}

	// if (position > 0 && document.documentElement.clientWidth > 1050 && document.documentElement.clientWidth <= 1300) {
	// position -= 289; 
	// carusel.style.right = position + 'px';
	// }
}

function getStyle(elem) {
  return window.getComputedStyle ? getComputedStyle(elem) : elem.currentStyle;
}