//2. Jogo de Adivinhação - Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require("prompt-sync")(); // Importa o módulo prompt-sync para ler entradas do usuário

let jogarNovamente = true;

while (jogarNovamente) {
  let aleatoryNumberGenerator = Math.floor(Math.random() * 100) + 1; //Gera um número aleatório de 1 a 100.
  let guess;
  let attempts = 0; // Variável para contar o número de tentativas do usuário.
  let maxAttempts = 10;

  console.log(
    "Bem-vindo ao jogo de adivinhação! - Tente adivinhar o número de 1 a 100!"
  );

  console.log("💡 Você tem até 10 tentativas!");

  while (guess !== aleatoryNumberGenerator && attempts < maxAttempts) {
    guess = parseInt(
      prompt("Adivinhe o número gerado pelo código, de 1 a 100:")
    ); // entrada para o usuário adivinhar o número gerado pelo código.
    //Aumentar o número de tentativas a cada loop

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("Digite um número válido entre 1 e 100.");
      continue;
    }
    attempts++;

    if (guess < aleatoryNumberGenerator) {
      console.log(
        "Você errou! O número gerado é mais alto !" + " Tentativas: " + attempts
      );
    } else if (guess > aleatoryNumberGenerator) {
      console.log(
        `Você errou! O número gerado é mais baixo! Tentativas: ${attempts}`
      );
      console.log("Tente novamente!");
    } else {
      console.log(
        `Parabéns! Você acertou o número ${aleatoryNumberGenerator} em ${attempts} tentativas.`
      );
      break;
    }

    //Verificar se o número de tentativos foi excedido.

    if (attempts === maxAttempts) {
      console.log(
        `Você excedeu o número máximo de tentativas (${maxAttempts}). O número era ${aleatoryNumberGenerator}.`
      );
      break;
    }
  }

  let resposta = prompt(
    "Você gostaria de continuar jogando? (s/n): "
  ).toLowerCase();

  jogarNovamente = resposta === "s" || resposta === "sim";
}

console.log("👋 Obrigado por jogar!");
