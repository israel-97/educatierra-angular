import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarroselHomeComponent } from './carrosel-home/carrosel-home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RodapeComponent } from './rodape/rodape.component';

import { MenuComponent } from './menu/menu.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DevsHomeComponent } from './devs-home/devs-home.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProdComponent } from './view-prod/view-prod.component';
import { EntrarContatoComponent } from './entrar-contato/entrar-contato.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { RankingComponent } from './ranking/ranking.component';

import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { CardsProdutoComponent } from './cards-produto/cards-produto.component';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component'
import { MenuProdutosComponent } from './menu-produtos/menu-produtos.component';
import { ProdutosFavoritosComponent } from './produtos-favoritos/produtos-favoritos.component';
import { PaginaAdministradorComponent } from './pagina-administrador/pagina-administrador.component';
import { CategoriaComponent} from './categoria/categoria.component'
import { CategoriaDeleteComponent } from './categoria-delete/categoria-delete.component'
import { Categoria } from './model/Categoria';


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
    TemaComponent,
    ProdutosFavoritosComponent,
    PaginaAdministradorComponent,
    Categoria,
    CategoriaDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
