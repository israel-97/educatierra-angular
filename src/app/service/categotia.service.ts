import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
   
   
  refreshToken(){
    this.token ={headers: new HttpHeaders().set('Authorization', environment.token)}
  }

  
  















  putCategoria(Categoria:Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('http://localhost:8083/tema', Categoria,this.token)
  }
  deleteCategoria(id:number ){ 
    return this.http.delete<Categoria>(`http://localhost:8083/tema/${id}`,this.token)
  }
   
}

