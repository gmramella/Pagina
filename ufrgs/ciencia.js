$(document).ready(function(){
	$('#lectures').css('margin', '0px 0px 0px 40px');
	$('th').css('text-align', 'left');
	$('td').css('text-align', 'left');

	$('.lecture1').hide();
	$('.lecture2').hide();
	$('.lecture3').hide();
	$('.lecture4').hide();
	$('.lecture5').hide();
	$('.lecture6').hide();
	$('.lecture7').hide();
	$('.lecture8').hide();

	$('.info').hide();
	$('.lecture').click(function(){$(this).parent().parent().parent().children('tbody').toggle();});

	$('.lecture').parent().parent().parent().children('.info').css('color', 'green');

	$('.lecture:contains("Biologia Computacional")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Comunica��o de Dados")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Economia A")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Fundamentos de Vis�o Computacional")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Ger�ncia e Aplica��es em Redes")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Laborat�rio de Sistema de Software")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("T�picos Especiais em Computa��o XVI (Computa��o e M�sica)")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Computa��o Gr�fica")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Fotografia Computacional")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Programa��o Distribu�da e Paralela")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("T�picos Especiais em Computa��o XXI (Algoritmos avan�ados)")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Modelagem e Gerenciamento de Processos de Neg�cio")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Projeto de Hiperdocumentos")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Redes Neurais e Sistemas Fuzzy")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("T�picos Especiais em Computa��o XXI (Metodologia da pesquisa cient�fica)")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Aprendizado de M�quina")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Administra��o e Finan�as")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Arquitetura e Desempenho de Banco de Dados")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("T�picos Especiais em Computa��o I (Semin�rios em Computa��o Gr�fica e Computa��o Visual (State-of-the-Art in Computer Graphics))")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("T�picos Especiais em Computa��o III (Semin�rios em Computa��o Gr�fica e Computa��o Visual (State-of-the-Art in Computer Graphics))")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("T�picos Especiais em Computa��o XV (Introdu��o a Algoritmos de Aproxima��o)")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("T�picos Especiais em Computa��o XXVII (Verifica��o de Software)")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Fundamentos de Computa��o Gr�fica")').css('color','green').parent().parent().parent().children('.info').css('color','green');
});