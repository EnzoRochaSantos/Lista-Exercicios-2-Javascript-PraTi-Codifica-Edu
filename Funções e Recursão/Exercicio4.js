//4. Fatorial Recursivo - Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando um Error, e n === 0 retornando 1.

const prompt = require("prompt-sync")(); // Importa o módulo prompt-sync para ler entradas do usuário

function fatorial(n) {
  if (n < 0) {
    throw new Error("O número deve ser maior ou igual a zero.");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1
try {
  console.log(fatorial(-1)); //Impedir que o programa seja interrompido
} catch (error) {
  console.log("Erro:", error.message);
}
