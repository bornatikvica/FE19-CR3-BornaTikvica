import { Component,OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  cart : Iproducts[]=[];
  total : number =0;
  fee : number = 0;
  constructor(private cartService : CartService){

  }

  ngOnInit(): void {
    this.cart=this.cartService.getOrder();
    this.total = this.cartService.calculateTotal();
    this.fee = this.cartService.calculateFee();
    
  }
  emptyCart(): void {
    this.cart = []; 
    this.total =0;
    this.fee = 0;
  }

  
}
