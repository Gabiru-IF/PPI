//array
let disciplinas : string[] =
    ['PPI', 'Espanhol', 'PDS', 'SOR', 'História']

let carro = ['Chevette', 1987, 4400.00, 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcST2-H0nI1ZYsaNLoSNqes9ke05shTSxlToyW88GohxosJhngO1']

carro.push('GT') //Modelo - pos. 4
carro.push(123000) //Km rodados
//Primeiro Argumento: Posição Inicial. Segundo Argumento: Quantos elementos serão removidos a partir da posição inicial
carro.splice(4, 1)


//objeto
let carro2 = 
{
    "nome" : "Chevette",
    "ano" : 1987,
    "preco" : 1440.00,
    "foto" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcST2-H0nI1ZYsaNLoSNqes9ke05shTSxlToyW88GohxosJhngO1"
}

