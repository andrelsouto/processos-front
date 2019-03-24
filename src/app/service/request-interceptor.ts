import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { LoadService } from '../shared/load/load.service';
import { tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { JwtService } from './jwt.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    
    constructor(private loadService: LoadService, private userService: UserService, private auth: JwtService, private router: Router){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).pipe(tap(event => {
            
            if (event instanceof HttpResponse){
                
                if (!this.userService.isLogged() && event.headers.has('Authorization')){
                    this.auth.setToken(event.headers.get('Authorization'));
                }
                this.loadService.stop();
            } else {
                this.loadService.start();
            }
        }, error => {

            if (error instanceof HttpErrorResponse) {

                if ( error.status === 500 && error.error.includes('JWT expired at')) {

                    this.userService.logoffUser();
                    this.router.navigate(['/login']);
                }
            }
        }));
    }
}
