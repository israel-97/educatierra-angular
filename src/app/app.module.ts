import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarroselHomeComponent } from './carrosel-home/carrosel-home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RodapeComponent } from './rodape/rodape.component';

import { MenuComponent } from './menu/menu.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DevsHomeComponent } from './devs-home/devs-home.component';
import { PesquisaProdutoComponent } from './pesquisa-produto/pesquisa-produto.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    CarroselHomeComponent,
    ProdutosComponent,
    RodapeComponent,
    MenuComponent,
    SobreNosComponent,
    DevsHomeComponent,
    PesquisaProdutoComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
