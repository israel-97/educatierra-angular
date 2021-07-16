import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
   
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization',environment.token)
    }
  }

  todasCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://educatierra-g4.herokuapp.com/categorias', this.token)
  }

  findByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://educatierra-g4.herokuapp.com/${id}`, this.token)
  }

  inserirCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('https://educatierra-g4.herokuapp.com/categorias', categoria, this.token)
  }

  putCategoria(categoria:Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://educatierra-g4.herokuapp.com/categorias', categoria,this.token)
  }
  
  deleteCategoria(id:number ){ 
    return this.http.delete<Categoria>(`https://educatierra-g4.herokuapp.com/categorias/${id}`,this.token)
  }
}

