console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() { // O método reverse() não existe na string, acabou de ser criado no protótipo do objeto
    return this.split('').reverse().join('')
}

console.log('Mateus Arce'.reverse())

Array.prototype.first = function() { // O método first() não existe no array, acabou de ser criado no protótipo do objeto
    return  this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

String.prototype.toString = function() { // Não fazer isso, alterar(sobrescrever) função que já existe em um protótipo da linguagem
    return 'Lascou tudo'
}

console.log('Mateus'.reverse())