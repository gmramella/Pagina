var OPNheader = '<header>';
function OPNulCLASS(val) {
	return '<ul class=' + val + '>';
}
var OPNli = '<li>';
function OPNliCLASS(val) {
	return '<li class=' + val + '>';
}
function OPNaCLASS_HOVERTEXT_HREF(val1, val2, val3) {
	return '<a class=' + val1 + ' hovertext=' + val2 + ' href=' + val3 + '>';
}
function OPNimgCLASS_BORDER_SRC(val1, val2, val3) {
	return '<img class=' + val1 + ' border=' + val2 + ' src=' + val3 + '>';
}
function OPNh1CLASS(val) {
	return '<h1 class=' + val + '>';
}

var CLSheader = '</header>';
var CLSul = '</ul>';
var CLSli = '</li>';
var CLSa = '</a>';
var CLSh1 = '</h1>';

$(document).ready(function(){
	$('.body').prepend(
OPNheader+
	OPNulCLASS("logo_and_pagename_socialmedia")+
		OPNliCLASS("header_left")+
			OPNaCLASS_HOVERTEXT_HREF("hover", "Página Inicial", "https://gmramella.github.io")+
				OPNimgCLASS_BORDER_SRC("logo", "0", "../img/cara.jpg")+
			CLSa+
		CLSli+
		OPNliCLASS("header_center")+
			OPNh1CLASS("pagename")+"Página pessoal do Rex"+CLSh1+
		CLSli+
		OPNliCLASS("header_right")+
			OPNulCLASS("contact")+
				OPNli+
					OPNaCLASS_HOVERTEXT_HREF("hover", "Facebook", "https://www.facebook.com/giuseppe.ramella.7")+
						OPNimgCLASS_BORDER_SRC("icon", "0", "../img/facebook_icon.png")+
					CLSa+
				CLSli+
				OPNli+
					OPNaCLASS_HOVERTEXT_HREF("hover", "LinkedIn", "https://www.linkedin.com/in/giuseppe-ramella-97028083")+
						OPNimgCLASS_BORDER_SRC("icon", "0", "../img/linkedin_icon.png")+
					CLSa+
				CLSli+
				OPNli+
					OPNaCLASS_HOVERTEXT_HREF("hover", "GitHub", "https://github.com/gmramella")+
						OPNimgCLASS_BORDER_SRC("icon", "0", "../img/github_icon.png")+
					CLSa+
				CLSli+
				OPNli+
					OPNaCLASS_HOVERTEXT_HREF("hover", "Hotmail", "mailto:norandram@hotmail.com")+
						OPNimgCLASS_BORDER_SRC("icon", "0", "../img/hotmail_icon.png")+
					CLSa+
				CLSli+
			CLSul+
		CLSli+
	CLSul+
CLSheader);
});