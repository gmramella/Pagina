var OPNsection = '<section>';
var OPNtable = '<table>';
function OPNtableID(val) {return '<table id='+val+'>';}
var OPNtbody = '<tbody>';
var OPNtr = '<tr>';
function OPNtrCLASS(val) {return '<tr class='+val+'>';}
var OPNtd = '<td>';
function OPNtdID(val) {return '<td id='+val+'>';}
var OPNth = '<th colspan="7">';
var OPNthead = '<thead>';

var CLSsection = '</section>';
var CLStable = '</table>';
var CLStbody = '</tbody>';
var CLStr = '</tr>';
var CLStd = '</td>';
var CLSth = '</th>';
var CLSthead = '</thead>';
var BR = '<br/>';

var mudancas = ["2017/04/01 - Calend�rio atualizado","2017/04/01 - Linkedin atualizado","2017/04/01 - Curriculos modificados","2017/04/01 - Pr�ximos cursos atualizados","2017/04/01 - Links para NELE e Instituto Confucio (UFRGS) adicionados","2017/04/01 - Coreano adicionado em Idiomas","2017/04/01 - Arquivos para Elabora��o de curr�culo adicionado","2017/04/01 - Lista de atualiza��es adicionada � p�gina"];

function foo() {
	var saida = "";
	for(i=0;i<mudancas.length;i++){saida += OPNtr+OPNtd+mudancas[i]+CLStd+CLStr;}
	return saida;
}

$(document).ready(function(){
	$('.body').append(OPNsection+OPNtable+OPNtr+OPNth+"Atualiza��es"+CLSth+CLStr+foo()+CLStable+CLSsection);
});