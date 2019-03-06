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
	$('.lecture:contains("Comunicação de Dados")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Economia A")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Fundamentos de Visão Computacional")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Gerência e Aplicações em Redes")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Laboratório de Sistema de Software")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Tópicos Especiais em Computação XVI (Computação e Música)")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Computação Gráfica")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Fotografia Computacional")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Programação Distribuída e Paralela")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Tópicos Especiais em Computação XXI (Algoritmos avançados)")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Modelagem e Gerenciamento de Processos de Negócio")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Projeto de Hiperdocumentos")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Redes Neurais e Sistemas Fuzzy")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Tópicos Especiais em Computação XXI (Metodologia da pesquisa científica)")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Aprendizado de Máquina")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Administração e Finanças")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Arquitetura e Desempenho de Banco de Dados")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Tópicos Especiais em Computação I (Seminários em Computação Gráfica e Computação Visual (State-of-the-Art in Computer Graphics))")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Tópicos Especiais em Computação III (Seminários em Computação Gráfica e Computação Visual (State-of-the-Art in Computer Graphics))")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Tópicos Especiais em Computação XV (Introdução a Algoritmos de Aproximação)")').css('color','red').parent().parent().parent().children('.info').css('color','red');
	$('.lecture:contains("Tópicos Especiais em Computação XXVII (Verificação de Software)")').css('color','red').parent().parent().parent().children('.info').css('color','red');

	$('.lecture:contains("Fundamentos de Computação Gráfica")').css('color','green').parent().parent().parent().children('.info').css('color','green');
});