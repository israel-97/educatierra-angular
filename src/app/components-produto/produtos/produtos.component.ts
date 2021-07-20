import { Component, OnInit, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { User } from 'src/app/model/User';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../../model/Produto';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  pagina: number = 1 ;
  totalProdutos: any

  produto: Produto = new Produto()
  categoria: Categoria = new Categoria()
  listaProdutos: Produto[]
  listaCategorias: Categoria[]
  idCategoria: number
  user: User = new User()
  idUser = environment.id
  idProduto: number

  img: string
  nome: string
  descricao: string
  tituloPost: string

  favoritos: number = 0


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alertas: AlertasService 
  ) { }

  ngOnInit() {
    //this.loadAllProdutos();
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/home'])
    }

    let id = this.route.snapshot.params['id']
    this.produtoService.refreshToken()
    this.categoriaService.refreshToken()
    this.todasCategorias()
    this.todosProdutos()

  }

  /*loadAllProdutos(){
    this.produtoService.todosProdutos().subscribe( data => this.produtos = data,
      error => console.log('Erro serviço ' + error));
  }*/

  todasCategorias() {
    this.categoriaService.todasCategorias().subscribe((resposta: Categoria[]) => {
      this.listaCategorias = resposta
      console.log(this.listaCategorias)
    })
  }

  todosProdutos() {
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
      this.router.navigate(['/home'])
    setTimeout(() => {
      this.router.navigate(['/meusprodutos'])
    }, 10);
    })
  }

  favoritarProduto(id: number) {
    this.produtoService.favoritarProduto(this.idUser, id).subscribe((resposta: User) => {
     this.alertas.showAlertSuccess('Produto favoritado com sucesso!') 
    })
  }

  selecionarProduto(id: number) {
    this.produtoService.produtoPeloId(id).subscribe((resp: Produto) => {
      this.img = resp.linkImagem
      this.nome = resp.nome
      this.descricao = resp.descricao
    })
  }

  logado(){
    let logado: boolean = false
    if(environment.token != ''){
      logado =true
    }
    return logado
  }

  findByTituloPostagem(){
    console.log(this.tituloPost)
    if (this.tituloPost == '') {
      this.todosProdutos()
    } else {
      this.produtoService.getByMateriaPostagem(this.tituloPost).subscribe((resp: Produto[]) => {
        
        this.listaProdutos = resp
        console.log(this.listaProdutos)
      })
    }
  }

  quantidadeFavoritos(){
    this.favoritos = this.favoritos + 1
  }
  
}
