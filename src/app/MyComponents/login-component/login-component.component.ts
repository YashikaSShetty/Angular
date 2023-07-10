import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators ,FormControl} from '@angular/forms';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  title ='Reactive forms';
  loginForms = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  });
  successMessage!: string;
  handleSubmit()
  {
    console.log(this.loginForms.value);
    this.successMessage = 'Form submitted successfully!';
    this.loginForms.reset();
  }
  get f()
  {
    return this.loginForms.controls;
  }
  }