import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { LoadType } from '../load/load-type.enum';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  spinnerSubject = new Subject<LoadType>();

  constructor() { }

  getProgress(): Observable<LoadType> {

    return this.spinnerSubject.asObservable().pipe(startWith(LoadType.STOPED));
  }

  start() {

    this.spinnerSubject.next(LoadType.START);
  }

  stop() {

    this.spinnerSubject.next(LoadType.STOPED);
  }
}
