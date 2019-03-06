#include "Jogo.h"

Jogo::Jogo()
{
}

Jogo::~Jogo()
{
}

void Jogo::inicializar()
{
	uniInicializar(1024, 768, false);
	gRecursos.carregarSpriteSheet("fundoMario", "imagens/fundo.jpg");
	sFundo.setSpriteSheet("fundoMario");
	
	cVerde.inicializar(800, 686, 2, true, true, false, "cogumelo verde", "imagens/cogumeloVerde.png");
	cVermelho.inicializar(100, 686, 2, false, false, true, "cogumelo roxo", "imagens/cogumeloRoxo.png");
	cRoxo.inicializar(800, 686, 2, true, false, false, "cogumelo vermelho", "imagens/cogumeloVermelho.png");

	//gRecursos.carregarMusica("musica supermario", "sons/smb_world_clear.wav");

}

void Jogo::finalizar()
{
	uniFinalizar();
}

void Jogo::executar()
{
	//gMusica.tocar("musica supermario", true);

	while(!gTeclado.pressionou[TECLA_ESC] && !gEventos.sair)
	{
		uniIniciarFrame();
		
		sFundo.desenhar(gJanela.getLargura() / 2, gJanela.getAltura() / 2);

		cVerde.atualizar();
		cVerde.desenhar();

		cVermelho.atualizar();
		cVermelho.desenhar();

		cRoxo.atualizar();
		cRoxo.desenhar();

		uniTerminarFrame();
	}
}