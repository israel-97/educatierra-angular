import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ProdutosComponent } from './produtos/produtos.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'produtos', component:ProdutosComponent},
    {path:'tema', component: TemaComponent}
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
