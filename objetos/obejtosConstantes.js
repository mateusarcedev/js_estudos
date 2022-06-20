// pessoa -> 123(endereço de memoria) -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // Tornou o obejto constante

pessoa.nome = 'Maria'

console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'João'}) // Já cria as propriedades do objeto como constantes
console.log(pessoaConstante)