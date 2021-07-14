import { Produto } from './../../model/Produto';
import { environment } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { User } from 'src/app/model/User';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { AuthService } from 'src/app/service/auth.service';
import { AlertasService } from 'src/app/service/alertas.service';


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
  idProduto: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private authService: AuthService,
    private alertas: AlertasService //implementacao do ALERT personalizado.
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/home'])
    }

    let id = this.route.snapshot.params['id']
    this.produtoService.refreshToken()
    this.categoriaService.refreshToken()
    this.todasCategorias()
    this.todosProdutos()
    this.findByIdUser()
    this.favoritarProduto()
    this.findByIdCategoria()
    this.findByIdProduto(this.idProduto)
    this.atualizar()
  }
  findByIdProduto(idProduto: number) {
    this.produtoService.produtoPeloId(idProduto).subscribe((resposta: Produto) => {
      this.produto = resposta
    })
  }

  todasCategorias() {
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

  todosProdutos() {
    this.produtoService.todosProdutos().subscribe((resposta: Produto[]) => {
      this.listaProdutos = resposta
    })
  }

  findByIdUser() {
    this.produtoService.getByIdUser(this.idUser).subscribe((resposta: User) => {
      this.user = resposta
    })
  }

  cadastrarProduto() {
    this.produtoService.cadastrarProduto(this.idUser, this.idCategoria, this.produto).subscribe((resposta: Produto) => {
      this.produto = resposta
      this.alertas.showAlertSuccess('Produto cadastrado com sucesso!')
      this.router.navigate(['/home'])
      setTimeout(() => {
        this.router.navigate(['/meusprodutos'])
      }, 5);
      this.produto = new Produto()
      this.todosProdutos()
      
    })
  }

  favoritarProduto() {
    // this.produtoService.favoritarProduto(this.idUser, this.idProduto).subscribe((resposta: Produto) => {
    //   this.user = resposta
    // })
  }

  selectUpdate(produto: Produto) {
    this.produto = produto
  }

  cancelUpdate() {
    this.produto = new Produto()
    this.router.navigate(['/home'])
    setTimeout(() => {
      this.router.navigate(['/meusprodutos'])
    }, 10);
  }

  atualizar() {
    this.produtoService.alterarProduto(this.produto.id, this.idCategoria, this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      this.alertas.showAlertSuccess('Produto atualizado com sucesso!')
      this.router.navigate(['/home'])
      setTimeout(() => {
        this.router.navigate(['/meusprodutos'])
      }, 10);
    })
  }

  apagarProduto(produto: Produto) {
    this.produtoService.apagarProduto(this.idUser, produto.id).subscribe(() => {
      this.alertas.showAlertDanger('Produto deletado com sucesso!')
      this.router.navigate(['/home'])
      setTimeout(() => {
        this.router.navigate(['/meusprodutos'])
      }, 10);
    })
  }

}