// Verifica se um número é primo
const prompt = require('prompt-sync')()

let num: number = 0

// Ler número enquanto não for válido (maior que 1)
do {
    let entrada = prompt("Número inteiro positivo (>1):")
    num = Number(entrada)
} while (num <= 1)

// Verificar se é primo
let primo: boolean = true
let divisor: number = num - 1

while (primo && divisor > 1) {
    if (num % divisor === 0) {
        primo = false
    } else {
        divisor = divisor - 1
    }
}

// Exibir resultado
if (primo) {
    console.log(`O número ${num} é primo`)
} else {
    console.log(`O número ${num} não é primo`)
}




