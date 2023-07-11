import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent {
  counterForm: FormGroup;
  counts = new BehaviorSubject<number>(0);

  constructor(private formBuilder: FormBuilder) {
    this.counterForm = this.formBuilder.group({
      count: [0]
    });
  }

  increment() {
    this.counts.next(this.counts.getValue() + 1);
  }

  decrement() {
    this.counts.next(this.counts.getValue() - 1);
  }
}
