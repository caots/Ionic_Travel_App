import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {localstorageName} from '../commom/config'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private router : Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  get f() { return this.formLogin.controls; }

  initForm() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  loginForm() {
    this.submitted = true
    if (this.formLogin.invalid) {
      return;
    }

    let payLoad = {
      email: '',
      password: ''
    }

    payLoad.email = this.formLogin.get('email').value;
    payLoad.password = this.formLogin.get('password').value;

    //save local storage
    localStorage.setItem(localstorageName.userInfo, JSON.stringify(payLoad))
    this.router.navigateByUrl('travel')
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'email', message: 'Email is not correct' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
    ],
  }
}
