import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../carrinho-service.service';

@Component({
  selector: 'app-exibe-carrinho',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './exibe-carrinho.component.html',
})
export class ExibeCarrinhoComponent {
  private readonly carrinho = inject(CarrinhoService);

  // computed sinal que representa a quantidade total de itens
  readonly quantidadeTotal = computed(() =>
    this.carrinho.itens().reduce((acc, i) => acc + i.quantidade, 0)
  );
}
