export type Filme = {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}

export type BuscaFilmesResposta = {
    Search?: Filme[]
    totalResults?: string
    Response: 'True' | 'False'
    Error?: string
}