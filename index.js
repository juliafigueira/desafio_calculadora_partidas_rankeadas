// Função para calcular o nível baseado no número de vitórias
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias e derrotas
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível baseado no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna o saldo de vitórias e o nível
    return { saldoVitorias, nivel };
}

// Inicializa a variável para controle de repetição
let continuar = true;

while (continuar) {
    // Obtém os dados do jogador
    let vitorias = parseInt(prompt("Informe a quantidade de vitórias:"));
    let derrotas = parseInt(prompt("Informe a quantidade de derrotas:"));

    // Chama a função para calcular o nível
    const resultado = calcularNivel(vitorias, derrotas);

    // Exibe o resultado
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);

    // Pergunta se o jogador deseja continuar
    let resposta = prompt("Deseja continuar? S/N").toUpperCase(); // Converte para maiúsculas para facilitar a comparação
    if (resposta === "S") {
        continuar = true;
    } else {
        continuar = false;
    }
}
