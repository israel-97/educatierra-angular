import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-search-produto',
  templateUrl: './search-produto.component.html',
  styleUrls: ['./search-produto.component.css']
})
export class SearchProdutoComponent implements OnInit {
  
  tituloPost: string
  listaProdutos: Produto[]
  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
  }
  todosProdutos() { //Perguntar
    this.produtoService.todosProdutos().subscribe((resposta: Produto[]) => {
      this.listaProdutos = resposta
    })
  }
  findByTituloPostagem(){
    if (this.tituloPost == '') {
      this.todosProdutos()
    } else {
      this.produtoService.getByMateriaPostagem(this.tituloPost).subscribe((resp: Produto[]) => {
        this.listaProdutos = resp
      })
    }
  }

}
