import { ProdutoEditarComponent } from './editar/produto-editar/produto-editar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './components-produto/produtos/produtos.component';
import { ProdutoDeleteComponent } from './editar/produto-delete/produto-delete.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'produtos', component:ProdutosComponent},
    {path: 'produto-editar/:id', component: ProdutoEditarComponent},
    {path:'produto-delete/:id', component: ProdutoDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
