import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../Item/cart-service';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})

export class CheckoutComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private _cartService: CartService) { }
  

  //make this server side
  //add viscilarity
  //need table to store user
  //store user purchase history/user currernt cart
  
  purchase() {
    var x = false;
    this._cartService.verifyPurchase().then(bool => x = bool);
     if(x) {
      this._cartService.clearCart();
    } else {
      console.log("ERRROR");
    }
  }
}
