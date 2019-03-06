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

	$('.lecture').parent().parent().parent().children('.info').css('color', 'red');

	//$('.lecture:contains("Algoritmos e Programa��o em C++")').css('color','green').parent().parent().parent().children('.info').css('color','green');
	//$('.lecture:contains("Introdu��o � Computa��o e suas Aplica��es")').css('color','yellow').parent().parent().parent().children('.info').css('color','yellow');
	//$('.lecture:contains("Roteiros")').css('color','green').parent().parent().parent().children('.info').css('color','green');
	//$('.lecture:contains("Matem�tica para Computa��o Gr�fica: Vetores, Matrizes e Fun��es")').css('color','yellow').parent().parent().parent().children('.info').css('color','yellow');
	//$('.lecture:contains("Oficina de Jogos: Fundamentos")').css('color','green').parent().parent().parent().children('.info').css('color','green');
});

function abrirEmenta(cod) {
	var text = "";
	switch(cod) {
		case 229834:
			text = "Aborda o estudo das ferramentas de edi��o digital, contemplando pr�ticas nos softwares que cobrem as necessidades b�sicas da produ��o gr�fica, publicidade e propaganda, editora��o, tratamento de imagens, edi��o e ilustra��o.";
			break;
		case 229894:
			text = "Aborda os conceitos fundamentais de l�gica e programa��o para jogos.";
			break;
		case 229914:
			text = "A disciplina prop�e a explora��o de t�cnicas gr�ficas de representa��o da figura humana nas suas diversas possibilidades compositivas e construtivas.";
			break;
		case 255534:
			text = "Aborda aspectos da cultura dos jogos digitais na sociedade e o desenvolvimento deste mercado; apresenta a pr�tica de cria��o e adapta��o de jogos a partir de c�lulas de intera��o.";
			break;
		case 255544:
			text = "Aborda as pr�ticas de desenvolvimento de jogos digitais em equipes, integrando os conhecimentos de programa��o, arte e gest�o com �nfase em jogos casuais.";
			break;

		case 229964:
			text = "Estudo de metodologias de concep��o e design de jogos digitais, abrangendo planejamento, narrativa, jogabilidade, documenta��o e gerenciamento de projetos.";
			break;
		case 230004:
			text = "Estuda t�cnicas de ilustra��o voltadas ao desenvolvimento de narrativas visuais.";
			break;
		case 230014:
			text = "Estudo de t�cnicas, conceitos e fundamentos para desenvolvimento de anima��o.";
			break;
		case 230054:
			text = "Estuda linguagens e softwares de programa��o no desenvolvimento de jogos para plataformas m�veis.";
			break;
		case 255554:
			text = "Aborda as pr�ticas de desenvolvimento de jogos digitais em equipes, integrando os conhecimentos de programa��o, arte e gest�o com �nfase em jogos para dispositivos m�veis.";
			break;

		case 230094:
			text = "Estuda os elementos da linguagem visual dos games e os princ�pios gerais da composi��o de imagem; analisa os aspectos formais e funcionais na game arte.";
			break;
		case 230124:
			text = "Aborda os princ�pios de modelagem, de texturiza��o, de ilumina��o e de anima��o para modelos e ambientes 3D.";
			break;
		case 230154:
			text = "Estudo das potencialidades criativas como elemento motivacional com �nfase na import�ncia da qualidade e criatividade no desenvolvimento pessoal e profissional.";
			break;
		case 230184:
			text = "Aborda os conceitos fundamentais, m�todos e t�cnicas de l�gica de programa��o em engines para jogos 2D. ";
			break;
		case 255564:
			text = "Aborda as pr�ticas de desenvolvimento de jogos digitais em equipes integrando os conhecimentos de programa��o, arte e gest�o.";
			break;

		case 230224:
			text = "Estudo dos m�todos de an�lise de jogos atrav�s de diferentes teorias cient�ficas.";
			break;
		case 230254:
			text = "Estudo de t�cnicas de cria��o, desenvolvimento e anima��o de personagens tridimensionais e digitais.";
			break;
		case 230274:
			text = "Aborda o desenho e a concep��o de paisagens naturais, urbanas e de objetos, em meios digitais e anal�gicos.";
			break;
		case 230294:
			text = "Aborda os conceitos fundamentais, m�todos e t�cnicas de l�gica de programa��o em engines para jogos 3D.";
			break;
		case 255574:
			text = "Aborda as pr�ticas de desenvolvimento de jogos digitais em equipes integrando os conhecimentos de programa��o, arte e gest�o.";
			break;

		case 230384:
			text = "Estudo de t�cnicas avan�adas de cria��o e desenvolvimento de modelos tridimensionais e digitais.";
			break;
		case 230424:
			text = "Aborda conceitos e pr�ticas de edi��o de v�deo, produ��o audiovisual, finaliza��o de v�deo e anima��o para cinema, TV e Jogos.";
			break;
		case 230454:
			text = "Aborda conceitos, t�cnicas de programa��o e persist�ncia de dados em engine de jogos multiplayer.";
			break;
		case 255584:
			text = "Aborda as pr�ticas de desenvolvimento de jogos digitais em equipes integrando os conhecimentos de programa��o, arte e gest�o.";
			break;
		case 255594:
			text = "Estuda os setores criativos e seus modelos de neg�cios. Aborda a pr�tica de produ��o de um plano de neg�cios.";
			break;

		case 229994:
			text = "Conhecimento cr�tico da forma��o sociopol�tica, econ�mica e cultural brasileira, numa dimens�o hist�rica, que permita identificar a complexidade da mesma e suas contradi��es internas, considerando a inser��o do Brasil no processo global.";
			break;
		case 230494:
			text = "Aborda conceitos contempor�neos da �rea de Jogos Digitais, aprofundando as tem�ticas trabalhadas durante o curso.";
			break;
		case 230504:
			text = "Aborda os conceitos de cria��o de trilhas, temas e efeitos especiais para jogos digitais.";
			break;
		case 230514:
			text = "Aborda as pr�ticas de concep��o e pr�-produ��o de jogos digitais em equipes, integrando os conhecimentos de programa��o, arte e gest�o, com �nfase nas fases de pr�-produ��o e prototipagem.";
			break;
		case 230564:
			text = "Caracteriza��o da sociologia como ci�ncia e das diversas abordagens sobre a sociedade; identifica��o da sociedade brasileira em especial.";
			break;

		case 230528:
			text = "Aborda as pr�ticas de produ��o e implementa��o de jogos digitais em equipes, integrando os conhecimentos de programa��o, arte e gest�o com �nfase na produ��o do planejamento executado em Projeto VI.";
			break;
	}
	alert(text);
}