import { Routes } from '@angular/router';

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
		path: '**',
		redirectTo: 'produtos'
	}
];
