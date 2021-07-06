import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0) 
    if(environment.token == ''){
      this.router.navigate(['/home']) //ve se ta certo o home mano 
    }
  

  } 







}
