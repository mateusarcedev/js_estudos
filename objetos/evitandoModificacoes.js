// Object.preventExtensions -> Vai impedir que o objeto seja extendido, não vai permitir adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha' // Pode alterar dados, mas não adicionas novas chaves e valores (atributos)
produto.descricao = 'Borracha escolar branca'
delete produto.tag // Pode excluir um atributo
console.log(produto)

const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa) // Não adiciona ou exclui atributos do objeto, apenas modifica os valores
console.log('Selado:',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze -> objeto seal(selado) e com valores constantes, não é possível fazer alterações nos atributos, nem adicionar novos atributos ou excluir
