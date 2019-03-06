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
Fundamentos da programação imperativa: comandos de atribuição, de fluxo de controle e de entrada/saída.\n\
Memória e variáveis. Endereçamento de memória e ponteiros.\n\
Operadores aritméticos, lógicos, relacionais e binários.\n\
Estruturas de controle: testes condicionais, comandos de iteração.\n\
Manipulação de strings.\n\
Funções e procedimentos. Passagem de parâmetros.\n\
Vetores e matrizes.\n\
Programação orientada a objetos: classes e objetos.\n\
Invocação de métodos.\n\
Herança, polimorfismo e ligação dinâmica.";
			break;
		case 60305:
			text = "História da computação. Componentes de um computador. Representação de dados no computador. Sistemas numéricos: binário, decimal e hexadecimal.\n\
Execução de instruções de programas. Dispositivos de entrada e saída. Sistemas operacionais. Aplicativos. Funções de um sistema operacional. Os sistemas operacionais Windows e Linux. Linguagens de programação: máquina, assembly, baixo e alto nível. Componentes de uma rede de computadores. Tipos de redes e protocolos de comunicação. Internet. A computação e o seu potencial para impulsionar outras áreas do conhecimento. Condutas éticas e não éticas em computação: copiar conteúdo da internet para apresentações; registrar nomes de domínios que pertencem a outras pessoas ou companhias; acessar informações disponíveis em diversos bancos de dados; influenciar compras de software; conteúdo do disco rígido.";
			break;
		case 30300:
			text = "Argumento. Tratamentos. Script. Storyboard. Desenvolvimento de personagens. Roteiros lineares e não-lineares. Adaptação de roteiros o Roteiro e gameplay.";
			break;
		case 60372:
			text = "Noções do conceito de vetores fixos e livres;\n\
Representação por setas e por pontos (coordenadas);\n\
Módulo, direção e sentido;\n\
Distância entre dois pontos;\n\
Adição e subtração de vetores;\n\
Multiplicação por escalar;\n\
Significados geométricos;\n\
Estudos das matrizes;\n\
Definição e igualdade;\n\
Tipos especiais de matrizes;\n\
Determinantes e inversão de matrizes;\n\
Produto escalar e seu significado geométrico;\n\
Projeção ortogonal e ângulo entre vetores;\n\
Produtos vetorial e misto;\n\
Significados geométricos;\n\
Dependência e independência linear;\n\
Geradores e bases. Transformações lineares;\n\
Representação matricial;\n\
Rotações no plano e no espaço;\n\
Reflexão;\n\
Transformações similares e simétricas;\n\
Coordenadas homogêneas;\n\
Intervalos nos reais;\n\
Tangentes a gráficos de funções.";
			break;
		case 60373:
			text = "História e evolução dos jogos.\n\
Emuladores de computadores e consoles. Retrocomputing e Abandonware.\n\
Ética e emuladores.\n\
Classificação dos jogos quanto aos diversos estilos existentes.\n\
Luz e Cor.\n\
Ética em aplicações de jogos e entretenimento digital e condutas éticas.\n\
Utilização de uma ferramenta de desenvolvimento rápido de jogos.";
			break;

		case 60374:
			text = "Recursão;\n\
Listas lineares, filas e pilhas;\n\
Árvores;\n\
Elementos de complexidade de algoritmos;\n\
Manipulação de dados em disco;\n\
Alocação dinâmica de memória;\n\
Algoritmos de busca e de ordenação.";
			break;
		case 60375:
			text = "Introdução ao processamento gráfico: computação gráfica, processamento de imagens, realidade virtual, interfaces, visão computacional.\n\
Histórico e evolução da computação gráfica.\n\
Esquema conceitual da computação gráfica.\n\
Padrões e bibliotecas gráficas.\n\
Algoritmos para varredura de linha de primitivas gráficas.\n\
Preenchimento de polígonos.\n\
Recorte de linhas.\n\
Transformações geométricas: rotação, escala, translação.\n\
Coordenadas homogêneas.\n\
Composição de transformações.\n\
Transformações tridimensionais.\n\
Visualização: Projeções. Recorte tridimensional. Câmera sintética.";
			break;
		case 60377:
			text = "Pontos. Representação. Matriz de pontos. Sistemas de referência. Representação gráfica de pontos em meios discretos (com pixels). Translação e rotação.\n\
Equações das retas no plano e no espaço. Relações entre pontos e retas. Intersecção. Ângulos entre reta e reta Intersecção entre retas e retas. Translação e rotação de retas. Equações do plano (baseadas em três pontos e na normal). Determinação de pontos de um plano. Ângulos entre retas e planos. Intersecção\n\
entre retas e planos e entre planos e planos. Posições relativas entre ponto e plano. Polígonos planos. Propriedades. Contorno (Hull) convexo de um polígono. Construção de polígonos regulares. Simetrias. Posições relativas entre pontos e polígonos (em relação a seu interior e exterior). Poliedros. Poliedros regulares e\n\
semi-regulares. Poliedros duais. Poliedros estrelados. Redes definidas a partir de poliedros. Contorno (Hull) convexo de um poliedro. Fórmula de Euler para poliedros simples e não-simples. Matriz de conectividade. Representação de poliedros por semi-espaços.";
			break;
		case 60378:
			text = "Design Document. Fases do projeto de desenvolvimento de jogos e entretenimento digital: metodologias, etapas, cronogramas, recursos e or»camento (qualidade esperada do produto, tempo de desenvolvimento, escopo do projeto e recursos necessários). Estudo da relação entre cinema e videogames. O equilíbrio da interatividade e linearidade em jogos. Introdução aos recursos multimídia de design (software e hardware) para Jogos e Entretenimento Digital. Aspectos básicos de Game Design. Gameplay: conceito e análise. Imersão, aparência e sentimento.\n\
Técnicas de storytelling. Processo de desenvolvimento de jogos. Visão estrutural do mercado de desenvolvimento de jogos. Estudo de casos: desenvolvedores internacionais e nacionais de jogos. Conceitos básicos de computação gráfica: processamento de imagens, modelagem (2D, 3D), síntese de imagens, animação e realidade virtual.";
			break;
		case 60379:
			text = "Ferramenta de desenvolvimento rápido de jogos: criação de objetos, texturas,efeitos especiais, DVD/CD playback, criação de instâncias, definição de câmeras, definição de terreno, animação, interação, detecção de colisão. Manipulação de imagem para texturas de objetos 2-D e 3-D. Ferramentas de edição de modelos\n\
3-D. Ferramentas de edição de som. Metodologias para o desenvolvimento rápido de jogos 3-D.";
			break;

		case 60380:
			text = "Simulação discreta e simulação contínua;\n\
Modelagem através de Grafos e Máquinas de Transição de Estados. Autômatos celulares;\n\
Modelagem por Redes de Petri;\n\
Modelagem por regras de inferência e gramáticas;\n\
Noções de probabilidade e estatística;\n\
Geração de números aleatórios;\n\
Simulação de Monte Carlo;\n\
Modelagem por cadeias de Markov;\n\
Modelagem através de equações não-lineares recorrentes;\n\
Modelagem por equações diferenciais;\n\
Equações de diferenças;\n\
Simulação de atrasos e efeitos temporais;\n\
Modelagem por sistemas de Filas;\n\
Escalonamento e execução;\n\
Métodos de Integração;\n\
Estabilidade e abstração;\n\
Análise de casos e suas principais características e exemplos: Sistemas mecânicos;\n\
Noções de cinemática e dinâmica;\n\
Modelagem por matrizes de transformação de coordenadas;\n\
Colisões;\n\
Fluidos;\n\
Sistemas biológicos;\n\
Simulação de crescimento e de ecosistemas;\n\
Simulação de populações;\n\
Sistema de partículas;\n\
Simulação de sistemas econômicos, empresas e relações sociais;\n\
Linguagens de simulação;\n\
Ambientes de simulação.";
			break;
		case 60381:
			text = "Modelagem geométrica: representações poligonais e paramétricas. Modelagem hierárquica. Representação de curvas e superfícies. Modelagem de sólidos: instanciação de primitivas. Representações por sweeping.\n\
Representações por partição celular. Geometria sólida construtiva;\n\
Técnicas para remoção de elementos ocultos: scan-line, z-buffer,ray-casting;\n\
Algoritmos de iluminação global: traçado de raios: visão Geral, Algoritmos de intersecção entre raios e primitivas. Técnicas de aceleração de traçado de raios. Algoritmos de iluminação global. Radiosidade. Cálculo dos fatores de forma;\n\
Técnicas para incremento do realismo em síntese de imagens: mapeamento de texturas. Cálculo de sombras. Mapeamento de rugosidades.";
			break;
		case 95221:
			text = "Grandezas associadas ao movimento translacional: trajetória, deslocamento, velocidade e aceleração.\n\
Movimento de projéteis. Dinâmica do movimento translacional: Leis de Newton. Força. Gravidade.\n\
Princípios de conservação: momento linear e energia.\n\
Colisões.\n\
Física de corpos rígidos e corpos articulados.\n\
Veículos rígidos (aviões, navios, carros).\n\
Motores de Física para jogos.\n\
Programação de Física para Jogos.";
			break;
		case 30301:
			text = "Modelagem 3D;\n\
Edição imagens 2D;\n\
Animação 3D;\n\
Textura e mapeamento;\n\
Esqueletos e construção de personagem.";
			break;
		case 93925:
			text = "Introdução aos sistemas operacionais;\n\
Principais conceitos, estruturas de sistemas operacionais e componentes;\n\
Gerência de processos. Processos e threads. Escalonamento. Comunicação e sincronização entre processos. Modelo produtor/consumidor. Mecanismos de sincronização. Deadlocks;\n\
Gerência de memória: paginação, segmentação. Memória Virtual;\n\
Sistemas de arquivos; arquivos e diretórios; estruturas de sistemas de arquivos; implementação de sistemas de arquivos; métodos de alocação e gerência do espaço livre; recuperação; sistemas de arquivos estruturados com log.\n\
Sistemas de entrada e saída.";
			break;
		case 60384:
			text = "Dispositivos de E/S para jogos.\n\
Estilos de interação.\n\
Princípios Básicos de Interação-Humano Computador para Jogos Digitais.\n\
Projeto de Interação-Humano Computador para Jogos Digitais.\n\
Ferramentas, bibliotecas para o desenvolvimento de interfaces gráficas para Jogos Digitais.";
			break;
		case 60385:
			text = "Experimentação e análise de jogos de sucesso de console: estudo dos gráficos, som, interface, gameplay e estória.\n\
Experimentação e análise de jogos nacionais: estudo dos gráficos, som,interface, gameplay e estória.\n\
Introdução as ferramentas para o desenvolvimento de Jogos: SDKs (Software Development Kits), editores/geradores de mapas, elementos gráficos e níveis.\n\
Arquiteturas de motores de jogos.\n\
Técnicas para o desenvolvimento ágil de software.\n\
Motores de jogos: elementos, console, sistema, programação, renderização, interface, pipeline, texturas, efeitos especiais, animação, criação do mundo, física do jogo, som, controles, câmeras, armas.\n\
Ética e licença de software: aceitar a licença ao abrir o pacote (shrink-wrap license); software livre, creative commons.";
			break;
		case 60386:
			text = "Implementação de jogo em um motor de Jogo;\n\
Edição de mapas;\n\
Ferramentas de edição de som;\n\
Modelagem de personagens e cenário;\n\
Definição de regras e mecânica do jogo.";
			break;

		case 60387:
			text = "Programação para dispositivos móveis (handheld, celulares, smart phones).\n\
Ambientes de desenvolvimento.\n\
Questões de implementação: tamanho da aplicação, fator de forma da tela, compilação para um dispositivo específico ou para dispositivos múltiplos, limitações dos dispositivos.\n\
Programas de desenvolvimento de conteúdo e entretenimento digital para dispositivos móveis.\n\
Bibliotecas de desenvolvimento de programas gráficos para diversas plataformas.\n\
Desenvolvimento de aplicativos multiplataforma.";
			break;
		case 60390:
			text = "Visão geral e histórica da arquitetura de computadores; Introdução à Lógica Booleana.\n\
Arquitetura de Von Neumann. Unidades de um computador básico. Unidade de controle: busca, decodificação e execução.\n\
Formatos de instruções e modos de endereçamento.\n\
Memória. Organização da memória. Memória virtual e cache.\n\
Barramentos.\n\
Paralelismo: Multiprocessadores e Processadores Multi-core.\n\
Arquiteturas gráficas: histórico e evolução.\n\
Conceitos de pipeline.\n\
Unidades de processamento gráfico (GPUs).\n\
Arquiteturas multi-GPUs.\n\
Programação em GPUs: linguagem de montagem e linguagens de alto nível. Introdução a GLSL.\n\
Tendências em arquitetura gráficas.";
			break;
		case 60609:
			text = "História das narrativas interativas;\n\
Modelos de narrativas interativas;\n\
Estudo de casos de aplicabilidade;\n\
Avaliação de desafios técnico-científicos;\n\
Estudo de roteiro e narrativas não-lineares;\n\
Workshop sobre ferramentas para geração de narrativas interativas;\n\
Produção de uma aplicação envolvendo os conceitos de narrativas interativas.";
			break;
		case 60382:
			text = "Introdução a Realidade Virtual: caracterização, realidade virtual imersiva e não imersiva, histórico de sistemas de realidade virtual, estrutura genérica de sistemas de realidade virtual, requisitos de sistemas de realidade virtual e demanda computacional;\n\
Modelagem de Mundos Virtuais. Dispositivos de Realidade Virtual. Análise de interação em Mundos Virtuais;\n\
Plataformas de Desenvolvimento de Sistemas de Realidade Virtual o DIVE, VLNet, etc;\n\
Ambientes Virtuais Colaborativos: estudo de ferramentas;\n\
Aplicações de Realidade Virtual;\n\
Realidade Aumentada;\n\
Exemplos de Jogos que utilizam realidade virtual e realidade aumentada;\n\
Workshop de Ferramentas (VRML e Java 3D).";
			break;
		case 60391:
			text = "Evolução das redes de computadores. Organização das redes de computadores.\n\
O modelo OSI (Open Systems Interconnection) e a arquitetura TCP/IP. Padrões do IETF (Internet Engineering Task Force) e da IEEE (Institute of Eletrical and Eletronics Engineers).\n\
Conceitos básicos de redes locais de computadores: tipos, topologias, meios físicos de transmissão.\n\
Protocolos de aplicação: HTTP, DNS, DHCP e FTP.\n\
Protocolos de transporte: TCP e UDP.\n\
Protocolos de rede: IPv4, ICMP e IPv6; Endereçamento IP, configuração e manutenção.\n\
Programação em sockets utilizando redes de computadores.\n\
Protocolos de tempo real: RTP e RTCP.\n\
Protocolos Multicast.\n\
Redes locais: Ethernet, Fast Ethernet e Giga-Ethernet.\n\
Equipamentos de interconectividade: repetidores, switches e roteadores.";
			break;
		case 95222:
			text = "Técnicas de balanceamento de jogos.\n\
Mecânica e regras dos jogos.\n\
Projeto de níveis: metodologias, produção, desenvolvimento de mundos, modelagem de entidades, documentação.\n\
Análise e debate de estratégias avançadas de jogos (rush, tech, scouting, massing, hit-and-run, retreat, emboscada, defesas estáticas, gerenciamento de recursos, estratégias one-on-one, capture the flag, deathmatch/free-for-all).\n\
Balanceamento de estratégias.";
			break;
		case 60393:
			text = "Projeto de jogos digitais para plataformas alternativas;\n\
Desenvolvimento de jogos para uma plataforma alternativa (móvel, web ou diferentes sistemas operacionais).";
			break;

		case 00264:
			text = "aaaaaaaaaaaaaaaaaaaa";
			break;
		case 00265:
			text = "bbbbbbbbbbbbbbbbbbbb";
			break;
		case 98145:
			text = "Indústria de jogos e estratégias para atuação de produtoras de jogos digitais: histórico e cenário atual.\n\
Características e números do mercado mundial versus brasileiro.\n\
Cadeia de valor e relações entre os atores da indústria de jogos digitais.\n\
Segmentos, plataformas e modelos de negócios para a indústria de jogos.\n\
Introdução ao planejamento estratégico e análise de governança das atividades econômicas da organização.\n\
Definição de competências e importância estratégica das atividades.\n\
Estratégias colaborativas na indústria.";
			break;
		case 98146:
			text = "Advergames, browsergames e webgames.\n\
Arquitetura cliente-servidor na Internet.\n\
Linguagens de script.\n\
Webservices para entretenimento digital.\n\
Banco de dados em aplicações web.\n\
Projeto prático de aplicações web.";
			break;
		case 98147:
			text = "Arquiteturas de videogames de diferentes gerações.\n\
Estudo de emuladores.\n\
Ferramentas para criação de soluções homebrew.\n\
Programação para console de videogames.\n\
Projeto prático de aplicações para console de videogame.";
			break;
		case 50453:
			text = "The importance of entrepreneurship and innovation in educating professionals in contemporary society. Concepts and understandings about entrepreneurship and innovation. Entrepreneurship and social innovation. Personal skills of entrepreneurship and innovation, such as creativity, leadership, interpersonal skills and others.";
			break;
		case 60394:
			text = "Renderização de Materiais Translúcidos.\n\
Renderização Baseada em Imagens.\n\
Efeitos Especiais de renderização e animação.\n\
Non-photorealistic rendering.\n\
Técnicas de mapeamentos.\n\
Rendering de natureza.\n\
Shading avançado e environment lighting.";
			break;
		case 30316:
			text = "Edição não linear. Edição de som. Formatos de áudio e vídeo digitais. Dispositivos, resolução e otimização de som e imagem. Entretenimento Digital. Animação stop-motion. Animação 2D.";
			break;
		case 60397:
			text = "Introdução a Inteligência Artificial (I.A.): Histórico e conceitos básicos.\n\
Inteligência Artificial e sua aplicação em Jogos Clássicos: Jogos de Raciocínio (9 puzzle, Resta 1, Cubo de Rubik, brain teasers) e Jogos de Tabuleiro (Jogo da Velha, Jogo de Damas, Xadrez, Gamão, Go, Othello).\n\
Busca de soluções em espaço de estados (jogos como problemas de busca): Busca Cega, Busca Informada (Busca Heurística) e Busca Condicionada.\n\
Algoritmos de Busca no espaço de estados: Depth-First, Breadth-First, A Star (A*), Mini-Max. Representação de conhecimentos sobre o ambiente (mapas e caminhos) em jogos. Planejamento de trajetórias e ações. Trajetórias em jogos: uso do algoritmo A*, uso de algoritmos baseados em conectividade (espaço de configurações, grafo de visibilidade, caminho mais curto), campos potenciais.\n\
Execução de tarefas e do plano de ações. Deslocamento em ambientes virtuais.\n\
Sistemas baseados em regras aplicados a jogos.\n\
Agentes inteligentes: conceitos, tipos de agentes e arquiteturas de controle. Controle reativo (percepção-ação), controle deliberativo e controle híbrido. Agentes autônomos: memória, aprendizado e comunicação/interação entre agentes. Sistemas multi-agentes. Técnicas de aprendizado de máquina e adaptação aplicadas em Jogos: R.\n\
Raciocínio Baseado em Casos, Redes Neurais Artificiais, Algoritmos Evolutivos, Aprendizado por Reforço, Indução de árvores de Decisão. Monitoramento de comportamentos visando a representação e adaptação do perfil de usuário/jogador. Acelerando modelos complexos e modelos de simulação através do uso da I.A. (meta-modelos).\n\
Ferramentas para o desenvolvimento de aplicações de IA.\n\
Discussão sobre questões éticas relacionadas a Inteligência Artificial.";
			break;
		case 60399:
			text = "Desenvolvimento de jogos para multijogadores (conexão cliente-servidor);\n\
Planejamento e implementação do protótipo de jogo digital multijogador.";
			break;
		case 60388:
			text = "Introdução a Animação Computadorizada;\n\
Técnicas básicas de animação;\n\
Física para animação computadorizada;\n\
Algoritmos avançados de animação - Controle de Movimento. Animação de partículas. Corpos rígidos. Animação de corpos articulados. Corpos flexíveis e deformáveis (tecidos, líquidos, etc);\n\
Detecção e resposta a colisão;\n\
Modelagem e animação de fenômenos naturais (nuvens, fumaças, etc);\n\
Modelagem e Animação de personagens virtuais para jogos;\n\
Peixe, pássaros, humanos virtuais;\n\
Utilização de Movimento Capturado em Jogos;\n\
Animação baseada em tarefas, eventos e comportamentos;\n\
Caso especial: agentes sintéticos semi- autônomos e autônomos;\n\
Comportamento social, grupos de agentes, multidões, interação com ambientes virtuais.";
			break;
		case 60607:
			text = "O projeto deverá ser desenvolvido pelo aluno sob orientação de um professor e o conteúdo do trabalho deverá ser acordado com o orientador. Depende dos interesses pessoais e profissionais do aluno, desde que atendidos os objetivos do curso. Poderão ser desenvolvidos três diferentes tipos de projetos: um jogo digital, uma pesquisa aplicada visando o desenvolvimento de uma tecnologia para o desenvolvimento de jogos digitais ou uma pesquisa básica que investigue os fundamentos de técnicas utilizadas na criação de jogos digitais.";
			break;

		case 60400:
			text = "A proposta da atividade é abrir espaço para coordenação, colegiado e alunos definirem temas emergentes na área de jogos e entretenimento digital com o objetivo de promover uma atualização dos tópicos vistos dentro do curso até então. Entre outros conteúdos, a atividade pode apontar para o trabalho com: novas mídias e convergência de meios e suportes. Inovações tecnológicas e estilísticas na produção para jogos. Sociedade em rede. Cenários de consumo e indústria do entretenimento.";
			break;
		case 10321:
			text = "A vida, o ser humano, a ética e a computação como realidades complexas e dinâmicas e as possíveis implicações afirmativas.\n\
Os humanos como seres de cultura no universo multicultural - unidade do conceito, singularidade de cada cultura, respeito à diferença e o desafio ao diálogo transcultural e à solidariedade diante de uma economia globalizada.\n\
A responsabilidade ética dos cidadãos no Brasil face à urgência das políticas afirmativas com relação aos afrodescendentes e indígenas expressas nas leis 10639/2003 (afrodescendentes) e 11645/2008 (afrodescendentes e indígenas).\n\
Os princípios da sustentabilidade e da educação ambiental (Lei Federal nº 9795/1999) e a compreensão sistêmica da vida.\n\
A relação entre ética e sustentabilidade: o desenvolvimento das tecnologias digitais e suas respostas concretas diante da contemporaneidade e do desafio de conciliar desenvolvimento e sustentabilidade.\n\
Questões do exercício profissional: código de ética.\n\
Os desafios da cultura digital e estratégias de inclusão social e digital.\n\
A era pós-industrial e o paradigma da digitalidade.";
			break;
		case 10322:
			text = "A América Latina no Contexto das transformações mundiais: desenvolvimento e subdesenvolvimento, integração regional no processo de globalização.\n\
Contextos e concepções histórico-culturais de abrangência das leis 10639/2003 e 11645/2008 e das políticas afirmativas vigentes para os povos e coletividades indígenas e afrodescendentes na América Latina e no Brasil.\n\
Contribuições das tradições e culturas africanas e ameríndias em relações às noções de desenvolvimento e sustentabilidade;\n\
Os processos de inclusão-exclusão decorrentes da globalização na sociedade de mercado. Desenvolvimento sustentável, meio-ambiente e ecologia no contexto Latino Americano.\n\
Impactos sócio-culturais da sociedade da informação para as populações do continente: análise das transformações sociais, políticas, econômicas e culturais decorrentes.";
			break;
		case 60401:
			text = "Conceitos de análise de complexidade algorítmica.\n\
Geometria computacional: casca convexa, triangulações particionamento espacial.\n\
Ferramentas para programação, depuração e perfilação.\n\
Programação em Hardware Gráfico.\n\
Técnicas de Aceleração para Renderização.\n\
Técnicas de aceleração de modelagem geométrica: Geometria Adaptativa.\n\
Introdução à Programação Genérica em Hardware Gráfico.";
			break;
		case 50215:
			text = "Empreendedorismo na atualidade: Histórico e contexto atual. Perspectivas para empreender. Aspectos econômicos e de gestão. O mito do empreendedor: Conceitos importantes. Diferenças entre personagens do mundo dos negócios. Características e comportamentos empreendedores. Empreendimentos empresariais na era tecnológica: Estruturação de empresas. Microempresa e enquadramento jurídico. Tributos e obrigações das empresas. Plano de negócios como ferramenta de gestão. Análise de mercado e de viabilidade, planejamento, informação e risco. Inovação e oportunidade: criatividade e inovação, processo de inovação, tecnologia e capacitação tecnológica, estratégia de inovação.";
			break;
		case 60608:
			text = "O projeto deverá ser desenvolvido pelo aluno sob orientação de um professor orientador. Um projeto deverá ser implementado aplicável na área de jogos e entretenimento digital. Poderão ser desenvolvidos três diferentes tipos de projetos: um jogo digital, uma pesquisa aplicada visando o desenvolvimento de uma tecnologia para o desenvolvimento de jogos digitais ou uma pesquisa básica que investigue os fundamentos de técnicas utilizadas na criação de jogos digitais.";
			break;
	}
	alert(text);
}