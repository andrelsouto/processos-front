import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoadService } from '../shared/load/load.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    
    constructor(private loadService: LoadService){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).pipe(tap(event => {
            if (event instanceof HttpRequest){
                this.loadService.start();
            } else {
                console.log('start loader');
            }
        }));
    }
}
