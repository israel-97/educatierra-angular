import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaDeleteComponent } from './categoria-delete/categoria-delete.component';
import { HomeComponent } from './home/home.component';
import { Categoria } from './model/Categoria';
import { PaginaAdministradorComponent } from './pagina-administrador/pagina-administrador.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'produtos', component:ProdutosComponent},
    {path:'admin', component: PaginaAdministradorComponent},
    {path: 'categoria-editar/:id', component: CategoriaDeleteComponent},
    {path: 'categoria', component: Categoria},
    {path: 'categoria-delete/:id',component:CategoriaDeleteComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
