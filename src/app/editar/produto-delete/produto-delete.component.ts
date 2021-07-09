import { Produto } from './../../model/Produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {
  
  produto: Produto = new Produto()
  idProduto: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/home']) 
    }

    this.idProduto = this.route.snapshot.params['idProduto']
    this.produtoPeloId(this.idProduto)
  }

  produtoPeloId(idProduto: number) {
    this.produtoService.produtoPeloId(idProduto).subscribe((resposta: Produto) => {
      this.produto = resposta
    })
  }

  apagarProduto(){
    this.produtoService.apagarProduto(this.idProduto).subscribe(() => {
      alert('Postagem apagada com sucesso!')
      this.router.navigate(['/home'])
    })
  }

}
