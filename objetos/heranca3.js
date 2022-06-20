const pai = { nome: 'Pedro', CorCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.CorCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.CorCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) { // Técnica para saber se o atributo pertence ao objeto ou se ele veio por herança
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)  
}