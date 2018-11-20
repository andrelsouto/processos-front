import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtividade',
  templateUrl: './produtividade.component.html',
  styleUrls: ['./produtividade.component.css']
})
export class ProdutividadeComponent implements OnInit {

  data = [
    ['sentenciados', 14],
    ['nao sentenciados', 45]
  ];
  options = {
    title: 'Produtividade',
    pieSliceTextStyle: { color: 'black' },
    slices: { 0: { color: '#98FB98', 1: { color: '#FF7F50' } } }
  }
  resize: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
