function OPNaCLASS_HOVERTEXT_HREF(val1, val2, val3) {
	return '<a class=' + val1 + ' hovertext=' + val2 + ' href=' + val3 + '>';
}
function OPNdivCLASS(val) {return '<div class=' + val + '>';}
function OPNdivID(val) {return '<div id=' + val + '>';}
var OPNnav = '<nav>';

var CLSa = '</a>';
var CLSdiv = '</div>';
var CLSnav = '</nav>';

$(document).ready(function(){
	$('.body').prepend(
OPNdivID("hoverdiv")+CLSdiv+
OPNnav+
	OPNdivCLASS("bar")+
		'<a class="hover" hovertext="Currículos Lattes e Vitae" href="gmramella.github.io/curriculos/index.htm">'+
			"Currículos"+
		CLSa+
		'<a class="hover" hovertext="Cursos feitos na Feevale" href="gmramella.github.io/feevale/index.htm">'+
			"Feevale"+
		CLSa+
		'<a class="hover" hovertext="Cursos feitos na PUCRS" href="gmramella.github.io/pucrs/index.htm">'+
			"PUCRS"+
		CLSa+
		'<a class="hover" hovertext="Cursos feitos na Target Trust" href="gmramella.github.io/targettrust/index.htm">'+
			"Target Trust"+
		CLSa+
		'<a class="hover" hovertext="Cursos feitos na UFRGS" href="gmramella.github.io/ufrgs/index.htm">'+
			"UFRGS"+
		CLSa+
		'<a class="hover" hovertext="Cursos feitos na Unisinos" href="gmramella.github.io/unisinos/index.htm">'+
			"Unisinos"+
		CLSa+
		'<a class="hover" hovertext="Cursos feitos no Yázigi" href="gmramella.github.io/yazigi/index.htm">'+
			"Yázigi"+
		CLSa+
		'<a class="hover" hovertext="Eventos interessantes" href="gmramella.github.io/proximos/index.htm">'+
			"Próximos"+
		CLSa+
		'<a class="hover" hovertext="Tutoriais sobre os cursos feitos" href="gmramella.github.io/tutoriais/index.htm">'+
			"Tutoriais"+
		CLSa+
		'<a class="hover" hovertext="Links interessantes" href="gmramella.github.io/links/index.htm">'+
			"Links"+
		CLSa+
		'<a class="hover" hovertext="Monitoria" href="gmramella.github.io/monitoria/index.htm">'+
			"Monitoria"+
		CLSa+
		'<a class="hover" hovertext="Materiais sobre os idiomas estudados" href="gmramella.github.io/idiomas/index.htm">'+
			"Idiomas"+
		CLSa+
		'<a class="hover" hovertext="Arquivos de cursos de extensão" href="gmramella.github.io/arquivos/index.htm">'+
			"Arquivos"+
		CLSa+
		'<a class="hover" hovertext="Materiais dos cursos de Ciência da Computação e Jogos Digitais" href="gmramella.github.io/materiais/index.htm">'+
			"Materiais"+
		CLSa+
		'<a class="hover" hovertext="Cursos Online" href="gmramella.github.io/online/index.htm">'+
			"Cursos Online"+
		CLSa+
	CLSdiv+
CLSnav);
});