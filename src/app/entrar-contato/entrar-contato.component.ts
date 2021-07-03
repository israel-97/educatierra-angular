import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entrar-contato',
  templateUrl: './entrar-contato.component.html',
  styleUrls: ['./entrar-contato.component.css']
})
export class EntrarContatoComponent implements OnInit {
  public formulario: FormGroup;


   constructor(
    private FormBuilder: FormBuilder,
   ) { }

  ngOnInit() {

    this.formulario = this.FormBuilder.group({
      nome: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(100) ]],
      email: [null, [Validators.required,Validators.email]]
    })
  }

}

