// Validação de Datas - Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

const prompt = require("prompt-sync")(); // Importa o módulo prompt-sync para ler entradas do usuário

function ehAnoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
    return false; // Se qualquer entrada de valor for invalida em (dia, mes e ano) retorna false.
  }

  if (mes === 2) {
    return dia <= (ehAnoBissexto(ano) ? 29 : 28);
  }

  if ([4, 6, 9, 11].includes(mes)) {
    return dia <= 30;
  }

  return dia <= 31;
}

//Testes

console.log(ehDataValida(19, 6, 2002)); // true
console.log(ehDataValida(29, 2, 2020)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2021)); // false (não é an bissexto)
