import { Component} from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{
 products : Iproducts[]= products;
 product: Iproducts = {} as Iproducts;
 

 constructor( private cartService: CartService){

 }

 addToCart(){
  
  this.cartService.addToCart(this.product);
}

selectProduct(selectedProduct: Iproducts) {
  this.product = selectedProduct;
  this.cartService.addToCart(this.product);
}
 
} 
