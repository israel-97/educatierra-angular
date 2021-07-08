import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categaria-delete',
  templateUrl: './categaria-delete.component.html',
  styleUrls: ['./categaria-delete.component.css']
})
export class CategariaDeleteComponent implements OnInit {
  categoria: Categoria = new Categoria()
  idCategoria:number
  constructor(
    private router: Router,
    private categoriaService:CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0) 
    if(environment.token == ''){
      this.router.navigate(['/categorias']) //ve se ta certo o home mano 
    }
    this.idCategoria = this.route.snapshot.params['id']
    this.categoriaPeloId(this.idCategoria)
    
  }

  categoriaPeloId(id:number){
    this.categoriaService.categoriaPeloId(id).subscribe((resp:Categoria)=>{
      this.categoria = resp
    })
  }

  apagar(){
    this.categoriaService.deleteCategoria(this.idCategoria).subscribe(()=>{
      alert('Deletado')
      this.router.navigate(['/categorias'])
    })
  }

}
