import { Component, OnInit } from '@angular/core';
import { Product } from "./product.model";
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
})

export class ProductsAllComponent implements OnInit {
  products: Product[];

  constructor( private ps: ProductsService ) {}
  
  ngOnInit(): void {
    this.products = this.ps.products;
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}


