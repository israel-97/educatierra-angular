import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModalLoginCadastroComponent } from './modal-login-cadastro/modal-login-cadastro.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'produtos', component:ProdutosComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
