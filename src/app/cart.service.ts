import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cart: Iproducts [] = [];
  

  constructor() { }

  addToCart(obj: Iproducts){
    this.cart.push(obj);
  }

  getOrder (){
    return this.cart;
  }

  
  calculateTotal() {
    let total : number = 0;
    for (let tot of this.cart){
      total= total + tot.price;
    }
    return total;
  }

  calculateFee (){
    let total : number=0;
    let fee : number=0;
    for(let ser of this.cart){
      total= total + ser.price;
      fee= total / 10;
    }
    return fee;
    }
  
}
