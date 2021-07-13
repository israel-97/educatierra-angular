import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

import { Produto } from '../model/Produto';

import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-view-prod',
  templateUrl: './view-prod.component.html',
  styleUrls: ['./view-prod.component.css']
})
export class ViewProdComponent implements OnInit {

  produto: Produto = new Produto()
  @Input() img: string
  @Input() nome: string 
  @Input() descricao: string   
  constructor(
    private router: Router,    
    public prodService: ProdutoService,
    private categoriaService: CategoriaService,
    
  ) { }

  ngOnInit() {

    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/home'])
    }

    this.prodService.refreshToken()
    this.categoriaService.refreshToken()
  }



  // favoritarProduto() {
  //   this.produtoService.favoritarProduto(this.idUser, this.idProduto).subscribe((resposta: User) => {
  //     this.user = resposta
  //   })
  // }

}
