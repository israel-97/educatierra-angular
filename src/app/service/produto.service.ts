import { Produto } from 'src/app/model/Produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  todosProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('https://educatierra-g4.herokuapp.com/produtos', this.token)
  }

  cadastrarProduto(idUsuario: number, idCategoria: number, produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`https://educatierra-g4.herokuapp.com/usuarios/cadastro-produto/${idUsuario}/${idCategoria}`, produto, this.token)
  }


  alterarProduto(idProduto: number, idCategoria: number, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`https://educatierra-g4.herokuapp.com/usuarios/altera-produto/${idProduto}/${idCategoria}`, produto, this.token)
  }

  produtoPeloId(idProduto: number): Observable<Produto> {
    return this.http.get<Produto>(`https://educatierra-g4.herokuapp.com/produtos/${idProduto}`, this.token)
  }

  apagarProduto(id: number) {
    return this.http.delete(`https://educatierra-g4.herokuapp.com/produtos/exclusao-produto/${id}`, this.token)
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`https://educatierra-g4.herokuapp.com/usuarios/${id}`, this.token)
  }

  favoritarProduto(idUsuario: number, idProduto: number): Observable<User> {
    return this.http.put<User>(`https://educatierra-g4.herokuapp.com/usuarios/favoritos/usuario/${idUsuario}/produto/${idProduto}`, null, this.token)
  }

  produtoSelecionado(produto?: Produto) {
    console.log(produto)
    return produto
  }

  getByMateriaPostagem(titulo: string ): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://educatierra-g4.herokuapp.com/produtos/titulo/${titulo}`, this.token)
  }

}
