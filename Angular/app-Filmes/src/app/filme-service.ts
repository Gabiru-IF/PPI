import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BuscaFilmesResposta } from './consulta-filme/filme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  readonly API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=79e7ae47`
  #http = inject(HttpClient)

  obterFilmes(titulo: string): Observable<BuscaFilmesResposta> {
    return this.#http.get<BuscaFilmesResposta>(`${this.API_URL}&s=${encodeURIComponent(titulo)}`)
  }
}
