let nome = 'Gabriel Moreira'
let mat = 20231144010002
let outra : string = 'Lucas Pereira'
let pessoa : any

//undefined : sem valor definido
let bim1 : number | undefined = undefined
bim1 = 75

var acimaMedia = true

if (bim1 > 60) {
    acimaMedia = true
    console.log('Acima da média')
} else {
    acimaMedia = false
    console.log('Abaixo da Média')
}

if (acimaMedia == true) {
    console.log('PASSOU!')
}else{
    console.log('REPROVOU!')
}
