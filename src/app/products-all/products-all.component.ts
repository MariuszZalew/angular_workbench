import { Component, EventEmitter } from '@angular/core';
import { Product } from "./product.model";

// MyInventoryApp

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
})

export class ProductsAllComponent {
  products: Product[];

  constructor() { 
    this.products = [
      new Product(
        'MYSHOES',
        'Blsck Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men','Shoes','Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women','Apparel','Jackets & vests'],
        249.99),
      new Product(
        'NIECHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men','Accessoreies','Hats'],
        27.99)
    ]
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}


