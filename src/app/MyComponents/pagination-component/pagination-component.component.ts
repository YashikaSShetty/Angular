
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination-component.component.html',
  styleUrls: ['./pagination-component.component.css']
})
export class PaginationComponentComponent {
  pageForm: FormGroup;
  currentPage: number = 1;
  pageSize: number = 10;
  totalItems: number = 100;
  pagedData: string[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.pageForm = this.formBuilder.group({
      pageNumber: ['', Validators.required]
    });
  }

  onPageChange() {
    const pageNumber = parseInt(this.pageForm.value.pageNumber, 10);

    if (!isNaN(pageNumber) && pageNumber > 0 && pageNumber <= this.totalItems / this.pageSize) {
      this.currentPage = pageNumber;
      this.getData(pageNumber).subscribe(data => {
        this.pagedData = data;
      });
    }
  }

  onPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getData(this.currentPage).subscribe(data => {
        this.pagedData = data;
      });
    }
  }

  onNext() {
    if (this.currentPage < this.totalItems / this.pageSize) {
      this.currentPage++;
      this.getData(this.currentPage).subscribe(data => {
        this.pagedData = data;
      });
    }
  }

  getData(pageNumber: number): Observable<string[]> {
    // Simulate API call to retrieve paginated data
    const startIndex = (pageNumber - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const data = Array.from({ length: this.pageSize }, (_, index) => `Item ${startIndex + index + 1}`);
    return of(data).pipe(delay(200));
  }
}
