import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar-contato',
  templateUrl: './entrar-contato.component.html',
  styleUrls: ['./entrar-contato.component.css']
})
export class EntrarContatoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    }); */

    this.formulario = this.FormBuilder.group({
      nome:[null],
      email:[null]
    })
  }

}

