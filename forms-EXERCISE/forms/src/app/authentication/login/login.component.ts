import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel;
  loginFailed: boolean;
  errorMessage: string;

  constructor(private auth: AuthService, private router: Router) {
    this.model = new LoginModel('', '');
  }

  ngOnInit() {
  }

  login(){
    this.loginFailed = false;
    this.errorMessage = '';
    this.auth.login(this.model)
      .subscribe(
        data => {
          this.auth.saveSession(data);
          this.router.navigate(['/home'])
        },
        err => {
          console.log(err);
          this.loginFailed = true;
          this.errorMessage = err.error.description;
        }
      )
  }
}
