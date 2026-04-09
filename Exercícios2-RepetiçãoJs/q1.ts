// Pesquisa de famílias - Prefeitura de Parnamirim-RN
const prompt = require('prompt-sync')()

let renda_familia: number
let num_filhos: number
let total_renda: number = 0
let total_filhos: number = 0
let quantidade_familias: number = 0

// Ler dados das famílias
do {
    let entrada_renda = prompt("Digite a renda familiar (ou valor negativo para finalizar):")
    renda_familia = Number(entrada_renda)

    if (renda_familia < 0) {
        break
    }

    let entrada_filhos = prompt("Digite o número de filhos:")
    num_filhos = Number(entrada_filhos)

    total_renda += renda_familia
    total_filhos += num_filhos
    quantidade_familias++

} while (true)

// Calcular médias
let media_renda = total_renda / quantidade_familias
let media_filhos = total_filhos / quantidade_familias

// Exibir resultados
console.log("=== Resultados da Pesquisa ===")
console.log(`Total de famílias: ${quantidade_familias}`)
console.log(`Renda familiar média: R$ ${media_renda.toFixed(2)}`)
console.log(`Média de filhos por família: ${media_filhos.toFixed(2)}`)