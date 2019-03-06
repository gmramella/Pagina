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

	//$('.lecture:contains("Algoritmos e Programação em C++")').css('color','green').parent().parent().parent().children('.info').css('color','green');
	//$('.lecture:contains("Introdução à Computação e suas Aplicações")').css('color','yellow').parent().parent().parent().children('.info').css('color','yellow');
	//$('.lecture:contains("Roteiros")').css('color','green').parent().parent().parent().children('.info').css('color','green');
	//$('.lecture:contains("Matemática para Computação Gráfica: Vetores, Matrizes e Funções")').css('color','yellow').parent().parent().parent().children('.info').css('color','yellow');
	//$('.lecture:contains("Oficina de Jogos: Fundamentos")').css('color','green').parent().parent().parent().children('.info').css('color','green');
});

function abrirEmenta(cod) {
	var text = "";
	switch(cod) {
		case 229834:
			text = "Aborda o estudo das ferramentas de edição digital, contemplando práticas nos softwares que cobrem as necessidades básicas da produção gráfica, publicidade e propaganda, editoração, tratamento de imagens, edição e ilustração.";
			break;
		case 229894:
			text = "Aborda os conceitos fundamentais de lógica e programação para jogos.";
			break;
		case 229914:
			text = "A disciplina propõe a exploração de técnicas gráficas de representação da figura humana nas suas diversas possibilidades compositivas e construtivas.";
			break;
		case 255534:
			text = "Aborda aspectos da cultura dos jogos digitais na sociedade e o desenvolvimento deste mercado; apresenta a prática de criação e adaptação de jogos a partir de células de interação.";
			break;
		case 255544:
			text = "Aborda as práticas de desenvolvimento de jogos digitais em equipes, integrando os conhecimentos de programação, arte e gestão com ênfase em jogos casuais.";
			break;

		case 229964:
			text = "Estudo de metodologias de concepção e design de jogos digitais, abrangendo planejamento, narrativa, jogabilidade, documentação e gerenciamento de projetos.";
			break;
		case 230004:
			text = "Estuda técnicas de ilustração voltadas ao desenvolvimento de narrativas visuais.";
			break;
		case 230014:
			text = "Estudo de técnicas, conceitos e fundamentos para desenvolvimento de animação.";
			break;
		case 230054:
			text = "Estuda linguagens e softwares de programação no desenvolvimento de jogos para plataformas móveis.";
			break;
		case 255554:
			text = "Aborda as práticas de desenvolvimento de jogos digitais em equipes, integrando os conhecimentos de programação, arte e gestão com ênfase em jogos para dispositivos móveis.";
			break;

		case 230094:
			text = "Estuda os elementos da linguagem visual dos games e os princípios gerais da composição de imagem; analisa os aspectos formais e funcionais na game arte.";
			break;
		case 230124:
			text = "Aborda os princípios de modelagem, de texturização, de iluminação e de animação para modelos e ambientes 3D.";
			break;
		case 230154:
			text = "Estudo das potencialidades criativas como elemento motivacional com ênfase na importância da qualidade e criatividade no desenvolvimento pessoal e profissional.";
			break;
		case 230184:
			text = "Aborda os conceitos fundamentais, métodos e técnicas de lógica de programação em engines para jogos 2D. ";
			break;
		case 255564:
			text = "Aborda as práticas de desenvolvimento de jogos digitais em equipes integrando os conhecimentos de programação, arte e gestão.";
			break;

		case 230224:
			text = "Estudo dos métodos de análise de jogos através de diferentes teorias científicas.";
			break;
		case 230254:
			text = "Estudo de técnicas de criação, desenvolvimento e animação de personagens tridimensionais e digitais.";
			break;
		case 230274:
			text = "Aborda o desenho e a concepção de paisagens naturais, urbanas e de objetos, em meios digitais e analógicos.";
			break;
		case 230294:
			text = "Aborda os conceitos fundamentais, métodos e técnicas de lógica de programação em engines para jogos 3D.";
			break;
		case 255574:
			text = "Aborda as práticas de desenvolvimento de jogos digitais em equipes integrando os conhecimentos de programação, arte e gestão.";
			break;

		case 230384:
			text = "Estudo de técnicas avançadas de criação e desenvolvimento de modelos tridimensionais e digitais.";
			break;
		case 230424:
			text = "Aborda conceitos e práticas de edição de vídeo, produção audiovisual, finalização de vídeo e animação para cinema, TV e Jogos.";
			break;
		case 230454:
			text = "Aborda conceitos, técnicas de programação e persistência de dados em engine de jogos multiplayer.";
			break;
		case 255584:
			text = "Aborda as práticas de desenvolvimento de jogos digitais em equipes integrando os conhecimentos de programação, arte e gestão.";
			break;
		case 255594:
			text = "Estuda os setores criativos e seus modelos de negócios. Aborda a prática de produção de um plano de negócios.";
			break;

		case 229994:
			text = "Conhecimento crítico da formação sociopolítica, econômica e cultural brasileira, numa dimensão histórica, que permita identificar a complexidade da mesma e suas contradições internas, considerando a inserção do Brasil no processo global.";
			break;
		case 230494:
			text = "Aborda conceitos contemporâneos da área de Jogos Digitais, aprofundando as temáticas trabalhadas durante o curso.";
			break;
		case 230504:
			text = "Aborda os conceitos de criação de trilhas, temas e efeitos especiais para jogos digitais.";
			break;
		case 230514:
			text = "Aborda as práticas de concepção e pré-produção de jogos digitais em equipes, integrando os conhecimentos de programação, arte e gestão, com ênfase nas fases de pré-produção e prototipagem.";
			break;
		case 230564:
			text = "Caracterização da sociologia como ciência e das diversas abordagens sobre a sociedade; identificação da sociedade brasileira em especial.";
			break;

		case 230528:
			text = "Aborda as práticas de produção e implementação de jogos digitais em equipes, integrando os conhecimentos de programação, arte e gestão com ênfase na produção do planejamento executado em Projeto VI.";
			break;
	}
	alert(text);
}