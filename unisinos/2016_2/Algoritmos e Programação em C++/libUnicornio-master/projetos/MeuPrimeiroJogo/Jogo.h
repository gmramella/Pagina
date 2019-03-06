#pragma once
#include "libUnicornio.h"
#include "Cogumelo.h"

class Jogo
{
	public:
		Jogo();
		~Jogo();

		void inicializar();
		void finalizar();
		void executar();

	private:
		Sprite sFundo;
		Cogumelo cVerde, cVermelho, cRoxo;
};

