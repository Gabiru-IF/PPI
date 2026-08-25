import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto';
import {CommonModule} from "@angular/common";

@Component({
  imports: [CommonModule],
  selector: 'app-lista-produtos',
  standalone: true,
  styleUrl: './lista-produtos.component.scss',
  templateUrl: './lista-produtos.component.html'
})

export class ListaProdutos {}
