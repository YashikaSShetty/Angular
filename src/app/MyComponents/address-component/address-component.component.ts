import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-address-component',
  templateUrl: './address-component.component.html',
  styleUrls: ['./address-component.component.css']
})
export class AddressComponentComponent implements OnInit {
  addressForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addressForm = this.formBuilder.group({
      addresses: this.formBuilder.array([])
    });

    this.addAddress(); // Add one initial address field
  }

  get addressControls() {
    return this.addressForm.get('addresses') as FormArray;
  }

  addAddress() {
    const addressFormGroup = this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    });

    this.addressControls.push(addressFormGroup);
  }

  removeAddress(index: number) {
    this.addressControls.removeAt(index);
  }

  onSubmit() {
    if (this.addressForm.invalid) {
      return;
    }

    // Perform actions with the form data, e.g., submit to server
    console.log(this.addressForm.value);
  }
}
