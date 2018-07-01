window.onload = function() {
	load(0);
	load(1);
	load(2);
}

var prevbtn 	 = document.querySelectorAll(".next");
var nextbtn 	 = document.querySelectorAll(".prev");
var carusel  	 = document.querySelectorAll(".carusel-block");
var position 	 = [0, 0, 0];

function next(el) {
	if (position[el] <= 2023 && document.documentElement.clientWidth > 1300) {
		position[el] += 289; 
		carusel[el].style.right = position[el] + 'px';
	}

	if (position[el] <= 2312 && document.documentElement.clientWidth > 1050 && document.documentElement.clientWidth <= 1300) {
		position[el] += 289; 
		carusel[el].style.right = position[el] + 'px';
	}

	if (position[el] <= 2601 && document.documentElement.clientWidth <= 1050 && document.documentElement.clientWidth > 750) {
		position[el] += 289; 
		carusel[el].style.right = position[el] + 'px';
	}

	if (position[el] <= 2890 && document.documentElement.clientWidth <= 750) {
		position[el] += 289; 
		carusel[el].style.right = position[el] + 'px';
	}
}

function load(el) {
	position[el] = 0;
	carusel[el].style.right = position[el] + 'px';
}

function prev(el) {
	if (position[el] > 0) {
		position[el] -= 289; 
		carusel[el].style.right = position[el] + 'px';
	}
}


prevbtn[0].addEventListener("click", function() {prev(0)});
nextbtn[0].addEventListener("click", function() {next(0)});

prevbtn[1].addEventListener("click", function() {prev(1)});
nextbtn[1].addEventListener("click", function() {next(1)});

prevbtn[2].addEventListener("click", function() {prev(2)});
nextbtn[2].addEventListener("click", function() {next(2)});

detectswipe('swipe-popular', myfunction);
detectswipe('swipe-news', myfunction);
detectswipe('swipe-discount', myfunction);