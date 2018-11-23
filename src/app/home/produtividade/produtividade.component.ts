import { Component, OnInit, HostListener } from '@angular/core';

import { ProdutividadeService } from './produtividade.service';

@Component({
  selector: 'app-produtividade',
  templateUrl: './produtividade.component.html',
  styleUrls: ['./produtividade.component.css']
})
export class ProdutividadeComponent implements OnInit {

  resize: boolean = false;
  widht: number = 450;
  heigth: number = 300;

  data = [];
  options = {
    chart: { title: 'Produtividade' },
    bar: 'horizontal',
    animation: { 
      easing: 'out',
      startup: true
    },
    legend: {
      position: 'bottom',
      alignment: 'start'
    }
  };

  constructor(private produtividadeService: ProdutividadeService) { }

  @HostListener('window:resize')
  onResize(){
    
    if(this.resize = window.innerWidth <= 1299) {

      this.widht = 450;
      this.heigth = 300;
    } else {
      this.widht = 850;
      this.heigth = 500;
    }

    this.resize = false;
    
  }

  ngOnInit() {

    this.produtividadeService.getDataChart().subscribe(j => {
      j.forEach((c) => {
        this.data.push([
          c.anoMeta, c.sents, c.nSents
        ]);
      });
      this.onResize();
    });
  }

}
