const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento na última posição do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição do Array
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2,0, 'Bottas', 'Massa')
console.log(pilotos)

pilotos.splice(3, 1) // Remove o Massa
console.log(pilotos)

// Slice retorna um novo array
const algunsPilotos = pilotos.slice(2) 
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // Vai criar um novo array a partir do elemento 1 até o elemento 4, mas o 4 não entra
console.log(algunsPilotos2)