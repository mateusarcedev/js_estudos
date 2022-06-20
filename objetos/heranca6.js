function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123) // Cria um novo objeto feito, o protótipo do objeto criado aponta para function.prototype
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// Simulnado o new
function novo(f, ...params) { //... é o operador spread/rest, transforma um conjunto de parâmetros em um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
} // Função que simula o comportamento de um operador new

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até breve', 123)

console.log(aula3, aula4)