var list = document.querySelector(".open_lang");
var listStyle = getStyle(list);
var m_menu_bnt = document.querySelector(".m-nav__btn");
var m_menu = document.querySelector(".m-menu");
var m_menuStyle = getStyle(m_menu);
var btn = document.querySelector(".lang-btn");
var span = document.querySelectorAll(".language");
var text = document.querySelector(".text-block");
var def_lang_block = document.querySelector(".def-lang-block");
var is_open = false;
var btn_text = document.querySelector(".lang-active-text");

btn.onclick = function () {
	if (listStyle.display == 'none') {
		is_open = false;
	} else {
		is_open = true;
	}

	if (is_open) {
		def_lang_block.style.display = 'flex';
		btn.style.background = '#EBEFF3';
		btn.style.borderBottomLeftRadius = '11px';
		btn.style.borderBottomRightRadius = '11px';
		for (var i = 0; i < span.length; i++) {
			span[i].style.color = '#B1B1B4';
		}
		btn.style.width = '200px';
		list.style.display = 'none';
		btn_text.style.position = 'relative';
		btn_text.style.bottom = '11px';
	} else {
		btn_text.style.bottom = '0';
		def_lang_block.style.display = 'none';
		list.style.top = '0px';
		list.style.paddingTop = '12px';
		list.style.borderTopLeftRadius = '11px';
		list.style.borderTopRightRadius = '11px';
		list.style.display = 'flex';
		btn.style.width = '210px';
		btn.style.borderBottomLeftRadius = '0px';
		btn.style.borderBottomRightRadius = '0px';
		for (var i = 0; i < span.length; i++) {
			span[i].style.color = '#fff';
		}
		btn.style.background = 'rgba(31, 80, 134, 0.3)';
	}
}

m_menu_bnt.onclick = function () {
	if (m_menuStyle.top == '-2000px') {
		is_open = true;
	} else {
		is_open = false;
	}

	if (is_open) {
		m_menu.style.top = '0px';
	} else {
		m_menu.style.top = '-2000px';
	}
}

function getStyle(elem) {
  return window.getComputedStyle ? getComputedStyle(elem) : elem.currentStyle;
}


document.querySelector(".lang__item-rus").onclick = function () {
	document.querySelector(".lang-active-text").innerText = document.querySelector(".lang__item-rus").innerText;
	document.querySelector(".lang-active-img").setAttribute( 'src', 'img/russia.svg' )
}

document.querySelector(".lang__item-en").onclick = function () {
	document.querySelector(".lang-active-text").innerText = document.querySelector(".lang__item-en").innerText;
	document.querySelector(".lang-active-img").setAttribute( 'src', 'img/united-kingdom.svg' );
}

document.querySelector(".lang__item-jap").onclick = function () {
	document.querySelector(".lang-active-text").innerText = document.querySelector(".lang__item-jap").innerText;
	document.querySelector(".lang-active-img").setAttribute( 'src', 'img/japan.svg' );
}

document.querySelector(".lang__item-kor").onclick = function () {
	document.querySelector(".lang-active-text").innerText = document.querySelector(".lang__item-kor").innerText;
	document.querySelector(".lang-active-img").setAttribute( 'src', 'img/korea.svg' );
}

document.querySelector(".lang__item-chine").onclick = function () {
	document.querySelector(".lang-active-text").innerText = document.querySelector(".lang__item-chine").innerText;
	document.querySelector(".lang-active-img").setAttribute( 'src', 'img/chine.svg' );
}

var btn2 = document.querySelector(".footer-lang-btn");

btn2.onclick = function () {
	var list = document.querySelector(".footer-open_lang");
	var listStyle = getStyle(list);
	var span = document.querySelectorAll(".footer-language");
	var def_lang_block = document.querySelector(".footer-def-lang-block");
	var is_open = false;


	if (listStyle.display == 'none') {
		is_open = false;
	} else {
		is_open = true;
	}

	if (is_open) {
		def_lang_block.style.display = 'flex';
		// btn2.style.background = 'rgba(174, 211, 255, 0.7)';
		btn2.style.borderBottomLeftRadius = '11px';
		btn2.style.borderBottomRightRadius = '11px';
		for (var i = 0; i < span.length; i++) {
			span[i].style.color = '#B1B1B4';
		}
		btn.style.width = '200px';
		list.style.display = 'none';
	} else {
		def_lang_block.style.display = 'none';
		list.style.top = '0px';
		list.style.paddingTop = '12px';
		list.style.borderTopLeftRadius = '11px';
		list.style.borderTopRightRadius = '11px';
		list.style.display = 'flex';
		btn2.style.width = '210px';
		btn2.style.borderBottomLeftRadius = '0px';
		btn2.style.borderBottomRightRadius = '0px';
		for (var i = 0; i < span.length; i++) {
			span[i].style.color = '#fff';
		}
		btn.style.background = 'rgba(31, 80, 134, 0.3)';
	}
}

document.querySelector(".footer-lang__item-rus").onclick = function () {
	document.querySelector(".footer-lang-active-text").innerText = document.querySelector(".footer-lang__item-rus").innerText;
	document.querySelector(".footer-lang-active-img").setAttribute( 'src', 'img/russia.svg' )
}

document.querySelector(".footer-lang__item-en").onclick = function () {
	document.querySelector(".footer-lang-active-text").innerText = document.querySelector(".footer-lang__item-en").innerText;
	document.querySelector(".footer-lang-active-img").setAttribute( 'src', 'img/united-kingdom.svg' );
}

document.querySelector(".footer-lang__item-jap").onclick = function () {
	document.querySelector(".footer-lang-active-text").innerText = document.querySelector(".footer-lang__item-jap").innerText;
	document.querySelector(".footer-lang-active-img").setAttribute( 'src', 'img/japan.svg' );
}

document.querySelector(".footer-lang__item-kor").onclick = function () {
	document.querySelector(".footer-lang-active-text").innerText = document.querySelector(".footer-lang__item-kor").innerText;
	document.querySelector(".footer-lang-active-img").setAttribute( 'src', 'img/korea.svg' );
}

document.querySelector(".footer-lang__item-chine").onclick = function () {
	document.querySelector(".footer-lang-active-text").innerText = document.querySelector(".footer-lang__item-chine").innerText;
	document.querySelector(".footer-lang-active-img").setAttribute( 'src', 'img/chine.svg' );
}