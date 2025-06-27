// 8. Agrupamento por Propriedade - Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: "Sony", total: 100000 },
  { cliente: "Microsoft", total: 20000 },
  { cliente: "Aya", total: 2150 },
  { cliente: "Nintendo", total: 10000050 },
  { cliente: "Sony", total: 100000 },
  { cliente: "Sega", total: 3000 },
  { cliente: "Aya", total: 1000 },
  { cliente: "Microsoft", total: 29950 },
  { cliente: "Sega", total: 4540 },
];

const totaisPorCliente = vendas.reduce((acumulador, venda) => {
  const { cliente, total } = venda;

  if (acumulador[cliente]) {
    acumulador[cliente] += total;
  } else {
    acumulador[cliente] = total;
  }

  return acumulador;
}, {});

console.log(totaisPorCliente);
