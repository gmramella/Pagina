var ano = new Date().getFullYear();
var mes = 0;

var mesesTamanhos = [31,28,31,30,31,30,31,31,30,31,30,31];
if ((ano % 4) == 0) {mesesTamanhos[1] = 29;}
var mesesNomes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var diasNomes = ["Do","Se","Te","Qu","Qu","Se","Sá"];

function todosDiasDoMes(mes) {
	var diasAnteriores;
	var primeiroDiaDaSemanaDoMes = new Date(ano, mes, 1).getDay();
	if (primeiroDiaDaSemanaDoMes == 0) {primeiroDiaDaSemanaDoMes = 7;}
	diasAnteriores = new Array(primeiroDiaDaSemanaDoMes);
	var mesAnterior = mes-1;
	if (mes == 0) {mesAnterior = 11;}
	for(i=diasAnteriores.length-1;i>=0;i--){diasAnteriores[i]=mesesTamanhos[mesAnterior]-(diasAnteriores.length-1-i);}

	var diasDoMes = new Array(0);
	for(i=0;i<mesesTamanhos[mes];i++) {diasDoMes.push(i+1)}

	var diasPosteriores;
	var ultimoDiaDaSemanaDoMes = new Date(ano, mes, mesesTamanhos[mes]).getDay();
	diasPosteriores = new Array(42-(diasAnteriores.length+mesesTamanhos[mes]));
	for(i=0;i<diasPosteriores.length;i++){diasPosteriores[i]=i+1;}
	
	var todosDias = new Array(0);
	for(i=0;i<diasAnteriores.length;i++) {todosDias.push(diasAnteriores[i]);}
	for(i=0;i<diasDoMes.length;i++) {todosDias.push(diasDoMes[i]);}
	for(i=0;i<diasPosteriores.length;i++) {todosDias.push(diasPosteriores[i]);}

	return todosDias;
}

var dia = todosDiasDoMes(0)[0];

var meses = new Array(0);
meses.push(todosDiasDoMes(0));
meses.push(todosDiasDoMes(1));
meses.push(todosDiasDoMes(2));
meses.push(todosDiasDoMes(3));
meses.push(todosDiasDoMes(4));
meses.push(todosDiasDoMes(5));
meses.push(todosDiasDoMes(6));
meses.push(todosDiasDoMes(7));
meses.push(todosDiasDoMes(8));
meses.push(todosDiasDoMes(9));
meses.push(todosDiasDoMes(10));
meses.push(todosDiasDoMes(11));

var cont = "001";

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

function PRINTlinhaDosDiasDaSemana() {
	return OPNtr+OPNtd+ diasNomes[0]+ CLStd+ OPNtd+ diasNomes[1]+ CLStd+ OPNtd+ diasNomes[2]+ CLStd+ OPNtd+ diasNomes[3]+ CLStd+ OPNtd+ diasNomes[4]+ CLStd+ OPNtd+ diasNomes[5]+ CLStd+ OPNtd+ diasNomes[6]+ CLStd+CLStr;
}

function converteNumeroParaStringCom3Digitos(num) {
	if(num < 9) {
		return "00" + num.toString();
	} else {
		if(num < 99) {
			return "0" + num.toString();
		} else {
			return num.toString();
		}
	}
}

function converteSucessorParaStringCom3Digitos(num) {
	if(num < 9) {
		return "00" + (num+1).toString();
	} else {
		if(num < 99) {
			return "0" + (num+1).toString();
		} else {
			return "" + (num+1).toString();
		}
	}
}

function PRINTdia(val) {
	var saida = OPNtdID("dia"+cont);
	cont = converteSucessorParaStringCom3Digitos(parseInt(cont));
	if (val >= 10) {
		saida = saida + "" + val.toString();
	} else {
		saida = saida + "0" + val.toString();
	}
	saida = saida + CLStd;

	if (val != mesesTamanhos[mes]) {
		val = val + 1;
	} else {
		val = 1;
		if (mes != 11) {
			mes = mes + 1;
		} else {
			mes = 1;
			ano = ano + 1;
		}
	}

	return saida;
}

function PRINTsemana(val,dias) {
	return OPNtrCLASS("numeros")+PRINTdia(dias[7*val+0])+PRINTdia(dias[7*val+1])+PRINTdia(dias[7*val+2])+PRINTdia(dias[7*val+3])+PRINTdia(dias[7*val+4])+PRINTdia(dias[7*val+5])+PRINTdia(dias[7*val+6])+CLStr;
}

function PRINTmes(val) {
return OPNtableID(mesesNomes[val])+OPNthead+OPNtr+OPNth+mesesNomes[val]+CLSth+CLStr+CLSthead+OPNtbody+PRINTlinhaDosDiasDaSemana()+
	PRINTsemana(0,meses[val])+PRINTsemana(1,meses[val])+PRINTsemana(2,meses[val])+PRINTsemana(3,meses[val])+PRINTsemana(4,meses[val])+PRINTsemana(5,meses[val])+
CLStbody+CLStable;
}

function acumulaQuantidadeDeDias(mes) {
	var cont = 1;
	for(i=0;i<mes;i++) {
		cont = cont + mesesTamanhos[mes-1];
	}
	return cont;
}

function pintaDiasDosOutrosMeses() {
	for(i=0;i<12;i++) {
		var d = 1 + 42*i;
		var id = "#dia";
		id = id + converteNumeroParaStringCom3Digitos(d);

		var primeiro = $(id).text();
		var quantos;
		if(primeiro != 1) {
			if(i != 0) {
				quantos = mesesTamanhos[i-1] - primeiro + 1;
				for(j=0;j<quantos;j++) {
					var id2 = "#dia" + converteNumeroParaStringCom3Digitos(d+j);
					$(id2).css('color', 'grey');
				}
			} else {
				quantos = mesesTamanhos[11] - primeiro + 1;
				for(j=0;j<quantos;j++) {
					var id2 = "#dia" + converteNumeroParaStringCom3Digitos(d+j);
					$(id2).css('color', 'grey');
				}
			}
		} else {
			quantos = 0;
		}
		var d = 42-mesesTamanhos[i]-quantos;
		for(j=0;j<d;j++) {
			var id2 = "#dia" + converteNumeroParaStringCom3Digitos(42*(i+1)-j);
			$(id2).css('color', 'grey');
		}
	}
}

function ordernarListaDeDatas(datas) {
	datas.sort(function (a,b) {
		var as = a.split("/"), bs = b.split("/");

		var ad = new Date(), bd = new Date();
		ad.setDate(parseInt(as[0]));
		ad.setMonth(parseInt([as[1]]));
		bd.setDate(parseInt(bs[0]));
		bd.setMonth(parseInt([bs[1]]));

		return ad - bd;
	});
	return datas;
}

function transformarListaEmConjunto(lista) {
	var saida = new Array(0);
	for(i=0;i<lista.length;i++) {
		var copiar = true;
		for(j=0;j<saida.length;j++) {
			if(lista[i] == saida[j]) {
				copiar = false;
			}
		}
		if(copiar == true) {
			saida.push(lista[i]);
		}
	}
	return saida;
}

function listaDasDatas() {
	var datas = "";

	var listaAulas = new Array(0);
	var listaDeDiasDeAula = aulas().select("dia");
	for(i=0;i<listaDeDiasDeAula.length;i++) {
		for(j=0;j<listaDeDiasDeAula[i].length;j++) {
			listaAulas.push(listaDeDiasDeAula[i][j]);
			datas = datas + listaDeDiasDeAula[i][j] + ",";
		}
	}
	var listaFeriados = new Array(0);
	var listaDeDiasDeFeriados = feriados().select("dia");
	for(i=0;i<listaDeDiasDeFeriados.length;i++) {
		for(j=0;j<listaDeDiasDeFeriados[i].length;j++) {
			listaFeriados.push(listaDeDiasDeFeriados[i][j]);
			datas = datas + listaDeDiasDeFeriados[i][j] + ",";
		}
	}
	var listaCursos = new Array(0);
	var listasDeDiasDeCursos = cursos().select("dias");
	for(i=0;i<listasDeDiasDeCursos.length;i++) {
		for(j=0;j<listasDeDiasDeCursos[i].length;j++) {
			listaCursos.push(listasDeDiasDeCursos[i][j]);
			datas = datas + listasDeDiasDeCursos[i][j] + ",";
		}
	}

	datas = datas.slice(0,-1);
	datas = ordernarListaDeDatas(datas.split(","));
	datas = transformarListaEmConjunto(datas);
	return datas;
}

function pintaDias() {
	var datas = listaDasDatas();

	for(i=0;i<datas.length;i++) {
		var dia = parseInt(datas[i].substring(0, 2));
		var mes = parseInt(datas[i].substring(3, 5));
		var primeiro = $("#dia" + converteNumeroParaStringCom3Digitos(42*(mes-1)+1)).text();
		var id = "#dia" + converteNumeroParaStringCom3Digitos(42*(mes-1)+1 + dia + mesesTamanhos[mes-2] - primeiro);

		$(id).css('cursor','pointer');

		var temEmAulas = 2;
		var temEmFeriados = 5;
		var temEmCursos = 11;

		var listaDeDiasEmAulas = aulas().select("dia");
		for(k=0;k<listaDeDiasEmAulas.length;k++) {
			if(listaDeDiasEmAulas[k] == datas[i]) {
				temEmAulas = 3;
			}
		}
		var listaDeDiasEmFeriados = feriados().select("dia");
		for(k=0;k<listaDeDiasEmFeriados.length;k++) {
			if(listaDeDiasEmFeriados[k] == datas[i]) {
				temEmFeriados = 7;
			}
		}
		var listasDeDiasEmCursos = cursos().select("dias");
		for(k=0;k<listasDeDiasEmCursos.length;k++) {
			for(l=0;l<listasDeDiasEmCursos[k].length;l++) {
				if(listasDeDiasEmCursos[k][l] == datas[i]) {
					temEmCursos = 13;
				}
			}
		}
		switch(temEmAulas*temEmFeriados*temEmCursos) {
			case 2*5*11: $(id).css('color','white');break;//fff
			case 2*5*13: $(id).css('color','blue');break;//ffv
			case 2*7*11: $(id).css('color','green');break;//fvf
			case 2*7*13: $(id).css('color','00ffff');break;//fvv
			case 3*5*11: $(id).css('color','red');break;//vff
			case 3*5*13: $(id).css('color','purple');break;//vfv
			case 3*7*11: $(id).css('color','brown');break;//vvf
			case 3*7*13: $(id).css('color','orange');break;//vvv
		}
	}
}

function controlaMouseEmCima() {
	var datas = listaDasDatas();

	var descricoes = new Array(0);

	for(i=0;i<datas.length;i++) {
		var dia = parseInt(datas[i].substring(0, 2));
		var mes = parseInt(datas[i].substring(3, 5));
		var primeiro = $("#dia" + converteNumeroParaStringCom3Digitos(42*(mes-1)+1)).text();
		var id = "#dia" + converteNumeroParaStringCom3Digitos(42*(mes-1)+1 + dia + mesesTamanhos[mes-2] - primeiro);

		$(id).mousemove(function(e){
			var descricao = "";

			var j = Math.ceil(this.id.substring(3, 6) / 42);
			var selecionado = $("#" + this.id).text()+"/"+((j < 10) ? ("0"+j):(""+j));

			var listasDeDiasEmAulas = aulas().select("nome","dia","horario");
			for(k=0;k<listasDeDiasEmAulas.length;k++) {
				if(listasDeDiasEmAulas[k][0] == selecionado) {
					descricao = descricao + "Nome: " + listasDeDiasEmAulas[k][2] + "\nHorario: " + listasDeDiasEmAulas[k][1] + "\n";
				}
			}
			var listasDeDiasEmFeriados = feriados().select("nome","dia");
			for(k=0;k<listasDeDiasEmFeriados.length;k++) {
				if(listasDeDiasEmFeriados[k][0] == selecionado) {
					descricao = descricao + "Nome: " + listasDeDiasEmFeriados[k][1] + "\n";
				}
			}
			var listasDeDiasEmCursos = cursos().select("nome","dias","horario","carga","local","preco");
			for(k=0;k<listasDeDiasEmCursos.length;k++) {
				for(l=0;l<listasDeDiasEmCursos[k].length;l++) {
					if(listasDeDiasEmCursos[k][1][l] == selecionado) {
						descricao = descricao + "Nome: " + listasDeDiasEmCursos[k][4] + "\nDias: " + listasDeDiasEmCursos[k][1] + "\nHorário: " + listasDeDiasEmCursos[k][2]  + "\nCarga: " + listasDeDiasEmCursos[k][0] + "\nLocal: " + listasDeDiasEmCursos[k][3] + "\nPreço: " + listasDeDiasEmCursos[k][5] + "\n";
					}
				}
			}

			$('#hoverdiv').text(descricao).show();
			$('#hoverdiv').css('width',385).css('top', 25).css('left', 495).css('white-space','pre').css('text-align','center');
		}).mouseout(function(){
			$('#hoverdiv').css('width',"").css('top',"").css('left',"").css('white-space',"").css('text-align',"").hide();
		});
	}
}

$(document).ready(function(){
	$('.body').append(OPNsection+OPNtable+OPNtr+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(0)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(1)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(2)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(3)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(4)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(5)+CLStd+CLStr+CLStable+CLStd+CLStr+OPNtr+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(6)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(7)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(8)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(9)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(10)+CLStd+CLStr+CLStable+CLStd+OPNtd+OPNtable+OPNtr+OPNtd+PRINTmes(11)+CLStd+CLStr+CLStable+CLStd+CLStr+CLStable+CLSsection);
	pintaDiasDosOutrosMeses();
	pintaDias();
	controlaMouseEmCima();
});