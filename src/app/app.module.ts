import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarroselHomeComponent } from './components-home/carrosel-home/carrosel-home.component';
import { ProdutosComponent } from './components-produto/produtos/produtos.component';
import { RodapeComponent } from './components-home/rodape/rodape.component';

import { MenuComponent } from './components-home/menu/menu.component';
import { SobreNosComponent } from './components-home/sobre-nos/sobre-nos.component';
import { DevsHomeComponent } from './components-home/devs-home/devs-home.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProdComponent } from './view-prod/view-prod.component';
import { EntrarContatoComponent } from './components-home/entrar-contato/entrar-contato.component';
import { ApresentacaoComponent } from './components-home/apresentacao/apresentacao.component';
import { RankingComponent } from './components-home/ranking/ranking.component';
import { EditPerfilComponent } from './components-produto/edit-perfil/edit-perfil.component';
import { CardsProdutoComponent } from './components-produto/cards-produto/cards-produto.component';
import { ListaCategoriaComponent } from './components-produto/lista-categoria/lista-categoria.component';
import { MenuProdutosComponent } from './components-produto/menu-produtos/menu-produtos.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutosFavoritosComponent } from './components-produto/produtos-favoritos/produtos-favoritos.component';

import { CategoriaComponent } from './categoria/categoria.component';
import { CategariaDeleteComponent } from './categaria-delete/categaria-delete.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';

import { ProdutoEditarComponent } from './editar/produto-editar/produto-editar.component';




@NgModule({
  declarations: [
    AppComponent,
    CarroselHomeComponent,
    ProdutosComponent,
    RodapeComponent,
    MenuComponent,
    SobreNosComponent,
    DevsHomeComponent,   
    HomeComponent,
    ViewProdComponent,
    EntrarContatoComponent,
    ApresentacaoComponent,
    RankingComponent,
    EditPerfilComponent,
    CardsProdutoComponent,
    ListaCategoriaComponent,
    MenuProdutosComponent,
    ProdutosFavoritosComponent,

    CategoriaComponent,
    CategariaDeleteComponent,
    CategoriaEditComponent,  

    ProdutoEditarComponent,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    //NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
