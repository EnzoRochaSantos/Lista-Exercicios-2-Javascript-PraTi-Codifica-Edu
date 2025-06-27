// 7. Mapeamento e Ordenação - Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

function nomesOrdenadosPorPreco(consoles) {
  let copia = consoles.slice();

  copia.sort((a, b) => a.preco - b.preco);

  let nomes = copia.map((produto) => produto.nome); // Map é usado para extrair os nomes dos produtos e criar um novo array.

  return nomes;
}

// Testes

const consoles = [
  { nome: "Xbox Series X", preco: 4500, fabricante: "Microsoft" },
  { nome: "PlayStation 5 Pro", preco: 6999, fabricante: "Sony" },
  { nome: "Nintendo Switch 2", preco: 4499, fabricante: "Nintendo" },
];

console.log(nomesOrdenadosPorPreco(consoles));
// Saída: ["Nintendo Switch 2", "Xbox Series X", "PlayStation 5 Pro"]
