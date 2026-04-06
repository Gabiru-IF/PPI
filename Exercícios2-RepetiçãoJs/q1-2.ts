const prompt = require('prompt-sync')()

let numFilhos = 0
let mediaRenda = 0
let mediaFilhos = 0
let familias = 0

//Leitura 1 vez fora da repetição
let renda = +prompt('Renda Familiar: ')
while(renda > 0) {
    familias++
    numFilhos = +prompt('Quantidade de filhos: ')  
    //Fazer contagem que o programa pede
    mediaRenda += renda
    mediaFilhos += numFilhos

    renda = +prompt('Renda Familiar: ')
}
//Exibir o resultado ( as médias )
mediaRenda = mediaRenda / familias
mediaFilhos = mediaFilhos / familias

console.log(`
Foram registradas ${familias} familias;
A média de renda delas foi de: R$${mediaRenda.toFixed(2)}
A média de filhos por família foi de: ${mediaFilhos}
`)