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

	$('.lecture').map(function() {
		var cor = 'white';
		switch (this.id) {
			case "cor1":
				cor = 'green';
				break;
			case "cor2":
				cor = 'blue';
				break;
			case "cor3":
				cor = 'red';
				break;
			case "cor4":
				cor = 'yellow';
				break;
		}
		return $(this).parent().parent().parent().children('.info').css('color', cor);
	});
});

function abrirEmenta(cod) {
	var text = "";
	switch(cod) {
		case 60333:
			text = "Fundamentos da arquitetura de Von Neumann.\n\
Fundamentos da programa��o imperativa: comandos de atribui��o, de fluxo de controle e de entrada/sa�da.\n\
Mem�ria e vari�veis. Endere�amento de mem�ria e ponteiros.\n\
Operadores aritm�ticos, l�gicos, relacionais e bin�rios.\n\
Estruturas de controle: testes condicionais, comandos de itera��o.\n\
Manipula��o de strings.\n\
Fun��es e procedimentos. Passagem de par�metros.\n\
Vetores e matrizes.\n\
Programa��o orientada a objetos: classes e objetos.\n\
Invoca��o de m�todos.\n\
Heran�a, polimorfismo e liga��o din�mica.";
			break;
		case 60305:
			text = "Hist�ria da computa��o. Componentes de um computador. Representa��o de dados no computador. Sistemas num�ricos: bin�rio, decimal e hexadecimal.\n\
Execu��o de instru��es de programas. Dispositivos de entrada e sa�da. Sistemas operacionais. Aplicativos. Fun��es de um sistema operacional. Os sistemas operacionais Windows e Linux. Linguagens de programa��o: m�quina, assembly, baixo e alto n�vel. Componentes de uma rede de computadores. Tipos de redes e protocolos de comunica��o. Internet. A computa��o e o seu potencial para impulsionar outras �reas do conhecimento. Condutas �ticas e n�o �ticas em computa��o: copiar conte�do da internet para apresenta��es; registrar nomes de dom�nios que pertencem a outras pessoas ou companhias; acessar informa��es dispon�veis em diversos bancos de dados; influenciar compras de software; conte�do do disco r�gido.";
			break;
		case 30300:
			text = "Argumento. Tratamentos. Script. Storyboard. Desenvolvimento de personagens. Roteiros lineares e n�o-lineares. Adapta��o de roteiros o Roteiro e gameplay.";
			break;
		case 60372:
			text = "No��es do conceito de vetores fixos e livres;\n\
Representa��o por setas e por pontos (coordenadas);\n\
M�dulo, dire��o e sentido;\n\
Dist�ncia entre dois pontos;\n\
Adi��o e subtra��o de vetores;\n\
Multiplica��o por escalar;\n\
Significados geom�tricos;\n\
Estudos das matrizes;\n\
Defini��o e igualdade;\n\
Tipos especiais de matrizes;\n\
Determinantes e invers�o de matrizes;\n\
Produto escalar e seu significado geom�trico;\n\
Proje��o ortogonal e �ngulo entre vetores;\n\
Produtos vetorial e misto;\n\
Significados geom�tricos;\n\
Depend�ncia e independ�ncia linear;\n\
Geradores e bases. Transforma��es lineares;\n\
Representa��o matricial;\n\
Rota��es no plano e no espa�o;\n\
Reflex�o;\n\
Transforma��es similares e sim�tricas;\n\
Coordenadas homog�neas;\n\
Intervalos nos reais;\n\
Tangentes a gr�ficos de fun��es.";
			break;
		case 60373:
			text = "Hist�ria e evolu��o dos jogos.\n\
Emuladores de computadores e consoles. Retrocomputing e Abandonware.\n\
�tica e emuladores.\n\
Classifica��o dos jogos quanto aos diversos estilos existentes.\n\
Luz e Cor.\n\
�tica em aplica��es de jogos e entretenimento digital e condutas �ticas.\n\
Utiliza��o de uma ferramenta de desenvolvimento r�pido de jogos.";
			break;

		case 60374:
			text = "Recurs�o;\n\
Listas lineares, filas e pilhas;\n\
�rvores;\n\
Elementos de complexidade de algoritmos;\n\
Manipula��o de dados em disco;\n\
Aloca��o din�mica de mem�ria;\n\
Algoritmos de busca e de ordena��o.";
			break;
		case 60375:
			text = "Introdu��o ao processamento gr�fico: computa��o gr�fica, processamento de imagens, realidade virtual, interfaces, vis�o computacional.\n\
Hist�rico e evolu��o da computa��o gr�fica.\n\
Esquema conceitual da computa��o gr�fica.\n\
Padr�es e bibliotecas gr�ficas.\n\
Algoritmos para varredura de linha de primitivas gr�ficas.\n\
Preenchimento de pol�gonos.\n\
Recorte de linhas.\n\
Transforma��es geom�tricas: rota��o, escala, transla��o.\n\
Coordenadas homog�neas.\n\
Composi��o de transforma��es.\n\
Transforma��es tridimensionais.\n\
Visualiza��o: Proje��es. Recorte tridimensional. C�mera sint�tica.";
			break;
		case 60377:
			text = "Pontos. Representa��o. Matriz de pontos. Sistemas de refer�ncia. Representa��o gr�fica de pontos em meios discretos (com pixels). Transla��o e rota��o.\n\
Equa��es das retas no plano e no espa�o. Rela��es entre pontos e retas. Intersec��o. �ngulos entre reta e reta Intersec��o entre retas e retas. Transla��o e rota��o de retas. Equa��es do plano (baseadas em tr�s pontos e na normal). Determina��o de pontos de um plano. �ngulos entre retas e planos. Intersec��o\n\
entre retas e planos e entre planos e planos. Posi��es relativas entre ponto e plano. Pol�gonos planos. Propriedades. Contorno (Hull) convexo de um pol�gono. Constru��o de pol�gonos regulares. Simetrias. Posi��es relativas entre pontos e pol�gonos (em rela��o a seu interior e exterior). Poliedros. Poliedros regulares e\n\
semi-regulares. Poliedros duais. Poliedros estrelados. Redes definidas a partir de poliedros. Contorno (Hull) convexo de um poliedro. F�rmula de Euler para poliedros simples e n�o-simples. Matriz de conectividade. Representa��o de poliedros por semi-espa�os.";
			break;
		case 60378:
			text = "Design Document. Fases do projeto de desenvolvimento de jogos e entretenimento digital: metodologias, etapas, cronogramas, recursos e or�camento (qualidade esperada do produto, tempo de desenvolvimento, escopo do projeto e recursos necess�rios). Estudo da rela��o entre cinema e videogames. O equil�brio da interatividade e linearidade em jogos. Introdu��o aos recursos multim�dia de design (software e hardware) para Jogos e Entretenimento Digital. Aspectos b�sicos de Game Design. Gameplay: conceito e an�lise. Imers�o, apar�ncia e sentimento.\n\
T�cnicas de storytelling. Processo de desenvolvimento de jogos. Vis�o estrutural do mercado de desenvolvimento de jogos. Estudo de casos: desenvolvedores internacionais e nacionais de jogos. Conceitos b�sicos de computa��o gr�fica: processamento de imagens, modelagem (2D, 3D), s�ntese de imagens, anima��o e realidade virtual.";
			break;
		case 60379:
			text = "Ferramenta de desenvolvimento r�pido de jogos: cria��o de objetos, texturas,efeitos especiais, DVD/CD playback, cria��o de inst�ncias, defini��o de c�meras, defini��o de terreno, anima��o, intera��o, detec��o de colis�o. Manipula��o de imagem para texturas de objetos 2-D e 3-D. Ferramentas de edi��o de modelos\n\
3-D. Ferramentas de edi��o de som. Metodologias para o desenvolvimento r�pido de jogos 3-D.";
			break;

		case 60380:
			text = "Simula��o discreta e simula��o cont�nua;\n\
Modelagem atrav�s de Grafos e M�quinas de Transi��o de Estados. Aut�matos celulares;\n\
Modelagem por Redes de Petri;\n\
Modelagem por regras de infer�ncia e gram�ticas;\n\
No��es de probabilidade e estat�stica;\n\
Gera��o de n�meros aleat�rios;\n\
Simula��o de Monte Carlo;\n\
Modelagem por cadeias de Markov;\n\
Modelagem atrav�s de equa��es n�o-lineares recorrentes;\n\
Modelagem por equa��es diferenciais;\n\
Equa��es de diferen�as;\n\
Simula��o de atrasos e efeitos temporais;\n\
Modelagem por sistemas de Filas;\n\
Escalonamento e execu��o;\n\
M�todos de Integra��o;\n\
Estabilidade e abstra��o;\n\
An�lise de casos e suas principais caracter�sticas e exemplos: Sistemas mec�nicos;\n\
No��es de cinem�tica e din�mica;\n\
Modelagem por matrizes de transforma��o de coordenadas;\n\
Colis�es;\n\
Fluidos;\n\
Sistemas biol�gicos;\n\
Simula��o de crescimento e de ecosistemas;\n\
Simula��o de popula��es;\n\
Sistema de part�culas;\n\
Simula��o de sistemas econ�micos, empresas e rela��es sociais;\n\
Linguagens de simula��o;\n\
Ambientes de simula��o.";
			break;
		case 60381:
			text = "Modelagem geom�trica: representa��es poligonais e param�tricas. Modelagem hier�rquica. Representa��o de curvas e superf�cies. Modelagem de s�lidos: instancia��o de primitivas. Representa��es por sweeping.\n\
Representa��es por parti��o celular. Geometria s�lida construtiva;\n\
T�cnicas para remo��o de elementos ocultos: scan-line, z-buffer,ray-casting;\n\
Algoritmos de ilumina��o global: tra�ado de raios: vis�o Geral, Algoritmos de intersec��o entre raios e primitivas. T�cnicas de acelera��o de tra�ado de raios. Algoritmos de ilumina��o global. Radiosidade. C�lculo dos fatores de forma;\n\
T�cnicas para incremento do realismo em s�ntese de imagens: mapeamento de texturas. C�lculo de sombras. Mapeamento de rugosidades.";
			break;
		case 95221:
			text = "Grandezas associadas ao movimento translacional: trajet�ria, deslocamento, velocidade e acelera��o.\n\
Movimento de proj�teis. Din�mica do movimento translacional: Leis de Newton. For�a. Gravidade.\n\
Princ�pios de conserva��o: momento linear e energia.\n\
Colis�es.\n\
F�sica de corpos r�gidos e corpos articulados.\n\
Ve�culos r�gidos (avi�es, navios, carros).\n\
Motores de F�sica para jogos.\n\
Programa��o de F�sica para Jogos.";
			break;
		case 30301:
			text = "Modelagem 3D;\n\
Edi��o imagens 2D;\n\
Anima��o 3D;\n\
Textura e mapeamento;\n\
Esqueletos e constru��o de personagem.";
			break;
		case 93925:
			text = "Introdu��o aos sistemas operacionais;\n\
Principais conceitos, estruturas de sistemas operacionais e componentes;\n\
Ger�ncia de processos. Processos e threads. Escalonamento. Comunica��o e sincroniza��o entre processos. Modelo produtor/consumidor. Mecanismos de sincroniza��o. Deadlocks;\n\
Ger�ncia de mem�ria: pagina��o, segmenta��o. Mem�ria Virtual;\n\
Sistemas de arquivos; arquivos e diret�rios; estruturas de sistemas de arquivos; implementa��o de sistemas de arquivos; m�todos de aloca��o e ger�ncia do espa�o livre; recupera��o; sistemas de arquivos estruturados com log.\n\
Sistemas de entrada e sa�da.";
			break;
		case 60384:
			text = "Dispositivos de E/S para jogos.\n\
Estilos de intera��o.\n\
Princ�pios B�sicos de Intera��o-Humano Computador para Jogos Digitais.\n\
Projeto de Intera��o-Humano Computador para Jogos Digitais.\n\
Ferramentas, bibliotecas para o desenvolvimento de interfaces gr�ficas para Jogos Digitais.";
			break;
		case 60385:
			text = "Experimenta��o e an�lise de jogos de sucesso de console: estudo dos gr�ficos, som, interface, gameplay e est�ria.\n\
Experimenta��o e an�lise de jogos nacionais: estudo dos gr�ficos, som,interface, gameplay e est�ria.\n\
Introdu��o as ferramentas para o desenvolvimento de Jogos: SDKs (Software Development Kits), editores/geradores de mapas, elementos gr�ficos e n�veis.\n\
Arquiteturas de motores de jogos.\n\
T�cnicas para o desenvolvimento �gil de software.\n\
Motores de jogos: elementos, console, sistema, programa��o, renderiza��o, interface, pipeline, texturas, efeitos especiais, anima��o, cria��o do mundo, f�sica do jogo, som, controles, c�meras, armas.\n\
�tica e licen�a de software: aceitar a licen�a ao abrir o pacote (shrink-wrap license); software livre, creative commons.";
			break;
		case 60386:
			text = "Implementa��o de jogo em um motor de Jogo;\n\
Edi��o de mapas;\n\
Ferramentas de edi��o de som;\n\
Modelagem de personagens e cen�rio;\n\
Defini��o de regras e mec�nica do jogo.";
			break;

		case 60387:
			text = "Programa��o para dispositivos m�veis (handheld, celulares, smart phones).\n\
Ambientes de desenvolvimento.\n\
Quest�es de implementa��o: tamanho da aplica��o, fator de forma da tela, compila��o para um dispositivo espec�fico ou para dispositivos m�ltiplos, limita��es dos dispositivos.\n\
Programas de desenvolvimento de conte�do e entretenimento digital para dispositivos m�veis.\n\
Bibliotecas de desenvolvimento de programas gr�ficos para diversas plataformas.\n\
Desenvolvimento de aplicativos multiplataforma.";
			break;
		case 60390:
			text = "Vis�o geral e hist�rica da arquitetura de computadores; Introdu��o � L�gica Booleana.\n\
Arquitetura de Von Neumann. Unidades de um computador b�sico. Unidade de controle: busca, decodifica��o e execu��o.\n\
Formatos de instru��es e modos de endere�amento.\n\
Mem�ria. Organiza��o da mem�ria. Mem�ria virtual e cache.\n\
Barramentos.\n\
Paralelismo: Multiprocessadores e Processadores Multi-core.\n\
Arquiteturas gr�ficas: hist�rico e evolu��o.\n\
Conceitos de pipeline.\n\
Unidades de processamento gr�fico (GPUs).\n\
Arquiteturas multi-GPUs.\n\
Programa��o em GPUs: linguagem de montagem e linguagens de alto n�vel. Introdu��o a GLSL.\n\
Tend�ncias em arquitetura gr�ficas.";
			break;
		case 60609:
			text = "Hist�ria das narrativas interativas;\n\
Modelos de narrativas interativas;\n\
Estudo de casos de aplicabilidade;\n\
Avalia��o de desafios t�cnico-cient�ficos;\n\
Estudo de roteiro e narrativas n�o-lineares;\n\
Workshop sobre ferramentas para gera��o de narrativas interativas;\n\
Produ��o de uma aplica��o envolvendo os conceitos de narrativas interativas.";
			break;
		case 60382:
			text = "Introdu��o a Realidade Virtual: caracteriza��o, realidade virtual imersiva e n�o imersiva, hist�rico de sistemas de realidade virtual, estrutura gen�rica de sistemas de realidade virtual, requisitos de sistemas de realidade virtual e demanda computacional;\n\
Modelagem de Mundos Virtuais. Dispositivos de Realidade Virtual. An�lise de intera��o em Mundos Virtuais;\n\
Plataformas de Desenvolvimento de Sistemas de Realidade Virtual o DIVE, VLNet, etc;\n\
Ambientes Virtuais Colaborativos: estudo de ferramentas;\n\
Aplica��es de Realidade Virtual;\n\
Realidade Aumentada;\n\
Exemplos de Jogos que utilizam realidade virtual e realidade aumentada;\n\
Workshop de Ferramentas (VRML e Java 3D).";
			break;
		case 60391:
			text = "Evolu��o das redes de computadores. Organiza��o das redes de computadores.\n\
O modelo OSI (Open Systems Interconnection) e a arquitetura TCP/IP. Padr�es do IETF (Internet Engineering Task Force) e da IEEE (Institute of Eletrical and Eletronics Engineers).\n\
Conceitos b�sicos de redes locais de computadores: tipos, topologias, meios f�sicos de transmiss�o.\n\
Protocolos de aplica��o: HTTP, DNS, DHCP e FTP.\n\
Protocolos de transporte: TCP e UDP.\n\
Protocolos de rede: IPv4, ICMP e IPv6; Endere�amento IP, configura��o e manuten��o.\n\
Programa��o em sockets utilizando redes de computadores.\n\
Protocolos de tempo real: RTP e RTCP.\n\
Protocolos Multicast.\n\
Redes locais: Ethernet, Fast Ethernet e Giga-Ethernet.\n\
Equipamentos de interconectividade: repetidores, switches e roteadores.";
			break;
		case 95222:
			text = "T�cnicas de balanceamento de jogos.\n\
Mec�nica e regras dos jogos.\n\
Projeto de n�veis: metodologias, produ��o, desenvolvimento de mundos, modelagem de entidades, documenta��o.\n\
An�lise e debate de estrat�gias avan�adas de jogos (rush, tech, scouting, massing, hit-and-run, retreat, emboscada, defesas est�ticas, gerenciamento de recursos, estrat�gias one-on-one, capture the flag, deathmatch/free-for-all).\n\
Balanceamento de estrat�gias.";
			break;
		case 60393:
			text = "Projeto de jogos digitais para plataformas alternativas;\n\
Desenvolvimento de jogos para uma plataforma alternativa (m�vel, web ou diferentes sistemas operacionais).";
			break;

		case 00264:
			text = "aaaaaaaaaaaaaaaaaaaa";
			break;
		case 00265:
			text = "bbbbbbbbbbbbbbbbbbbb";
			break;
		case 98145:
			text = "Ind�stria de jogos e estrat�gias para atua��o de produtoras de jogos digitais: hist�rico e cen�rio atual.\n\
Caracter�sticas e n�meros do mercado mundial versus brasileiro.\n\
Cadeia de valor e rela��es entre os atores da ind�stria de jogos digitais.\n\
Segmentos, plataformas e modelos de neg�cios para a ind�stria de jogos.\n\
Introdu��o ao planejamento estrat�gico e an�lise de governan�a das atividades econ�micas da organiza��o.\n\
Defini��o de compet�ncias e import�ncia estrat�gica das atividades.\n\
Estrat�gias colaborativas na ind�stria.";
			break;
		case 98146:
			text = "Advergames, browsergames e webgames.\n\
Arquitetura cliente-servidor na Internet.\n\
Linguagens de script.\n\
Webservices para entretenimento digital.\n\
Banco de dados em aplica��es web.\n\
Projeto pr�tico de aplica��es web.";
			break;
		case 98147:
			text = "Arquiteturas de videogames de diferentes gera��es.\n\
Estudo de emuladores.\n\
Ferramentas para cria��o de solu��es homebrew.\n\
Programa��o para console de videogames.\n\
Projeto pr�tico de aplica��es para console de videogame.";
			break;
		case 50453:
			text = "The importance of entrepreneurship and innovation in educating professionals in contemporary society. Concepts and understandings about entrepreneurship and innovation. Entrepreneurship and social innovation. Personal skills of entrepreneurship and innovation, such as creativity, leadership, interpersonal skills and others.";
			break;
		case 60394:
			text = "Renderiza��o de Materiais Transl�cidos.\n\
Renderiza��o Baseada em Imagens.\n\
Efeitos Especiais de renderiza��o e anima��o.\n\
Non-photorealistic rendering.\n\
T�cnicas de mapeamentos.\n\
Rendering de natureza.\n\
Shading avan�ado e environment lighting.";
			break;
		case 30316:
			text = "Edi��o n�o linear. Edi��o de som. Formatos de �udio e v�deo digitais. Dispositivos, resolu��o e otimiza��o de som e imagem. Entretenimento Digital. Anima��o stop-motion. Anima��o 2D.";
			break;
		case 60397:
			text = "Introdu��o a Intelig�ncia Artificial (I.A.): Hist�rico e conceitos b�sicos.\n\
Intelig�ncia Artificial e sua aplica��o em Jogos Cl�ssicos: Jogos de Racioc�nio (9 puzzle, Resta 1, Cubo de Rubik, brain teasers) e Jogos de Tabuleiro (Jogo da Velha, Jogo de Damas, Xadrez, Gam�o, Go, Othello).\n\
Busca de solu��es em espa�o de estados (jogos como problemas de busca): Busca Cega, Busca Informada (Busca Heur�stica) e Busca Condicionada.\n\
Algoritmos de Busca no espa�o de estados: Depth-First, Breadth-First, A Star (A*), Mini-Max. Representa��o de conhecimentos sobre o ambiente (mapas e caminhos) em jogos. Planejamento de trajet�rias e a��es. Trajet�rias em jogos: uso do algoritmo A*, uso de algoritmos baseados em conectividade (espa�o de configura��es, grafo de visibilidade, caminho mais curto), campos potenciais.\n\
Execu��o de tarefas e do plano de a��es. Deslocamento em ambientes virtuais.\n\
Sistemas baseados em regras aplicados a jogos.\n\
Agentes inteligentes: conceitos, tipos de agentes e arquiteturas de controle. Controle reativo (percep��o-a��o), controle deliberativo e controle h�brido. Agentes aut�nomos: mem�ria, aprendizado e comunica��o/intera��o entre agentes. Sistemas multi-agentes. T�cnicas de aprendizado de m�quina e adapta��o aplicadas em Jogos: R.\n\
Racioc�nio Baseado em Casos, Redes Neurais Artificiais, Algoritmos Evolutivos, Aprendizado por Refor�o, Indu��o de �rvores de Decis�o. Monitoramento de comportamentos visando a representa��o e adapta��o do perfil de usu�rio/jogador. Acelerando modelos complexos e modelos de simula��o atrav�s do uso da I.A. (meta-modelos).\n\
Ferramentas para o desenvolvimento de aplica��es de IA.\n\
Discuss�o sobre quest�es �ticas relacionadas a Intelig�ncia Artificial.";
			break;
		case 60399:
			text = "Desenvolvimento de jogos para multijogadores (conex�o cliente-servidor);\n\
Planejamento e implementa��o do prot�tipo de jogo digital multijogador.";
			break;
		case 60388:
			text = "Introdu��o a Anima��o Computadorizada;\n\
T�cnicas b�sicas de anima��o;\n\
F�sica para anima��o computadorizada;\n\
Algoritmos avan�ados de anima��o - Controle de Movimento. Anima��o de part�culas. Corpos r�gidos. Anima��o de corpos articulados. Corpos flex�veis e deform�veis (tecidos, l�quidos, etc);\n\
Detec��o e resposta a colis�o;\n\
Modelagem e anima��o de fen�menos naturais (nuvens, fuma�as, etc);\n\
Modelagem e Anima��o de personagens virtuais para jogos;\n\
Peixe, p�ssaros, humanos virtuais;\n\
Utiliza��o de Movimento Capturado em Jogos;\n\
Anima��o baseada em tarefas, eventos e comportamentos;\n\
Caso especial: agentes sint�ticos semi- aut�nomos e aut�nomos;\n\
Comportamento social, grupos de agentes, multid�es, intera��o com ambientes virtuais.";
			break;
		case 60607:
			text = "O projeto dever� ser desenvolvido pelo aluno sob orienta��o de um professor e o conte�do do trabalho dever� ser acordado com o orientador. Depende dos interesses pessoais e profissionais do aluno, desde que atendidos os objetivos do curso. Poder�o ser desenvolvidos tr�s diferentes tipos de projetos: um jogo digital, uma pesquisa aplicada visando o desenvolvimento de uma tecnologia para o desenvolvimento de jogos digitais ou uma pesquisa b�sica que investigue os fundamentos de t�cnicas utilizadas na cria��o de jogos digitais.";
			break;

		case 60400:
			text = "A proposta da atividade � abrir espa�o para coordena��o, colegiado e alunos definirem temas emergentes na �rea de jogos e entretenimento digital com o objetivo de promover uma atualiza��o dos t�picos vistos dentro do curso at� ent�o. Entre outros conte�dos, a atividade pode apontar para o trabalho com: novas m�dias e converg�ncia de meios e suportes. Inova��es tecnol�gicas e estil�sticas na produ��o para jogos. Sociedade em rede. Cen�rios de consumo e ind�stria do entretenimento.";
			break;
		case 10321:
			text = "A vida, o ser humano, a �tica e a computa��o como realidades complexas e din�micas e as poss�veis implica��es afirmativas.\n\
Os humanos como seres de cultura no universo multicultural - unidade do conceito, singularidade de cada cultura, respeito � diferen�a e o desafio ao di�logo transcultural e � solidariedade diante de uma economia globalizada.\n\
A responsabilidade �tica dos cidad�os no Brasil face � urg�ncia das pol�ticas afirmativas com rela��o aos afrodescendentes e ind�genas expressas nas leis 10639/2003 (afrodescendentes) e 11645/2008 (afrodescendentes e ind�genas).\n\
Os princ�pios da sustentabilidade e da educa��o ambiental (Lei Federal n� 9795/1999) e a compreens�o sist�mica da vida.\n\
A rela��o entre �tica e sustentabilidade: o desenvolvimento das tecnologias digitais e suas respostas concretas diante da contemporaneidade e do desafio de conciliar desenvolvimento e sustentabilidade.\n\
Quest�es do exerc�cio profissional: c�digo de �tica.\n\
Os desafios da cultura digital e estrat�gias de inclus�o social e digital.\n\
A era p�s-industrial e o paradigma da digitalidade.";
			break;
		case 10322:
			text = "A Am�rica Latina no Contexto das transforma��es mundiais: desenvolvimento e subdesenvolvimento, integra��o regional no processo de globaliza��o.\n\
Contextos e concep��es hist�rico-culturais de abrang�ncia das leis 10639/2003 e 11645/2008 e das pol�ticas afirmativas vigentes para os povos e coletividades ind�genas e afrodescendentes na Am�rica Latina e no Brasil.\n\
Contribui��es das tradi��es e culturas africanas e amer�ndias em rela��es �s no��es de desenvolvimento e sustentabilidade;\n\
Os processos de inclus�o-exclus�o decorrentes da globaliza��o na sociedade de mercado. Desenvolvimento sustent�vel, meio-ambiente e ecologia no contexto Latino Americano.\n\
Impactos s�cio-culturais da sociedade da informa��o para as popula��es do continente: an�lise das transforma��es sociais, pol�ticas, econ�micas e culturais decorrentes.";
			break;
		case 60401:
			text = "Conceitos de an�lise de complexidade algor�tmica.\n\
Geometria computacional: casca convexa, triangula��es particionamento espacial.\n\
Ferramentas para programa��o, depura��o e perfila��o.\n\
Programa��o em Hardware Gr�fico.\n\
T�cnicas de Acelera��o para Renderiza��o.\n\
T�cnicas de acelera��o de modelagem geom�trica: Geometria Adaptativa.\n\
Introdu��o � Programa��o Gen�rica em Hardware Gr�fico.";
			break;
		case 50215:
			text = "Empreendedorismo na atualidade: Hist�rico e contexto atual. Perspectivas para empreender. Aspectos econ�micos e de gest�o. O mito do empreendedor: Conceitos importantes. Diferen�as entre personagens do mundo dos neg�cios. Caracter�sticas e comportamentos empreendedores. Empreendimentos empresariais na era tecnol�gica: Estrutura��o de empresas. Microempresa e enquadramento jur�dico. Tributos e obriga��es das empresas. Plano de neg�cios como ferramenta de gest�o. An�lise de mercado e de viabilidade, planejamento, informa��o e risco. Inova��o e oportunidade: criatividade e inova��o, processo de inova��o, tecnologia e capacita��o tecnol�gica, estrat�gia de inova��o.";
			break;
		case 60608:
			text = "O projeto dever� ser desenvolvido pelo aluno sob orienta��o de um professor orientador. Um projeto dever� ser implementado aplic�vel na �rea de jogos e entretenimento digital. Poder�o ser desenvolvidos tr�s diferentes tipos de projetos: um jogo digital, uma pesquisa aplicada visando o desenvolvimento de uma tecnologia para o desenvolvimento de jogos digitais ou uma pesquisa b�sica que investigue os fundamentos de t�cnicas utilizadas na cria��o de jogos digitais.";
			break;
	}
	alert(text);
}