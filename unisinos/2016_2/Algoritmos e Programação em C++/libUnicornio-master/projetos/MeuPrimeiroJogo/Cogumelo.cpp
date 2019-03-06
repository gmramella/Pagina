#include "Cogumelo.h"

Cogumelo::Cogumelo()
{
}

Cogumelo::~Cogumelo()
{
}

void Cogumelo::desenhar()
{
	sprite.desenhar(x, y);
}

void Cogumelo::atualizar()
{
	if (gTeclado.pressionou[TECLA_C] && mouse) {
		fx.tocar();
	}
	if (gTeclado.pressionou[TECLA_M] && automatico) {
		fx.tocar();
	}
	if (gTeclado.pressionou[TECLA_T] && !mouse && !automatico) {
		fx.tocar();
	}
	if (automatico) {
		if (indo == true)
		{
			if (x < gJanela.getLargura())
			{
				x += velocidade;
			}
			else
			{
				indo = false;
			}
		}
		else
		{
			if (x > 0)
			{
				x -= velocidade;
			}
			else
			{
				indo = true;
			}
		}
	}
	else if (mouse) {
		x = gMouse.x;
		y = gMouse.y;
	}
	else {
		if (gTeclado.segurando[TECLA_DIR])
		{
			x += velocidade;
		}
		if (gTeclado.segurando[TECLA_ESQ])
		{
			x -= velocidade;
		}
	}
}

void Cogumelo::inicializar(float x_, float y_, float vel, bool indo_, bool automatico_, bool mouse_, string nome, string caminho)
{
	x = x_;
	y = y_;
	velocidade = vel;
	indo = indo_;
	automatico = automatico_;
	mouse = mouse_;
	gRecursos.carregarSpriteSheet(nome, caminho);
	sprite.setSpriteSheet(nome);

	if (!gRecursos.carregouAudio("som do cogumelo")) {
		gRecursos.carregarAudio("som do cogumelo", "sons/smw_1-up.wav");
	}
	fx.setAudio("som do cogumelo");
}
