import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DeputadoService } from '../deputado-service';
import { Deputado } from '../deputado';

@Component({
  selector: 'app-consulta-deputados',
  imports: [ReactiveFormsModule],
  templateUrl: './consulta-deputados.html',
  styleUrl: './consulta-deputados.scss',
})
export class ConsultaDeputados {

  readonly #deputadoService = inject(DeputadoService);
  protected deputados = signal<Deputado[]>([]);

  protected readonly filtroForm = new FormGroup({
    nome: new FormControl('', {
      nonNullable: true,
      validators: [Validators.minLength(2)],
    }),
  });

  constructor() {
    this.#deputadoService.obterTodos().subscribe(res => {
      this.deputados.set(res.dados);
    });
  }

  filtrarDeputados() {
    const termo = this.filtroForm.get('nome')?.value?.trim() ?? '';

    if (termo === '') {
      this.#deputadoService.obterTodos().subscribe(res => {
        this.deputados.set(res.dados);
      });
      this.filtroForm.markAsUntouched();
      return;
    }

    if (this.filtroForm.invalid) {
      alert('Digite pelo menos 2 caracteres para buscar.');
      this.filtroForm.markAllAsTouched();
      return;
    }

    this.#deputadoService.obterTodos().subscribe(res => {
      const filtro = termo.toLowerCase();

      this.deputados.set(
        res.dados.filter(dep => {
          const nome = dep.nome?.toLowerCase() ?? '';
          const partido = dep.siglaPartido?.toLowerCase() ?? '';
          const uf = dep.siglaUf?.toLowerCase() ?? '';

          return nome.includes(filtro) || partido.includes(filtro) || uf.includes(filtro);
        })
      );
    });
  }
}