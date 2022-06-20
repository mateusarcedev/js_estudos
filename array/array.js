console.log(typeof Array, new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia') // Adiciona um novo elemento ao array
console.log(aprovados.length)
aprovados[9] = 'Rafael'
aprovados.sort() 
console.log(aprovados)

delete aprovados[1]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'elemento2') // para excluir e adicionar elementos
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'elemento2') // para adcionar elementos sem excluir
console.log(aprovados)