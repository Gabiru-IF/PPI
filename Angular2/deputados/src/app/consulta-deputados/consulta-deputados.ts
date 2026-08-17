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
    const nome = this.filtroForm.get('nome')?.value?.trim() ?? '';

    if (nome === '') {
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

    this.#deputadoService.obterDeputadoPorNome(nome).subscribe(res => {
      this.deputados.set(res.dados);
    });
  }
}