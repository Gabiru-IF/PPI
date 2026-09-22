import { Component, OnInit, inject, signal } from '@angular/core';

import { Produto } from '../models/produto';
import { ProdutoService } from '../produto.service';
import { CarrinhoService } from '../carrinho-service.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
  imports: []
})
export class ProdutosComponent implements OnInit {
  private readonly produtoService = inject(ProdutoService);
  private readonly carrinho = inject(CarrinhoService);

  protected readonly produtos = signal<Produto[]>([]);
  protected readonly carregando = signal(true);
  protected readonly erro = signal('');

  ngOnInit(): void {
    this.produtoService.listarTodos().subscribe({
      next: (produtos) => {
        this.produtos.set(produtos);
        this.carregando.set(false);
      },
      error: () => {
        this.erro.set('Não foi possível carregar os produtos.');
        this.carregando.set(false);
      }
    });
  }

  protected formatarPreco(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  }

  protected adicionarAoCarrinho(produto: Produto): void {
    this.carrinho.adicionarItem({
      id: produto.id,
      produto,
      quantidade: 1
    });
  }
}