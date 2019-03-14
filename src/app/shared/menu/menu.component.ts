import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[];

  constructor() { }

  ngOnInit() {

    this.menus = [
      new Menu('Upload Arquivo', '/upload'),
      new Menu('Processos', '/processos/geral'), 
      new Menu('Processos sentenciados', '/processos/sentenciados'),
      new Menu('Processos a sentenciar', '/processos/nao/sentenciados'),
      new Menu('Produtividade', '/produtividade')
    ]
  }

  deac(){

    this.menus.forEach(m => m.active = false);
  }

}
