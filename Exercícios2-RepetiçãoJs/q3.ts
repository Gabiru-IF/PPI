// Função para verificar se um número é primo
const prompt = require('prompt-sync')()

function ehPrimo(numero: number): boolean {
    if (numero <= 1) return false
    
    let primo: boolean = true
    let divisor: number = numero - 1
    
    while (primo && divisor > 1) {
        if (numero % divisor === 0) {
            primo = false
        } else {
            divisor = divisor - 1
        }
    }
    
    return primo
}

// Ler intervalo do usuário
let inicio: number
let fim: number

let entrada_inicio = prompt("Digite o número inicial do intervalo:")
inicio = Number(entrada_inicio)

let entrada_fim = prompt("Digite o número final do intervalo:")
fim = Number(entrada_fim)

// Contar primos no intervalo
let quantidade_primos: number = 0

for (let numero = inicio; numero <= fim; numero++) {
    if (ehPrimo(numero)) {
        quantidade_primos++
    }
}

// Exibir resultado
console.log(`Quantidade de números primos entre ${inicio} e ${fim}: ${quantidade_primos}`)
