import { Injectable } from '@angular/core';
import { Product } from "./product.model";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private list: Product[] = [
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
  ];

  constructor() {}
  
  public get products() : Product[] {
    return this.list;
  }
  
}
