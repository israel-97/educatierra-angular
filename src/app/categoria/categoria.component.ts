import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  listaCategoria: Categoria[]
  constructor(
    private router: Router,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    if (environment.token == '')
      //alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/categorias'])
    this.categoriaService.refreshToken()
    this.findAllCategorias()
  }
  findAllCategorias() {
    this.categoriaService.todasCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
    })
  }
  create(){
    this.categoriaService.inserirCategoria(this.categoria).subscribe((resp:Categoria)=>{
      this.categoria= resp
      alert('Label criada!')
      this.findAllCategorias()
      this.categoria = new Categoria()
    })
  }
  
}

