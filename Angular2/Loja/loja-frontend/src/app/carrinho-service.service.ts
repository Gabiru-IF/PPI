import { Injectable, signal } from '@angular/core';
import { Produto } from './models/produto';

export type Item = {
  id: number;
  produto: Produto;
  quantidade: number;
};

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  // signal que guarda os itens do carrinho
  public readonly itens = signal<Item[]>([]);

  private limitarQuantidade(item: Item, quantidade: number): number {
    return Math.max(0, Math.min(quantidade, item.produto.quantidade));
  }

  /** Adiciona um item ao carrinho. Se o produto já existir, aumenta a quantidade. */
  adicionarItem(item: Item): void {
    this.itens.update((itens) => {
      const idx = itens.findIndex((i) => i.produto.id === item.produto.id);
      if (idx >= 0) {
        const updated = [...itens];
        const novaQuantidade = this.limitarQuantidade(
          item,
          updated[idx].quantidade + item.quantidade
        );

        if (novaQuantidade === updated[idx].quantidade) {
          return itens;
        }

        updated[idx] = {
          ...updated[idx],
          quantidade: novaQuantidade,
        };
        return updated;
      }

      const quantidade = this.limitarQuantidade(item, item.quantidade);
      if (quantidade <= 0) {
        return itens;
      }

      return [...itens, { ...item, quantidade }];
    });
  }

  /** Aumenta a quantidade de um produto no carrinho. */
  aumentarQuantidade(produtoId: number, amount = 1): void {
    if (amount <= 0) return;
    this.itens.update((itens) =>
      itens.map((i) => {
        if (i.produto.id !== produtoId) {
          return i;
        }

        const quantidade = this.limitarQuantidade(i, i.quantidade + amount);
        return quantidade === i.quantidade ? i : { ...i, quantidade };
      })
    );
  }

  /** Diminui a quantidade de um produto; remove se a quantidade ficar <= 0. */
  diminuirQuantidade(produtoId: number, amount = 1): void {
    if (amount <= 0) return;
    this.itens.update((itens) => {
      const updated = itens
        .map((i) =>
          i.produto.id === produtoId ? { ...i, quantidade: i.quantidade - amount } : i
        )
        .filter((i) => i.quantidade > 0);
      return updated;
    });
  }

  /** Remove completamente um item do carrinho. */
  removerItem(produtoId: number): void {
    this.itens.update((itens) => itens.filter((i) => i.produto.id !== produtoId));
  }

  /** Retorna o total (soma de preco * quantidade). */
  obterTotal(): number {
    return this.itens()
      .map((i) => i.produto.preco * i.quantidade)
      .reduce((soma, val) => soma + val, 0);
  }
}
