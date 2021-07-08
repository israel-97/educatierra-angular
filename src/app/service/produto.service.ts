import { Produto } from 'src/app/model/Produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private htpp: HttpClient) { }

token = {
  headers: new HttpHeaders().set('Authorization', environment.token)
  }
refreshToken(){
  this.token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
}

todosProdutos(): Observable<Produto[]>{
  return this.htpp.get<Produto[]>('http://localhost:8083/produtos', this.token)
}

cadastrarProduto(idUsuario: number, idCategoria: number, produto: Produto): Observable<Produto> {
  return this.htpp.post<Produto>(`http://localhost:8083/usuarios/cadastro-produto/${idUsuario}/${idCategoria}`, produto, this.token)
}

alterarProduto(idUsuario: number, idCategoria: number, produto: Produto): Observable<Produto>{
  return this.htpp.post<Produto>(`http://localhost:8083/usuarios/altera-produto/${idUsuario}/${idCategoria}`, produto, this.token)
}

produtoPeloId(idProduto: number): Observable<Produto>{
  return this.htpp.get<Produto>(`http://localhost:8083/produtos/${idProduto}`, this.token)
}

apagarProduto(idProduto: number, idUsuario: number){
  return this.htpp.delete(`http://localhost:8083/usuarios/exclusao-produto/${idUsuario}/${idProduto}`,this.token)
}

}
