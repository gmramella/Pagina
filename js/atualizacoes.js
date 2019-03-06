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

var mudancas = ["2017/04/01 - Calendário atualizado","2017/04/01 - Linkedin atualizado","2017/04/01 - Curriculos modificados","2017/04/01 - Próximos cursos atualizados","2017/04/01 - Links para NELE e Instituto Confucio (UFRGS) adicionados","2017/04/01 - Coreano adicionado em Idiomas","2017/04/01 - Arquivos para Elaboração de currículo adicionado","2017/04/01 - Lista de atualizações adicionada à página"];

function foo() {
	var saida = "";
	for(i=0;i<mudancas.length;i++){saida += OPNtr+OPNtd+mudancas[i]+CLStd+CLStr;}
	return saida;
}

$(document).ready(function(){
	$('.body').append(OPNsection+OPNtable+OPNtr+OPNth+"Atualizações"+CLSth+CLStr+foo()+CLStable+CLSsection);
});