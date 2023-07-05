import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup } from '@angular/forms';
import {  Validators } from '@angular/forms';
@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent {
  title ='Reactive forms';
  userForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    message:new FormControl('',[Validators.required])
  });
  handleSubmit()
  {
    console.log(this.userForm.value);
  }
  get f()
  {
    return this.userForm.controls;
  }
  }