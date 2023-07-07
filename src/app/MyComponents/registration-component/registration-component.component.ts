import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, AbstractControl } from '@angular/forms';


function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  }

  return null;
}

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent {
  title = 'Reactive forms';
  userForms = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  }, { validator: passwordMatchValidator });

  constructor(private formBuilder: FormBuilder) {}

  handleSubmit()
  {
    console.log(this.userForms.value);
  }
  get f()
  {
    return this.userForms.controls;
  }
  }
  