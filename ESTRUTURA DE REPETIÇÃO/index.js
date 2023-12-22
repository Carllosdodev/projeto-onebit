function juizDeJokenpo(jogada1, jogada2) {

    if(jogada1 === jogada2) {
        return "Empate";
    }

 

    switch (jogada1) {
        case "Pedra":
            if(jogada2 === "Tesoura") {
                return "Jogador 1 vence";
            } else {
                return "Jogador 2 vence";
            }
        case "Tesoura":
            if (jogada2 === "Papel") {
                return "Jogador 1 vence";
            } else {
                return "Jogador 2 vence";
            }
        case "Papel":
            if (jogada2 === "Pedra") {
                return "Jogador 1 vence";
            } else {
                return "Jogador 2 vence";
            }
            default:
                return "Jogada inválida"
    }

    
}

// Exemplos de uso

