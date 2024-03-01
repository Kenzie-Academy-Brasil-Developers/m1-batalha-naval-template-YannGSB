# Batalha Naval

## Descrição

Desenvolvi um jogo simples de Batalha Naval utilizando JavaScript. O jogador pode alocar navios em um tabuleiro, fazer suposições sobre a localização dos navios e verificar se consegue afundar todos.

## Features

- **allocateShips:**
  - Função que aloca navios em posições específicas no tabuleiro.
  - Parâmetros: `shipPositions` (array de arrays com posições de navios) e `initialBoard` (tabuleiro inicialmente vazio).
  - Retorno: Tabuleiro modificado após a inserção dos navios.

- **checkGuesses:**
  - Função que verifica as suposições do jogador em relação à posição dos navios.
  - Parâmetros: `guesses` (array de arrays com suposições) e `mountedBoard` (tabuleiro com navios alocados).
  - Retorno: Tabuleiro modificado após as suposições.

- **checkWinCondition:**
  - Função que verifica se o jogador venceu a partida.
  - Parâmetro: `guessedBoard` (tabuleiro de suposições do jogador).
  - Retorno: True se todos os navios foram atingidos, false caso contrário.

