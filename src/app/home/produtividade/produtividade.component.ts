import { Component, OnInit, HostListener } from '@angular/core';

import { ProdutividadeService } from './produtividade.service';

@Component({
  selector: 'app-produtividade',
  templateUrl: './produtividade.component.html',
  styleUrls: ['./produtividade.component.css']
})
export class ProdutividadeComponent implements OnInit {

  resize: boolean = false;

  data: any;
  options = {
    title: 'Produtividade',
    pieSliceTextStyle: { color: 'black' },
    slices: { 0: { color: '#98FB98' }, 1: { color: '#B8860B' } }
  };

  constructor(private produtividadeService: ProdutividadeService) { }

  @HostListener('window:resize')
  onresize(){
    
    this.resize = window.innerWidth == 1299;
  }

  ngOnInit() {

    this.produtividadeService.getDataChart().subscribe(j => {
      
      this.data = [
        ['SENTENCIADOS', j.sents],
        ['NÃO SENTENCIADOS', j.nSents]
      ];
    } );
  }

}
