// 9. Conversão Entre Formatos - Escreva duas funções: ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

//Function 1

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

// Exemplo de uso:
const meusPares = [
  ["nome", "Enzo"],
  ["idade", 23],
  ["profissao", "Dev Full Stack Jr"],
];

const meuObjeto = paresParaObjeto(meusPares);
console.log(meuObjeto);
// Saída: { nome: 'Enzo', idade: 23, profissao: 'Dev Full Stack jr' }

//Function 2

function objetoParaPares(obj) {
  return Object.entries(obj);
}

// Exemplo de uso:
const dadosObjeto = {
  produto: "DevKit Pro",
  marca: "DevFSJR",
  potencia: "36.13 TFLOPS",
  memoria: "32 GB GDDR6",
  preco: 5999.9,
  disponivel: true,
};

const dadosPares = objetoParaPares(dadosObjeto);
console.log(dadosPares);
/* Saída:
 [
   ['produto', 'DevKit Pro'],
   ['marca', 'DevFSJR'],
   ['potencia', '36.13 TFLOPS'],
   ['memoria', '32 GB GDDR6'],
   ['preco', 5999.9],
   ['disponivel', true]
 ]
*/
