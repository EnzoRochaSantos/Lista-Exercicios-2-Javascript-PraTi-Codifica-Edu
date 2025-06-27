// 6. Memoization - Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

const prompt = require("prompt-sync")(); // Importa o módulo prompt-sync para ler entradas do usuário

function memoize(fn) {
  const cache = new Map();

  return function memoized(...args) {
    let currentCache = cache;

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];

      if (!currentCache.has(arg)) {
        currentCache.set(arg, new Map());
      }

      currentCache = currentCache.get(arg);
    }

    const RESULT_KEY = "__result__";

    if (currentCache.has(RESULT_KEY)) {
      return currentCache.get(RESULT_KEY);
    }

    const result = fn(...args);
    currentCache.set(RESULT_KEY, result);
    return result;
  };
}

function calcularFatorial(n) {
  if (n <= 1) return 1;
  return n * calcularFatorial(n - 1);
}

//Testes

const memoizedFatorial = memoize(calcularFatorial);

console.log(memoizedFatorial(40)); // 8.159152832478977e+47
console.log(memoizedFatorial(40)); // 8.159152832478977e+47 (cache)
