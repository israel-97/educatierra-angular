import { Produto } from './../../model/Produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {
  produto: Produto = new Produto()
  idProduto: number
  idUsuario = environment.id


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private alertas: AlertasService //implementacao do ALERT personalizado.
   
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/home']) 
    }

    this.idProduto = this.route.snapshot.params['id']
    this.findByIdProduto(this.idProduto)
          
  }
    
    findByIdProduto(idProduto: number){
      this.produtoService.produtoPeloId(idProduto).subscribe((resposta: Produto) => {
        this.produto = resposta
      })
    }

    apagarProduto() {
    this.produtoService.apagarProduto(this.idProduto, this.idUsuario).subscribe(() =>{
this.alertas.showAlertDanger('Produto deletado com sucesso!')
this.router.navigate(['/meusprodutos'])

    })
        
      }
    

}
