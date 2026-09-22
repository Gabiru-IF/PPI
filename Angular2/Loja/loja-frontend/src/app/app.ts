import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ExibeCarrinhoComponent } from './exibe-carrinho/exibe-carrinho.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ExibeCarrinhoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
