import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  private spinner$: Observable<string>;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {

    this.spinner$ = this.spinnerService.getProgress().pipe(map(loadType => loadType.valueOf()));
  }

}
