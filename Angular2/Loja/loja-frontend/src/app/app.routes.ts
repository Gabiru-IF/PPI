import { Routes } from '@angular/router';

import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosComponent } from './produtos/produtos.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'produtos'
	},
	{
		path: 'produtos',
		component: ProdutosComponent
	},
	{
		path: 'carrinho',
		component: CarrinhoComponent
	},
	{
		path: '**',
		redirectTo: 'produtos'
	}
];
