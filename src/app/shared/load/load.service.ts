import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { LoadType } from './load-type.enum';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  loadSubject = new Subject<LoadType>();

  constructor() { }

  getProgress(): Observable<LoadType> {

    return this.loadSubject.asObservable().pipe(startWith(LoadType.STOPED));
  }

  start(){

    this.loadSubject.next(LoadType.START);
  }

  stop(){
    
    this.loadSubject.next(LoadType.STOPED);
  }
}
