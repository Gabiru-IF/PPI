let data = new Date()

console.log(data.getDay())

class Data {
    dia : number;
    mes : number;
    ano : number

    constructor(dd : number = 1, mm : number = 1, aa : number = 2026) {
        this.dia = dd
        this.mes = mm
        this.ano = aa
    }

    obterDataFormatada() : string {
        const dia = this.dia < 10 ? '0'+this.dia : ''+this.dia
        const mes = this.mes < 10 ? '0'+this.mes : ''+this.mes

        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

let hoje = new Data(13, 4, 2026)
console.log(hoje.obterDataFormatada())

let outraData = new Data(13)
console.log(outraData.obterDataFormatada())