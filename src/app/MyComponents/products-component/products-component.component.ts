import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Product {
  id: number;
  name: string;
  description: string;
}
@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.products = data;
    });
  }
}
