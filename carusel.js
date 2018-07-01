window.onload = function() {
	load();
}

var prevbtn 	 = document.querySelector(".next");
var nextbtn 	 = document.querySelector(".prev");
var carusel  	 = document.querySelector(".carusel-block");
var position 	 = 0;

function next() {
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

function load() {
	position = 289;
	carusel.style.right = position + 'px';
	position = 0;
	carusel.style.right = position + 'px';
}

function prev() {
	if (position > 0) {
		position -= 289; 
		carusel.style.right = position + 'px';
	}
}

prevbtn.addEventListener("click", prev);
nextbtn.addEventListener("click", next)

detectswipe('swipe', myfunction);