#include "libUnicornio.h"
#pragma once
class Cogumelo
{
public:
	Cogumelo();
	~Cogumelo();
	void desenhar();
	void atualizar();
	void inicializar(float x_, float y_, float vel, bool indo_, bool automatico_, bool mouse_, string nome, string caminho);

private:
	Sprite sprite;
	float x, y, velocidade;
	bool indo, automatico, mouse;
	Som fx;
};

