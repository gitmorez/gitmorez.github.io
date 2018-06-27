var element_right = [];
var element_left = [];
var element_bot = [];
var anim_box = document.querySelectorAll(".anim-block__item");

element_bot[0] = document.querySelector(".new-are__text-block-bot-anim");
element_bot[1] = document.querySelector(".card-andrey-anim");
element_bot[2] = document.querySelector(".ethereum-row-2-anim");
element_bot[3] = document.querySelector(".roadmap-anim");
element_bot[4] = document.querySelector(".footer-menu-anim");

element_left[0] = document.querySelector(".daily-digest-col-anim");
element_left[1] = document.querySelector(".footer__social-links-anim");
element_left[2] = document.querySelector(".team-col-1-anim");
element_left[3] = document.querySelector(".verification__text-left-anim");
element_left[4] = document.querySelector(".verification-col-1-anim");
element_left[5] = document.querySelector(".integration-col-1-anim");
element_left[6] = document.querySelector(".blockchain-col-1-anim");
element_left[7] = document.querySelector(".tag-clound-wrap-anim");
element_left[8] = document.querySelector(".new-are__text-block-anim");

element_right[0] = document.querySelector(".card-evgeny-anim");
element_right[1] = document.querySelector(".people-anim");
element_right[2] = document.querySelector(".blockchain-col-2-anim");
element_right[3] = document.querySelector(".desktop-bg-animate-anim");
element_right[4] = document.querySelector(".integration-col-2-anim");
element_right[5] = document.querySelector(".verification-col-2-anim");
element_right[6] = document.querySelector(".ethereum-money-anim");
element_right[7] = document.querySelector(".team-col-2-anim");
element_right[8] = document.querySelector(".footer-lang-anim");

if ( document.documentElement.clientWidth >= 1561 ) {
	element_left[8].style.left = '0px';
	element_left[8].style.bottom = '0px';
	element_left[8].style.opacity = '1';
} else {
	element_left[8].style.left = '0px';
	element_left[8].style.opacity = '1';
	element_left[8].style.bottom = '0px';
	element_left[8].style.transition = 'bottom 1s';
	element_left[8].style.bottom = '0px';
}


if ( document.documentElement.clientWidth >= 1561 ) {
	element_right[3].style.right = '0px';
	element_right[3].style.opacity = '1';
}

window.onscroll = function () {
	var scrollTop = window.pageYOffset;
	var w = document.documentElement.clientWidth;

	if ( scrollTop >= 180 && w >= 1561) {
		element_bot[0].style.bottom = '0px';
		element_bot[0].style.opacity = '1';

	}

	if ( scrollTop >= 1700 && w >= 1561) {
		element_bot[1].style.bottom = '0px';
		element_bot[1].style.opacity = '1';
	}

	if ( scrollTop >= 3300 && w >= 1561) {
		element_bot[2].style.bottom = '0px';
		element_bot[2].style.opacity = '1';
	}

	if ( scrollTop >= 4000 && w >= 1561) {
		element_bot[3].style.bottom = '0px';
		element_bot[3].style.opacity = '1';
	}

	if ( scrollTop >= 5200 && w >= 1561) {
		element_bot[4].style.bottom = '0px';
		element_bot[4].style.opacity = '1';
	}



	if ( scrollTop >= 500 && w <= 1560 && w >= 1061 ) {
		element_bot[0].style.bottom = '0px';
		element_bot[0].style.opacity = '1';
	}

	if ( scrollTop >= 2000 && w <= 1560 && w >= 1061 ) {
		element_bot[1].style.bottom = '0px';
		element_bot[1].style.opacity = '1';
	}

	if ( scrollTop >= 3700 && w <= 1560 && w >= 1061 ) {
		element_bot[2].style.bottom = '0px';
		element_bot[2].style.opacity = '1';
	}

	if ( scrollTop >= 4400 && w <= 1560 && w >= 1061 ) {
		element_bot[3].style.bottom = '0px';
		element_bot[3].style.opacity = '1';
	}

	if ( scrollTop >= 5600 && w <= 1560 && w >= 1061) {
		element_bot[4].style.bottom = '0px';
		element_bot[4].style.opacity = '1';
	}




	if ( scrollTop >= 700 && w <= 1061 ) {
		element_bot[0].style.bottom = '0px';
		element_bot[0].style.opacity = '1';
	}

	if ( scrollTop >= 2700 && w <= 1061 ) {
		element_bot[1].style.bottom = '0px';
		element_bot[1].style.opacity = '1';
	}

	if ( scrollTop >= 4900 && w <= 1061 ) {
		element_bot[2].style.bottom = '0px';
		element_bot[2].style.opacity = '1';
	}

	if ( scrollTop >= 5500 && w <= 1061 ) {
		element_bot[3].style.bottom = '0px';
		element_bot[3].style.opacity = '1';
	}

	if ( scrollTop >= 6915 && w <= 1061) {
		element_bot[4].style.bottom = '0px';
		element_bot[4].style.opacity = '1';
	}





	if ( scrollTop >= 1100 && w >= 1561) {
		element_left[6].style.left = '0px';
		element_left[6].style.bottom = '0px';
		element_left[6].style.opacity = '1';
	}

	if ( scrollTop >= 600 && w >= 1561 ) {
		element_left[7].style.left = '0px';
		element_left[7].style.bottom = '0px';
		element_left[7].style.opacity = '1';
	}

	if ( scrollTop >= 1700 && w >= 1561 ) {
		element_left[0].style.left = '0px';
		element_left[0].style.bottom = '0px';
		element_left[0].style.opacity = '1';
		anim_box[1].style.opacity = '1';
		anim_box[2].style.opacity = '1';
	}

	if ( scrollTop >= 2550 && w >= 1561 ) {
		element_left[4].style.left = '0px';
		element_left[4].style.bottom = '0px';
		element_left[4].style.opacity = '1';
	}

	if ( scrollTop >= 2100 && w >= 1561 ) {
		element_left[5].style.left = '0px';
		element_left[5].style.bottom = '0px';
		element_left[5].style.opacity = '1';
	}

	if ( scrollTop >= 3000 && w >= 1561 ) {
		element_left[3].style.left = '0px';
		element_left[3].style.bottom = '0px';
		element_left[3].style.opacity = '1';
	}

	if ( scrollTop >= 4500 && w >= 1561 ) {
		element_left[2].style.left = '0px';
		element_left[2].style.bottom = '0px';
		element_left[2].style.opacity = '1';
	}

	if ( scrollTop >= 5200 && w >= 1561 ) {
		element_left[1].style.bottom = '0px';
		element_left[1].style.left = '0px';
		element_left[1].style.opacity = '1';
	}



	if ( scrollTop >= 1500 && w <= 1560 && w >= 1061 ) {
		element_left[6].style.left = '0px';
		element_left[6].style.bottom = '0px';
		element_left[6].style.opacity = '1';
	}

	if ( scrollTop >= 1000 && w <= 1560 && w >= 1061 ) {
		element_left[7].style.left = '0px';
		element_left[7].style.bottom = '0px';
		element_left[7].style.opacity = '1';
	}

	if ( scrollTop >= 2000 && w <= 1560 && w >= 1061 ) {
		element_left[0].style.left = '0px';
		element_left[0].style.bottom = '0px';
		element_left[0].style.opacity = '1';
		anim_box[1].style.opacity = '1';
		anim_box[2].style.opacity = '1';
	}

	if ( scrollTop >= 3000 && w <= 1560 && w >= 1061 ) {
		element_left[4].style.left = '0px';
		element_left[4].style.bottom = '0px';
		element_left[4].style.opacity = '1';
	}

	if ( scrollTop >= 2500 && w <= 1560 && w >= 1061 ) {
		element_left[5].style.left = '0px';
		element_left[5].style.bottom = '0px';
		element_left[5].style.opacity = '1';
	}

	if ( scrollTop >= 3300 && w <= 1560 && w >= 1061 ) {
		element_left[3].style.left = '0px';
		element_left[3].style.bottom = '0px';
		element_left[3].style.opacity = '1';
	}

	if ( scrollTop >= 4900 && w <= 1560 && w >= 1061 ) {
		element_left[2].style.left = '0px';
		element_left[2].style.bottom = '0px';
		element_left[2].style.opacity = '1';

	}

	if ( scrollTop >= 5600 && w <= 1560 && w >= 1061 ) {
		element_left[1].style.transition = 'bottom 1s, opacity 2.7s';
		element_left[1].style.bottom = '0px';
		element_left[1].style.left = '0px';
		element_left[1].style.opacity = '1';
	}




	if ( scrollTop >= 2000 && w <= 1061 ) {
		element_left[6].style.transition = 'bottom 1s, opacity 2.7s';
		element_left[6].style.bottom = '0px';
		element_left[6].style.left = '0px';
		element_left[6].style.opacity = '1';
	}

	if ( scrollTop >= 1000 && w <= 1061 ) {
		element_left[7].style.transition = 'bottom 1s, opacity 2.7s';
		element_left[7].style.bottom = '0px';
		element_left[7].style.left = '0px';
		element_left[7].style.opacity = '1';
	}

	if ( scrollTop >= 2400 && w <= 1061 ) {
		element_left[0].style.transition = 'bottom 1s, opacity 2.7s';
		element_left[0].style.bottom = '0px';
		element_left[0].style.left = '0px';
		anim_box[1].style.opacity = '1';
		element_left[0].style.opacity = '1';
		anim_box[2].style.opacity = '1';
	}

	if ( scrollTop >= 4000 && w <= 1061 ) {
		element_left[4].style.transition = 'bottom 1s, opacity 2.7s';
		element_left[4].style.bottom = '0px';
		element_left[4].style.left = '0px';
		element_left[4].style.opacity = '1';
	}

	if ( scrollTop >= 3300 && w <= 1061 ) {
		element_left[5].style.transition = 'bottom 1s, opacity 2.7s';
		element_left[5].style.bottom = '0px';
		element_left[5].style.left = '0px';
		element_left[5].style.opacity = '1';
	}

	if ( scrollTop >= 4200 && w <= 1061 ) {
		element_left[3].style.transition = 'bottom 1s, opacity 2.7s';
		element_left[3].style.bottom = '0px';
		element_left[3].style.left = '0px';
		element_left[3].style.opacity = '1';
	}

	if ( scrollTop >= 5900 && w <= 1061 ) {
		element_left[2].style.transition = 'bottom 1s, opacity 2.7s';
		element_left[2].style.bottom = '0px';
		element_left[2].style.left = '0px';
		element_left[2].style.opacity = '1';
	}

	if ( scrollTop >= 6860 && w <= 1099 ) {
		element_left[1].style.transition = 'bottom 1s, opacity 2.7s';
		element_left[1].style.bottom = '0px';
		element_left[1].style.left = '0px';
		element_left[1].style.opacity = '1';
	}




	if ( scrollTop >= 3000 && w >= 1561) {
		element_right[6].style.bottom = '0px';
		element_right[6].style.right = '0px';
		element_right[6].style.opacity = '1';
	}

	if ( scrollTop >= 4500 && w >= 1561 ) {
		element_right[7].style.bottom = '0px';
		element_right[7].style.right = '0px';
		element_right[7].style.opacity = '1';
	}

	if ( scrollTop >= 1700 && w >= 1561 ) {
		element_right[0].style.bottom = '0px';
		element_right[0].style.right = '0px';
		element_right[0].style.opacity = '1';
	}

	if ( scrollTop >= 2100 && w >= 1561 ) {
		element_right[4].style.bottom = '0px';
		element_right[4].style.right = '0px';
		element_right[4].style.opacity = '1';
	}

	if ( scrollTop >= 2550 && w >= 1561 ) {
		element_right[5].style.bottom = '0px';
		element_right[5].style.right = '0px';
		element_right[5].style.opacity = '1';
	}

	if ( scrollTop >= 1100 && w >= 1561 ) {
		element_right[2].style.bottom = '0px';
		element_right[2].style.right = '0px';
		element_right[2].style.opacity = '1';
	}

	if ( scrollTop >= 600 && w >= 1561 ) {
		element_right[1].style.bottom = '0px';
		element_right[1].style.right = '0px';
		element_right[1].style.opacity = '1';
	}

	if ( scrollTop >= 5200 && w >= 1561 ) {
		element_right[8].style.bottom = '0px';
		element_right[8].style.right = '0px';
		element_right[8].style.opacity = '1';
	}




	if ( scrollTop >= 3300 && w <= 1560 && w >= 1061) {
		element_right[6].style.bottom = '0px';
		element_right[6].style.right = '0px';
		element_right[6].style.opacity = '1';
	}

	if ( scrollTop >= 4900 && w <= 1560 && w >= 1061 ) {
		element_right[7].style.bottom = '0px';
		element_right[7].style.right = '0px';
		element_right[7].style.opacity = '1';
	}

	if ( scrollTop >= 2000 && w <= 1560 && w >= 1061 ) {
		element_right[0].style.bottom = '0px';
		element_right[0].style.right = '0px';
		element_right[0].style.opacity = '1';
	}

	if ( scrollTop >= 2660 && w <= 1560 && w >= 1061 ) {
		element_right[8].style.bottom = '0px';
		element_right[8].style.right = '0px';
		element_right[8].style.opacity = '1';
	}

	if ( scrollTop >= 3000 && w <= 1560 && w >= 1061 ) {
		element_right[5].style.bottom = '0px';
		element_right[5].style.right = '0px';
		element_right[5].style.opacity = '1';
	}

	if ( scrollTop >= 1500 && w <= 1560 && w >= 1061 ) {
		element_right[2].style.bottom = '0px';
		element_right[2].style.right = '0px';
		element_right[2].style.opacity = '1';
	}

	if ( scrollTop >= 1000 && w <= 1560 && w >= 1061 ) {
		element_right[1].style.bottom = '0px';
		element_right[1].style.right = '0px';
		element_right[1].style.opacity = '1';
	}

	if ( scrollTop >= 2500 && w <= 1560 && w >= 1061 ) {
		element_right[4].style.bottom = '0px';
		element_right[4].style.right = '0px';
		element_right[4].style.opacity = '1';
	}

	if ( scrollTop >= 5600 && w <= 1560 && w >= 1061 ) {
		element_right[8].style.right = '0px';
		element_right[8].style.bottom = '0px';
		element_right[8].style.transition = 'bottom 1s, opacity 2.7s';
		element_right[8].style.opacity = '1';
	}




	if ( scrollTop >= 4400 && w <= 1061) {
		element_right[6].style.bottom = '0px';
		element_right[6].style.transition = 'bottom 1s, opacity 2.7s';
		element_right[6].style.right = '0px';
		element_right[6].style.opacity = '1';
	}

	if ( scrollTop >= 5930 && w <= 1061 ) {
		element_right[7].style.bottom = '0px';
		element_right[7].style.transition = 'bottom 1s, opacity 2.7s';
		element_right[7].style.right = '0px';
		element_right[7].style.opacity = '1';
	}

	if ( scrollTop >= 3000 && w <= 1061 ) {
		element_right[0].style.bottom = '0px';
		element_right[0].style.transition = 'bottom 1s, opacity 2.7s';
		element_right[0].style.right = '0px';
		element_right[0].style.opacity = '1';
	}

	if ( scrollTop >= 3600 && w <= 1061 ) {
		element_right[4].style.bottom = '0px';
		element_right[4].style.transition = 'bottom 1s, opacity 2.7s';
		element_right[4].style.right = '0px';
		element_right[4].style.opacity = '1';
	}

	if ( scrollTop >= 3800 && w <= 1061 ) {
		element_right[5].style.bottom = '0px';
		element_right[5].style.transition = 'bottom 1s, opacity 2.7s';
		element_right[5].style.right = '0px';
		element_right[5].style.opacity = '1';
	}

	if ( scrollTop >= 1600 && w <= 1061 ) {
		element_right[2].style.bottom = '0px';
		element_right[2].style.right = '0px';
		element_right[2].style.transition = 'bottom 1s, opacity 2.7s';
		element_right[2].style.opacity = '1';
	}

	if ( scrollTop >= 1300 && w <= 1061 ) {
		element_right[1].style.bottom = '0px';
		element_right[1].style.transition = 'bottom 1s, opacity 2.7s';
		element_right[1].style.right = '0px';
		element_right[1].style.opacity = '1';
	}

	if ( scrollTop >= 5310 && w <= 1061 ) {
		element_right[8].style.right = '0px';
		element_right[8].style.bottom = '0px';
		element_right[8].style.transition = 'bottom 1s, opacity 2.7s';
		element_right[8].style.opacity = '1';
	}
}



// alert( 'Текущая прокрутка сверху: ' + window.pageYOffset );

