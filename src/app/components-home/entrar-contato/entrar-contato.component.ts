import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar-contato',
  templateUrl: './entrar-contato.component.html',
  styleUrls: ['./entrar-contato.component.css']
})
export class EntrarContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.validacaoNome(),
    this.validacaoEmail(),
    this.validacaoMensagem()
    /* this.enviar() */
  }

  validacaoNome() {
    let nome = (<HTMLSelectElement>document.querySelector('#nome')!)
    
    nome.addEventListener('keyup', () => {
      if(nome.value.length < 3) {
        nome.setAttribute('style','border-color:red !important;')
      } else {
        nome.setAttribute('style','border-color:green !important; border-width: 4px;')
      }
    })
  }

  validacaoEmail() {
    let txtEmail = (<HTMLSelectElement>document.querySelector('#txtEmail')!)

    txtEmail.addEventListener('keyup', () => {
      if(txtEmail.value.indexOf('@') == -1 || txtEmail.value.indexOf('.') == -1) {
        txtEmail.setAttribute('style','border-color:red !important;')
      } else {
        txtEmail.setAttribute('style','border-color:green !important;')
      }
    })
  }

  validacaoMensagem(){
    let txtMensagem = (<HTMLSelectElement>document.querySelector('#txtMensagem')!)

    txtMensagem.addEventListener('onkeyup', () => {
      if (txtMensagem.value.length >= 100) {
      txtMensagem.setAttribute('style', 'border-color:red !important;')
      } else {
        txtMensagem.setAttribute('style', 'border-color:green !important; display:none;')
      }
    }) 

     
  } 

  /* enviar(){
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
      alert ('Formulário enviado com sucesso!')
    } else {
      alert ('Preencha o formulário corretamente antes de enviar')
    }
  } */ //desabilitar botão enquanto todos os campos não estiverem validados
  

}
