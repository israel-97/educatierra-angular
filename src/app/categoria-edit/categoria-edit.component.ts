import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {
  categoria: Categoria = new Categoria()
  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0) 
    if(environment.token == ''){
      this.router.navigate(['/categorias']) 
    }
  }
  categoriaPeloId(id:number){
    this.categoriaService.findByIdCategoria(id).subscribe((resp:Categoria)=>{
      this.categoria = resp
    })
  }
  atualizar(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp:Categoria)=>{
      this.categoria = resp
      alert('Label Atualizada ')
      this.router.navigate(['/categorias'])
    })
  }

}
