const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj), 'Objeto convertido para JSON') // Convertendo objeto para JSON

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'), 'JSON convertido para Objeto') // Convertendo JSON para objeto 
console.log('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }') // Tipos suportados em JSON