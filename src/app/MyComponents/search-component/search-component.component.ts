import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  searchControl = new FormControl();
  searchResults: any[]= [];
  constructor() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchQuery => {
      this.search(searchQuery);
    });
  }

  search(query: string) {
    // Perform search request and update search results
    console.log('Search query:', query);
    this.searchResults = ['Result 1', 'Result 2', 'Result 3'];
    // Implement your search logic here, such as making an HTTP request and updating the search results on the page.
  }
}

// export class SearchComponentComponent implements OnInit {
//   searchControl!: FormGroup;
//   searchResults: string[] = [];

//   constructor(private http: HttpClient) {
//     this.searchControl = new FormGroup({
//       query: new FormControl('')
//     });
//   }

//   ngOnInit() {
//     this.searchControl.get('query').valueChanges
//       .pipe(
//         debounceTime(300),
//         distinctUntilChanged(),
//         switchMap((searchQuery: string) => this.search(searchQuery))
//       )
//       .subscribe((results: string[]) => {
//         this.searchResults = results;
//       });
//   }

//   search(query: string) {
//     return this.http.get<string[]>(`https://api.example.com/search?q=${query}`);
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-search-component',
//   templateUrl: './search-component.component.html',
//   styleUrls: ['./search-component.component.css']
// })
// export class SearchComponentComponent implements OnInit {
//   searchControl: FormGroup;
//   searchResults: string[] = [];

//   constructor(private http: HttpClient) {
//     this.searchControl = new FormGroup({
//       query: new FormControl('')
//     });
//   }

//   ngOnInit() {
//     this.searchControl.get('query')?.valueChanges
//       .pipe(
//         debounceTime(300),
//         distinctUntilChanged(),
//         switchMap((searchQuery: string) => this.search(searchQuery))
//       )
//       .subscribe((results: string[]) => {
//         this.searchResults = results;
//       });
//   }

//   search(query: string) {
//     console.log('Search query:', query);
//     this.searchResults = ['Result 1', 'Result 2', 'Result 3'];
//     return this.http.get<string[]>(`https://api.example.com/search?q=${query}`);
//   }
// }
