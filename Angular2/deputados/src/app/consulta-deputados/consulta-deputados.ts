import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../deputado';

@Component({
  selector: 'app-consulta-deputados',
  imports: [],
  templateUrl: './consulta-deputados.html',
  styleUrl: './consulta-deputados.scss',
})
export class ConsultaDeputados {

  readonly #deputadoService = inject(DeputadoService);
  protected deputados = signal<Deputado[]>([]);

  constructor() {
  
    this.#deputadoService.obterTodos().subscribe(res => {
      this.deputados.set(res.dados);
    
    });
  }

  filtrarDeputados(nome: string) {
    if (nome.trim() === '') {
      this.#deputadoService.obterTodos().subscribe(res => {
        this.deputados.set(res.dados);
      });
    } else {
      this.#deputadoService.obterDeputadoPorNome(nome).subscribe(res => {
        this.deputados.set(res.dados);
      });
    }
  }
}