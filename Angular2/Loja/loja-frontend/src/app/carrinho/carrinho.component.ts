import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CarrinhoService } from '../carrinho-service.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {
  private readonly carrinho = inject(CarrinhoService);

  readonly itens = this.carrinho.itens;

  readonly quantidadeTotal = computed(() =>
    this.carrinho.itens().reduce((acc, item) => acc + item.quantidade, 0)
  );

  readonly total = computed(() => this.carrinho.obterTotal());

  protected formatarPreco(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

  protected aumentar(produtoId: number): void {
    this.carrinho.aumentarQuantidade(produtoId);
  }

  protected diminuir(produtoId: number): void {
    this.carrinho.diminuirQuantidade(produtoId);
  }

  protected remover(produtoId: number): void {
    this.carrinho.removerItem(produtoId);
  }
}