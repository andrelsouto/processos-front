import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sentenciar',
  templateUrl: './sentenciar.component.html',
  styleUrls: ['./sentenciar.component.css']
})
export class SentenciarComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  numero: string;
  ngOnInit() {

    this.numero = this.route.snapshot.paramMap.get('numero');
  }

}
