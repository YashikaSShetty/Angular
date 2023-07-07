import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.css']
})
export class ProductDetailsComponentComponent implements OnInit {
  productId!: number;
  product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      this.fetchProductDetails();
    });
  }

  fetchProductDetails() {
    this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${this.productId}`).subscribe(data => {
      this.product = data;
    });
  }
}