import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeputadoResponse } from './deputado';
import { Observable } from 'rxjs/internal/Observable';

@Service()
export class DeputadoService {
    readonly API = 'https://dadosabertos.camara.leg.br/api/v2';
    readonly #http = inject(HttpClient); 

    obterTodos() : Observable<DeputadoResponse> {
        return this.#http.get<DeputadoResponse>(`${this.API}/deputados?ordem=ASC&ordenarPor=nome`);
    }

    obterDeputadoPorNome(nome: string) : Observable<DeputadoResponse> {
        return this.#http.get<DeputadoResponse>(`${this.API}/deputados?ordem=ASC&ordenarPor=nome&nome=${nome}`);
    }
}
