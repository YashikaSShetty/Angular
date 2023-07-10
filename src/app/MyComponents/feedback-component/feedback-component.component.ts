import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-feedback-component',
  templateUrl: './feedback-component.component.html',
  styleUrls: ['./feedback-component.component.css']
})
export class FeedbackComponentComponent {
  title = 'Reactive forms';
  feedbackForms = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)])

  });
  successMessage!: string;
  constructor(private formBuilder: FormBuilder) { }
  handleSubmit() {
    console.log(this.feedbackForms.value);
    this.successMessage = 'Form submitted successfully!';
    this.feedbackForms.reset();
  }
  get f() {
    return this.feedbackForms.controls;
  }
  get remainingChars() {
    return 100 - (this.feedbackForms.get('message')?.value?.length || 0);
  }
}