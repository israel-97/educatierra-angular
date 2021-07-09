
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/model/Produto';
import { Categoria } from 'src/app/model/Categoria';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  produto: Produto = new Produto()
  categoria: Categoria = new Categoria()
  idProduto: number
  idCategoria: number
  listaCategoria: Categoria[]
  idUsuario = environment.id

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/home']) 
    }

    let id = this.route.snapshot.params['id']
    this.categoriaService.refreshToken()
    this.produtoService.refreshToken()
    this.findByIdProduto(id)
    this.findByIdCategoria()
    this.todasCategorias()
    
  
  }

    
    findByIdProduto(idProduto: number){
      this.produtoService.produtoPeloId(idProduto).subscribe((resposta: Produto) => {
        this.produto = resposta
      })
    }

    findByIdCategoria() {
      this.categoriaService.findByIdCategoria(this.idCategoria).subscribe((resposta: Categoria) => {
        this.categoria = resposta
      })
    }

    todasCategorias(){
      this.categoriaService.todasCategorias().subscribe((resposta: Categoria[]) => {
      this.listaCategoria = resposta
      console.log(this.listaCategoria)
    })
  }

    atualizar() {
      this.produtoService.alterarProduto(this.idUsuario, this.idCategoria, this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        alert ('Produto atualizado com sucesso!')
        this.router.navigate(['/home'])
        
      })
    }
   
    }

  

  
