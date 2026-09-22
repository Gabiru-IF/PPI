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
  protected readonly produtoSelecionado = signal<Produto | null>(null);
  protected readonly quantidadeSelecionada = signal(1);
  protected readonly mensagemQuantidade = signal('');

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
    this.produtoSelecionado.set(produto);
    this.quantidadeSelecionada.set(1);
    this.mensagemQuantidade.set('');
  }

  protected fecharPainelQuantidade(): void {
    this.produtoSelecionado.set(null);
    this.quantidadeSelecionada.set(1);
    this.mensagemQuantidade.set('');
  }

  protected quantidadeNoCarrinho(produtoId: number): number {
    return this.carrinho.itens().find((item) => item.produto.id === produtoId)?.quantidade ?? 0;
  }

  protected quantidadeDisponivel(produto: Produto): number {
    return Math.max(0, produto.quantidade - this.quantidadeNoCarrinho(produto.id));
  }

  protected quantidadeMaximaSelecionada(): number {
    const produto = this.produtoSelecionado();

    if (!produto) {
      return 0;
    }

    return this.quantidadeDisponivel(produto);
  }

  protected aoDigitarQuantidade(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    const valor = Number.parseInt(elemento.value, 10);

    if (!Number.isInteger(valor) || valor <= 0) {
      this.mensagemQuantidade.set('Digite uma quantidade válida.');
      this.quantidadeSelecionada.set(1);
      return;
    }

    this.quantidadeSelecionada.set(valor);

    const maximo = this.quantidadeMaximaSelecionada();

    if (valor > maximo) {
      this.mensagemQuantidade.set(`Só existem ${maximo} unidades disponíveis para este produto.`);
      return;
    }

    this.mensagemQuantidade.set('');
  }

  protected diminuirQuantidadeSelecionada(): void {
    const valorAtual = this.quantidadeSelecionada();

    if (valorAtual <= 1) {
      this.mensagemQuantidade.set('A quantidade mínima é 1.');
      return;
    }

    this.quantidadeSelecionada.set(valorAtual - 1);
    this.mensagemQuantidade.set('');
  }

  protected aumentarQuantidadeSelecionada(): void {
    const valorAtual = this.quantidadeSelecionada();
    const maximo = this.quantidadeMaximaSelecionada();

    if (valorAtual >= maximo) {
      this.mensagemQuantidade.set(`Só existem ${maximo} unidades disponíveis para este produto.`);
      return;
    }

    this.quantidadeSelecionada.set(valorAtual + 1);
    this.mensagemQuantidade.set('');
  }

  protected confirmarAdicao(): void {
    const produto = this.produtoSelecionado();

    if (!produto) {
      return;
    }

    const maximo = this.quantidadeMaximaSelecionada();
    const quantidade = this.quantidadeSelecionada();

    if (quantidade <= 0) {
      this.mensagemQuantidade.set('Digite uma quantidade válida.');
      return;
    }

    if (maximo <= 0) {
      this.mensagemQuantidade.set(`Não há mais unidades disponíveis de ${produto.nome}.`);
      return;
    }

    if (quantidade > maximo) {
      this.mensagemQuantidade.set(`Só existem ${maximo} unidades disponíveis para este produto.`);
      return;
    }

    this.carrinho.adicionarItem({
      id: produto.id,
      produto,
      quantidade
    });

    this.fecharPainelQuantidade();
  }
}