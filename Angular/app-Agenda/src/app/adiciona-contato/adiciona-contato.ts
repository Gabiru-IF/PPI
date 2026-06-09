import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contato, TipoContato } from '../models/contato';

@Component({
  selector: 'app-adiciona-contato',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss',
})

export class AdicionaContato {
  formulario: FormGroup;
  contatos: Contato[] = [];
  tiposContato: TipoContato[] = ['amigo', 'amiga', 'família', 'trabalho', 'outro'];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      aniversario: ['', Validators.required],
      tipo: ['amigo', Validators.required],
    });
  }

  adicionarContato(): void {
    if (this.formulario.valid) {
      const { nome, telefone, email, aniversario, tipo } = this.formulario.value;
      const novoContato = new Contato(nome, telefone, email, aniversario, tipo);
      this.contatos.push(novoContato);
      this.formulario.reset({ tipo: 'amigo' });
    }
  }

  removerContato(index: number): void {
    this.contatos.splice(index, 1);
  }

  get nome() {
    return this.formulario.get('nome');
  }

  get telefone() {
    return this.formulario.get('telefone');
  }

  get email() {
    return this.formulario.get('email');
  }

  get aniversario() {
    return this.formulario.get('aniversario');
  }

  get tipo() {
    return this.formulario.get('tipo');
  }
}
