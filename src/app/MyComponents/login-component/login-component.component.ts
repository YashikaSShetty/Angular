import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators ,FormControl} from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';//This was changed for Assignment 2 Day2 Exercise 3;

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  title ='Reactive forms';
  loginStatus!: Observable<string>; //This is added for Assignment 2 Day 2 Exercise 3
  loginForms = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  });
  constructor(){
    setTimeout(()=>{
      this.successMessage="Logging in...";
     },20000);
    
    }
  successMessage!:  string;//This was changed from---> successMessage!: string; for Assignment 2 Day2 Exercise 3
  
  handleSubmit()
  {
    console.log(this.loginForms.value);
    // this.successMessage = 'Logging in...';//This was changed from---> this.successMessage='Form submitted successfully! string; for Assignment 2 Day2 Exercise 3
    this.loginStatus=of('Login successful').pipe(delay(490));//This is added for Assignment 2 Day 2 Exercise 3
    this.loginForms.reset();
    this.successMessage='';
  }
  get f()
  {
    return this.loginForms.controls;
  }
  
  }