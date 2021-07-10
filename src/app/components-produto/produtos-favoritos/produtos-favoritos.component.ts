import { Produto } from './../../model/Produto';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { User } from 'src/app/model/User';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-produtos-favoritos',
  templateUrl: './produtos-favoritos.component.html',
  styleUrls: ['./produtos-favoritos.component.css']
})
export class ProdutosFavoritosComponent implements OnInit {

  produto: Produto = new Produto()
  categoria: Categoria = new Categoria()
  listaProdutos: Produto[]

  listaCategorias: Categoria[] 
  idCategoria: number
  user: User = new User()
  idUser = environment.id
  idProduto = environment.id

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/home'])  
    }
    
    this.produtoService.refreshToken()
    this.categoriaService.refreshToken()
    this.todasCategorias()
    this.todosProdutos()
    this.findByIdUser()  
    this.favoritarProduto()
    
  }

  todasCategorias(){
    this.categoriaService.todasCategorias().subscribe((resposta: Categoria[]) => {
    this.listaCategorias = resposta
    console.log(this.listaCategorias)
  })
}

  findByIdCategoria() {
    this.categoriaService.findByIdCategoria(this.idCategoria).subscribe((resposta: Categoria) => {
      this.categoria = resposta
    })
  }

  todosProdutos(){
    this.produtoService.todosProdutos().subscribe((resposta: Produto[]) => {
      this.listaProdutos = resposta
    })
  }

findByIdUser(){
this.produtoService.getByIdUser(this.idUser).subscribe((resposta: User) =>{
  this.user = resposta
})
}

  cadastrarProduto() {   
    this.produtoService.cadastrarProduto(this.idUser, this.idCategoria, this.produto).subscribe((resposta: Produto) => {
      this.produto = resposta
      alert('Produto cadastrado com sucesso!')
      this.produto = new Produto()

      this.todosProdutos()
    })
  }

  favoritarProduto(){
    this.produtoService.favoritarProduto(this.idUser, this.idProduto).subscribe((resposta: User) => {
      this.user = resposta
    })
  }

}