import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { environment } from 'src/environments/environment.prod';
import { User } from '../../model/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
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
  

  constructor(
    private auth: AuthService,
    private router: Router 
  
  ) { }

  ngOnInit(){
    window.scroll(0,0)
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
      console.log(this.usuarioLogin) 
      
      if(environment.adminUsuario == true){
       this.router.navigate(['/categorias'])
      }
      else{
        this.router.navigate(['/home'])
      }
     
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos')
      }
    })
  }

  cadastrar(){
    this.auth.cadastrar(this.user).subscribe((resposta: User) => {
      this.user = resposta
     /*  this.router.navigate(['/home']) */
      alert('Usuário cadastrado com sucesso!')

    }, erro =>{
      if(erro.status == 400){
        alert('Usuário já cadastrado!')
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

  sair(){
    this.router.navigate(['/home'])
    environment.token = ''
  }



}
