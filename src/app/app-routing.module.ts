import { ProdutoEditarComponent } from './editar/produto-editar/produto-editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './components-produto/produtos/produtos.component';

import { ProdutoDeleteComponent } from './editar/produto-delete/produto-delete.component';

import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { CategariaDeleteComponent } from './categaria-delete/categaria-delete.component';
import { ModalAlterarPostagemComponent } from './modal-alterar-postagem/modal-alterar-postagem.component';
import { ProdutosFavoritosComponent } from './components-produto/produtos-favoritos/produtos-favoritos.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'produtos', component:ProdutosComponent},
    {path:'categorias', component: CategoriaComponent},
    {path:'categoria-edit/:id',component:CategoriaEditComponent},
    {path:'categoria-delete/:id',component:CategariaDeleteComponent},
    {path:'produto-editar/:id', component: ProdutoEditarComponent},
    {path:'produto-delete/:id', component: ProdutoDeleteComponent},
    {path: 'modal-alterar-postagem', component: ModalAlterarPostagemComponent},
    {path: 'meusprodutos', component: ProdutosFavoritosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
