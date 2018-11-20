import { Component, OnInit } from '@angular/core';

import { LoadService } from './load.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadType } from './load-type.enum';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  progress$: Observable<string>;

  constructor(private loadService: LoadService) { }

  ngOnInit() {

    this.progress$ = this.loadService.getProgress().pipe(map(loadType=>loadType.valueOf()));
  }

}
