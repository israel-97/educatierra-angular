import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  /*constructor(private htpp: HttpClient) { }

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
}*/

}
