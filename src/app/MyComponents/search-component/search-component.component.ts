import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {
  searchControl = new FormControl();
  
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
    // Implement your search logic here, such as making an HTTP request and updating the search results on the page.
  }
}
