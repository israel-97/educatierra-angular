import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './components-produto/produtos/produtos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { CategariaDeleteComponent } from './categaria-delete/categaria-delete.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'produtos', component:ProdutosComponent},
    {path:'categorias', component: CategoriaComponent},
    {path: 'categoria-edit/:id',component:CategoriaEditComponent},
    {path: 'categoria-delete/:id',component:CategariaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
