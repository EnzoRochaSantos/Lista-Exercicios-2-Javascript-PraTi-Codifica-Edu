//5. Debounce - Crie function debounce(fn, delay) que receba uma função fn e um delay em ms, retornando uma nova função que só executa fn se não for chamada novamente dentro do intervalo.

const prompt = require("prompt-sync")(); // Importa o módulo prompt-sync para ler entradas do usuário

function debounce(fn, delay) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Testando a função debounce

function chamarPersonagem(nome) {
  console.log("Personagem chamado:", nome);
}

const debouncedChamarPersonagem = debounce(chamarPersonagem, 1000);
// Simulando chamadas rápidas

debouncedChamarPersonagem("K");
debouncedChamarPersonagem("Ka");
debouncedChamarPersonagem("Kak");
debouncedChamarPersonagem("Kaka");
debouncedChamarPersonagem("Kakar");
debouncedChamarPersonagem("Kakaro");
debouncedChamarPersonagem("Kakarot");
debouncedChamarPersonagem("Kakaroto");
