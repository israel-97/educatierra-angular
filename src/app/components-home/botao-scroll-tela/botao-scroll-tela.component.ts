import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-scroll-tela',
  templateUrl: './botao-scroll-tela.component.html',
  styleUrls: ['./botao-scroll-tela.component.css']
})
export class BotaoScrollTelaComponent implements OnInit {
  windowScrolled: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  @HostListener("window:scroll", [])

  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }

  ngOnInit(): void {
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


}
