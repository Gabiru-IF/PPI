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

    obterLivro(): Exemplar {
        return this.livro
    }

    obterUsuario(): Pessoa {
        return this.usuario
    }
}

class Pessoa {
    private nome : string
    private cpf : any

    constructor(nome : string, cpf : any) {
        this.nome = nome
        this.cpf = cpf
    }

    obterNome(): string {
        return this.nome
    }

    obterCpf(): any {
        return this.cpf
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

    obterIsbn(): any {
        return this.isbn
    }

    obterTitulo(): string {
        return this.titulo
    }

    obterAutor(): string {
        return this.autor
    }

    obterAno(): number {
        return this.ano
    }
}

let Bruno = new Pessoa ('Bruno', '123.123.123-45')
let livro01 = new Exemplar( 8582850018, 'Memórias Póstumas de Brás Cubas', 'Joaquim Maria Machado de Assis', 1881)
let emp1 =  new Emprestimo(livro01, Bruno)

console.log("=== COMPROVANTE DE EMPRÉSTIMO ===")
console.log("\nINFORMAÇÕES DO USUÁRIO:")
console.log(`Nome: ${emp1.obterUsuario().obterNome()}`)
console.log(`CPF: ${emp1.obterUsuario().obterCpf()}`)
console.log("\nINFORMAÇÕES DO LIVRO:")
console.log(`Título: ${emp1.obterLivro().obterTitulo()}`)
console.log(`Autor: ${emp1.obterLivro().obterAutor()}`)
console.log(`Ano: ${emp1.obterLivro().obterAno()}`)
console.log(`ISBN: ${emp1.obterLivro().obterIsbn()}`)
console.log("\nDATAS:")
console.log(`Data do empréstimo: ${emp1.obterDataEmprestimo()}`)
console.log(`Data prevista de devolução: ${emp1.obterDataPrevistaDevolucao()}`)