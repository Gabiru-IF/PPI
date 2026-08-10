export type Deputado = {
    id : number;
    url : string;
    nome : string;
    siglaPartido : string;
    siglaUf : string;
    idLegislatura : 67;
    urlFoto : string;
    email : string;
    
}

export type DeputadoResponse = {
    dados : Deputado[];
    
}