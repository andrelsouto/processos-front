import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';
import { UserService } from '../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  message: string = '';
  messageInfo: string = 'Mesma do celular!';
  toggle: boolean = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {

    if(this.userService.isLogged()){

      this.router.navigate(['']);
    }

    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  logon(event, credentials){

    event.preventDefault();

    this.loginService.login(credentials).subscribe(
      () => this.router.navigate(['/processos/geral']),
      error => {

        if (error instanceof HttpErrorResponse){

          if(error.status === 403) {

            this.message = 'E-mail e/ou senha incorreto(s)!';
          }
        }
      }
    );
  }

  displayInfo(){

    this.toggle ? this.toggle = false: this.toggle = true;
  }

}
