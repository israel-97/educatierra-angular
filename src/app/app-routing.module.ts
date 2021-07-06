import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaDeleteComponent } from './categoria-delete/categoria-delete.component';
import { HomeComponent } from './home/home.component';
import { PaginaAdministradorComponent } from './pagina-administrador/pagina-administrador.component';

import { ProdutosComponent } from './produtos/produtos.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'produtos', component:ProdutosComponent},
    {path:'tema', component: TemaComponent},
    {path:'admin', component: PaginaAdministradorComponent},
    {path: 'categoria-editar/:id', component: CategoriaDeleteComponent},
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
