
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { User } from 'src/app/model/User';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-modal-alterar-postagem',
  templateUrl: './modal-alterar-postagem.component.html',
  styleUrls: ['./modal-alterar-postagem.component.css']
})
export class ModalAlterarPostagemComponent implements OnInit {

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
    private categoriaService: CategoriaService,
    private alertas: AlertasService //implementacao do ALERT personalizado.
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/home']) 
    }
    this.produtoService.refreshToken()
    this.categoriaService.refreshToken()
    this.todasCategorias()
    this.todosProdutos()
    
   
    
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


  cadastrarProduto() {   
    this.produtoService.cadastrarProduto(this.idUser, this.idCategoria, this.produto).subscribe((resposta: Produto) => {
      this.produto = resposta
      this.alertas.showAlertSuccess('Produto cadastrado com sucesso!')
      this.produto = new Produto()

      this.todosProdutos()
    })

  }
  

}