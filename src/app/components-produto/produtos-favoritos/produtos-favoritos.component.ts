import { Produto } from './../../model/Produto';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { User } from 'src/app/model/User';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';

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

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/home']) 
    }
    this.todasCategorias()
    this.todosProdutos()
  }

  todasCategorias(){
    this.categoriaService.todasCategorias().subscribe((resposta: Categoria []) => {
    this.listaCategorias = resposta
  })
}

  findByIdCategoria() {
    this.categoriaService.categoriaPeloId(this.idCategoria).subscribe((resposta: Categoria) => {
      this.categoria = resposta
    })
  }

  todosProdutos(){
    this.produtoService.todosProdutos().subscribe((resposta: Produto[]) => {
      this.listaProdutos = resposta
    })
  }

  cadastrarProduto() {   
    this.produtoService.cadastrarProduto(this.idUser, this.idCategoria, this.produto).subscribe((resposta: Produto) => {
      this.produto = resposta
      alert('Produto cadastrado com sucesso!')
      this.produto = new Produto()
    })

  }

}