import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  
  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    window.scroll(0,0) 
    if(environment.token == ''){
      this.router.navigate(['/home']) 
    }
  } 

  todasCategorias(){
    this.categoriaService.todasCategorias().subscribe((resposta: Categoria []) => {
    this.listaCategorias = resposta
  })
}
cadastrarCategoria(){
  this.categoriaService.inserirCategoria(this.categoria).subscribe((resposta: Categoria) => {
    this.categoria = resposta
    alert('Categoria cadastrada com sucesso!')
    this.todasCategorias()
    this.categoria= new Categoria()
  })
}

}
