import { Component, OnInit } from '@angular/core';

import { UsuarioLogin } from '../../model/UsuarioLogin';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { environment } from 'src/environments/environment.prod';
import { User } from '../../model/User';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.css']
})
export class ApresentacaoComponent implements OnInit {
  usuarioLogin: UsuarioLogin =  new UsuarioLogin()
  user: User = new User()
  confirmarSenha: string

  nomeValido: boolean = false
  emailValido: boolean = false
  senhaValida: boolean = false
  usuarioValido: boolean = false
  linkFotoValido: boolean = false
  tipoUsuarioValido: boolean = false
  confirmaSenhaValido: boolean = false
  nomeCompleto = environment.nomeCompleto
  foto = environment.foto
  pontuacao = environment.pontuacao

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService //implementacao do ALERT personalizado.
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if (environment.token == '') {
      this.router.navigate(['/home'])
    }
    
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  logar(){
    this.auth.logar(this.usuarioLogin).subscribe((resposta: UsuarioLogin) => {
      this.usuarioLogin = resposta

      environment.token = this.usuarioLogin.token
      environment.nomeCompleto = this.usuarioLogin.nomeCompleto
      environment.id = this.usuarioLogin.id
      environment.email = this.usuarioLogin.email
      environment.usuario = this.usuarioLogin.usuario
      environment.adminUsuario = this.usuarioLogin.adminUsuario
      environment.tipoUsuario = this.usuarioLogin.tipoUsuario
      environment.pontuacao = this.usuarioLogin.pontuacao
      environment.foto = this.usuarioLogin.foto

      if(environment.adminUsuario == true){
       this.router.navigate(['/categorias'])
      }
      else{
        this.router.navigate(['/meusprodutos'])
        setTimeout(() => {
          this.router.navigate(['/home'])
        },10);
        
      }
     
    }, erro =>{
      if(erro.status == 500){
        this.alertas.showAlertDanger('Usuário ou senha estão incorretos')
      }
    })
  }

  cadastrar(){
    this.auth.cadastrar(this.user).subscribe((resposta: User) => {
      this.user = resposta
     /*  this.router.navigate(['/home']) */
      this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')

    }, erro =>{
      if(erro.status == 400){
        this.alertas.showAlertDanger('Usuário já cadastrado!')
      }
    })
  }

  logado(){
    let logado: boolean = false
    if(environment.token != ''){
      logado =true
    }
    return logado
  }

  // validação dos dados inseridos no cadastro
  validaNome(event: any) {
    this.nomeValido = this.validacao(event.target.value.length < 3, event);
  }

  validaEmail(event: any) {
    this.emailValido = this.validacao(event.target.value.indexOf('@') == -1 || event.target.value.indexOf('.com') == -1, event);

  }

  validaUsuario(event: any) {
    this.usuarioValido = this.validacao(event.target.value.length < 3, event);
  }

  validaSenha(event: any) {
    this.senhaValida = this.validacao(event.target.value.length < 5, event)
  }

  validaLinkFoto(event: any){
    this.tipoUsuarioValido = this.validacao(event.target.value.indexOf('https://') == -1, event)
  }

  confirmaSenha (event: any){
    this.confirmaSenhaValido =  this.validacao(event.target.value != this.confirmarSenha, event)
  }

  validacao(condicao: boolean, event: any) {
    let valid = false;
    if (condicao) {
      event.target.classList.remove('is-valid');
      event.target.classList.add('is-invalid');
    } else {
      event.target.classList.remove('is-invalid');
      event.target.classList.add('is-valid');
      valid = true;
    }
    return valid;
  }
}
