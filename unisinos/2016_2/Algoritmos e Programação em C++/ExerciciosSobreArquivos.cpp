#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
#include <fstream>
#include <vector>
#include <algorithm>
#include <streambuf>

//using namespace std;

void split(std::string str, std::string splitBy, std::vector<std::string>& tokens)
{
	/* Store the original string in the array, so we can loop the rest
	* of the algorithm. */
	tokens.push_back(str);

	// Store the split index in a 'size_t' (unsigned integer) type.
	size_t splitAt;
	// Store the size of what we're splicing out.
	size_t splitLen = splitBy.size();
	// Create a string for temporarily storing the fragment we're processing.
	std::string frag;
	// Loop infinitely - break is internal.
	while (true)
	{
		/* Store the last string in the vector, which is the only logical
		* candidate for processing. */
		frag = tokens.back();
		/* The index where the split is. */
		splitAt = frag.find(splitBy);
		// If we didn't find a new split point...
		if (splitAt == std::string::npos)
		{
			// Break the loop and (implicitly) return.
			break;
		}
		/* Put everything from the left side of the split where the string
		* being processed used to be. */
		tokens.back() = frag.substr(0, splitAt);
		/* Push everything from the right side of the split to the next empty
		* index in the vector. */
		tokens.push_back(frag.substr(splitAt + splitLen, frag.size() - (splitAt + splitLen)));
	}
}

int main()
{
	std::srand(std::time(0));

	/*char matriz[12][5];
	int matriz[7][5];

	for (int i = 0; i < 12; i++)
	{
		for (int j = 0; j < 5; j++)
		{
			matriz[i][j] = (char)(65 + rand() % 26);
			std::cout << std::to_string(matriz[i][j]) + " ";
		}
		std::cout << std::endl;
	}

	for (int i = 0; i < 7; i++)
	{
		for (int j = 0; j < 5; j++)
		{
			matriz[i][j] = (78 + rand() % 88);
			std::cout << std::to_string(matriz[i][j]) + " ";
		}
		std::cout << std::endl;
	}
	int maiorNumeroImpar = matriz[0][0], menorNumeroPar = matriz[0][0];
	for (int i = 0; i < 7; i++)
	{
		for (int j = 0; j < 5; j++)
		{
			if (matriz[i][j] % 2)
			{
				if (matriz[i][j] < menorNumeroPar)
				{
					menorNumeroPar = matriz[i][j];
				}
			}
			else
			{
				if (matriz[i][j] > maiorNumeroImpar)
				{
					maiorNumeroImpar = matriz[i][j];
				}
			}
		}

	}
	std::cout << "Menor numero par: " + std::to_string(menorNumeroPar) + "\nMaior numero impar: " + std::to_string(maiorNumeroImpar);
	std::cout << std::endl;
	//------------------------------------------------------------------------------------------------------------------
	std::string nomes[15];
	float notas[15][3];

	for (int i = 0; i < 15; i++)
	{
		std::cout << "Nome do aluno " + std::to_string(i + 1) + ": ";
		std::cin >> nomes[i];
	}
	for (int i = 0; i < 15; i++)
	{
		for (int j = 0; j < 3; j++)
		{
			std::cout << "Nota " + std::to_string(j + 1) + " do aluno " + nomes[i] + ": ";
			std::cin >> notas[i][j];
		}
	}
	for (int i = 0; i < 15; i++)
	{
		float temp = 0;
		for (int j = 0; j < 3; j++)
		{
			temp += notas[i][j];
		}
		temp /= 3;
		std::cout << "A media do aluno " + std::to_string(i + 1) + " eh " + std::to_string(temp) << std::endl;
	}
	*/
	//------------------------------------------------------------------------------------------------------------------
	std::string nomes1[5];
	int pontuacoes1[5];

	for (int i = 0; i < 5; i++)
	{
		std::cout << "Nome do jogador " + std::to_string(i + 1) + ": ";
		std::cin >> nomes1[i];
		std::cout << "Pontuacao do jogador " + nomes1[i] + ": ";
		std::cin >> pontuacoes1[i];
	}
	std::ofstream arqOut("pontuacao.txt");
	if (arqOut.is_open())
	{
		for (int i = 0; i < 5; i++)
		{
			arqOut << "Nome: " + nomes1[i] + "\n";
			arqOut << "Pontuacao: " + std::to_string(pontuacoes1[i]) + "\n";
		}
		arqOut.close();
	}

	std::string nomes2[5];
	int pontuacoes2[5];

	std::string temp;
	std::ifstream arqIn("pontuacao.txt");
	if (arqIn.is_open())
	{
		std::string contents((std::istreambuf_iterator<char>(arqIn)), std::istreambuf_iterator<char>());
		temp = contents;
		arqIn.close();
	}
	size_t pos = 0;
	std::string delimitador = "\n", token;
	int cont = 0;
	while ((pos = temp.find(delimitador)) != std::string::npos) {
		token = temp.substr(0, pos);
		if (cont % 2 == 0)
		{
			nomes2[cont / 2] = token;
		}
		else
		{
			pontuacoes2[(int)(cont - 1) / 2] = stoi(token);
		}
		cont++;
		temp.erase(0, pos + delimitador.length());
	}

	std::cout << temp << std::endl;

	for (int i = 0; i < 5; i++)
	{
		std::cout << "Nome: " + nomes2[i] + "\tPontuacao: " + std::to_string(pontuacoes2[i]) + "\n";
	}
	//------------------------------------------------------------------------------------------------------------------
	/*std::string palavra;
	int cont = 0;
	std::ifstream arq;

	std::cout << "Palavra: ";
	std::cin >> palavra;
	arq.open("palavras.txt");
	if (arq.is_open())
	{
		std::string temp;
		while (arq >> temp)
		{
			if (temp == palavra)
			{
				cont++;
			}
		}
		arq.close();
		if (cont == 0)
		{
			std::cout << "A palavra " + palavra + " não foi encontrada." << std::endl;
		}
		else
		{
			std::cout << "Foram encontradas " + std::to_string(cont) + " ocorrências da palavra " + palavra + "." << std::endl;
		}
	}*/
	//------------------------------------------------------------------------------------------------------------------
	/*int cont = 0;
	std::ifstream arq("palavras.txt");
	if (arq.is_open())
	{
		std::string temp;
		while (arq >> temp)
		{
			cont++;
		}
		arq.close();
		std::cout << "O arquivo tem " + std::to_string(cont) + " palavras." << std::endl;
	}*/

	/*std::string nomeArq;
	std::cout << "Nome do arquivo: ";
	std::cin >> nomeArq;

	int chave;
	do {
		std::cout << "Chave de ate 4 digitos: ";
		std::cin >> chave;
	} while (chave >= 10000);

	char op;
	do {
		std::cout << "c - Criptografia, d - Decriptografia: ";
		std::cin >> op;
	} while (tolower(op) != 'c' && tolower(op) != 'd');

	std::ifstream arqIn(nomeArq);
	if (arqIn.is_open())
	{
		std::string temp((std::istreambuf_iterator<char>(arqIn)), std::istreambuf_iterator<char>());
		arqIn.close();
		if (op == 'c')
		{
			for (int i = 0; i < temp.size(); i++)
			{
				temp[i] = temp[i] + (chave % 256);
			}
		}
		else
		{
			for (int i = 0; i < temp.size(); i++)
			{
				temp[i] = temp[i] - (chave % 256);
			}
		}
		std::cout << temp << std::endl;
		std::ofstream arqOut(nomeArq);
		if (arqOut.is_open())
		{
			arqOut << temp;
			arqOut.close();
		}
	}*/

	system("pause");
}