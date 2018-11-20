import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-response',
  templateUrl: './message-response.component.html',
  styleUrls: ['./message-response.component.css']
})
export class MessageResponseComponent implements OnInit {

  @Input() message: string;
  @Input() css: string;

  constructor() { }

  ngOnInit() {
  }

}
