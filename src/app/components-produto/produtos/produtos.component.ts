import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/Produto';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  /*produtos: Produto[] = [];
  contador: number = 5;
  paginaAtual: number = 1 ;*/

  constructor(
    //private produtoService:ProdutoService
  ) { }

  ngOnInit() {
    //this.loadAllProdutos();
  }

  /*loadAllProdutos(){
    this.produtoService.todosProdutos().subscribe( data => this.produtos = data,
      error => console.log('Erro serviço ' + error));
  }*/


}
