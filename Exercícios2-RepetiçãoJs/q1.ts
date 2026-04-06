interface Familia {
    sobrenome : string,
    num_filhos : number,
    renda_média : number
}

const familias : Familia[] = []

for (let x = 0; x < 100; x++) {
    const familia: Familia = {
        sobrenome: `Familia_${x}`,
        num_filhos: Math.floor(Math.random() * 4), // 0 a 3 filhos
        renda_média: Math.floor(Math.random() * 18501) + 1500 // 1500 a 20000
    };
    
    familias.push(familia);
}

let renda_média_familias = 0
let qtd_filhos_familias = 0
let total_renda = 0

for (const familia of familias) {
    qtd_filhos_familias += familia.num_filhos
}

for (const familia of familias) {
    total_renda += familia.renda_média
}

renda_média_familias = total_renda / familias.length

// Resultados
console.log('Total de famílias:', familias.length)
console.log('Total de filhos:', qtd_filhos_familias)
console.log('Renda média das famílias: R$', renda_média_familias.toFixed(2))