import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { mustMatchValidator } from '../../directives/must-match-directive';

const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const usernameRegex: RegExp = /^[A-Z]{1}[A-Za-z0-9]+$/;
const passwordRegex: RegExp = /^[A-Za-z0-9]+$/;
const nameRegex: RegExp = /^[A-Z]{1}[A-Za-z]+$/;

@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.css']
})
export class ReactiveRegisterComponent implements OnInit {
  registerForm: FormGroup;
  error: string;
  
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.pattern(usernameRegex)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(16),
        Validators.pattern(passwordRegex)
      ]),
      'confirmPassword': new FormControl(''),
      'firstName': new FormControl('', [
        Validators.required,
        Validators.pattern(nameRegex)
      ]),
      'lastName': new FormControl('', [
        Validators.required,
        Validators.pattern(nameRegex)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern(emailRegex)
      ]),
      'age': new FormControl('')
    }, { validators: mustMatchValidator });
  }

  onSubmit(): void {
    this.authenticationService
      .register(this.registerForm.value)
      .subscribe(res => {
        this.authenticationService.saveSession(res);
        this.router.navigate(['/home']);
      }, err => {
        this.error = err;
      });
  }

  get username(): AbstractControl {
    return this.registerForm.get('username');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.registerForm.get('confirmPassword');
  }

  get firstName(): AbstractControl {
    return this.registerForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.registerForm.get('lastName');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get age(): AbstractControl {
    return this.registerForm.get('age');
  }

}
