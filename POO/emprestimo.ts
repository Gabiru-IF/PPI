class Emprestimo {
    private livro : Exemplar //Exemplar
    private usuario : Pessoa //Pessoa
    private dataEmprestimo: Date
    private dataPrevistaDevolucao: Date

    constructor(li: Exemplar, ps: Pessoa) {
        this.livro = li
        this.usuario = ps
        this.dataEmprestimo = new Date()
        this.dataPrevistaDevolucao = new Date()
        this.dataPrevistaDevolucao.setDate(
            this.dataEmprestimo.getDate() + 15)
    }

    obterDataEmprestimo(): string {
        return this.dataEmprestimo.toLocaleDateString()

    }

    obterDataPrevistaDevolucao(): string {
        return this.dataPrevistaDevolucao.toLocaleDateString()
    }
}

class Pessoa {
    private nome : string
    private cpf : any

    constructor(nome : string, cpf : any) {
        this.nome = nome
        this.cpf = cpf
    }
}

class Exemplar {
    private isbn : any
    private titulo : string
    private autor : string
    private ano : number

    constructor(isbn : any, titulo : string, autor : string, ano : number) {
        this.isbn = isbn
        this.titulo = titulo 
        this.autor = autor
        this.ano = ano
    }
}

let Bruno = new Pessoa ('Bruno', '123.123.123-45')
let livro01 = new Exemplar( 8582850018, 'Memórias Póstumas de Brás Cubas', 'Joaquim Maria Machado de Assis', 1881)
let emp1 =  new Emprestimo(livro01, Bruno, )