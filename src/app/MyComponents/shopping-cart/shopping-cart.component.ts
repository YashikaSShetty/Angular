import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { map, scan } from 'rxjs/operators';


interface CartItem {
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
}
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartForm: FormGroup;
  cartItems: CartItem[] = [];
  total: number = 0;

  private addItemSubject = new Subject<CartItem>();
  private removeItemSubject = new Subject<CartItem>();

  constructor(private formBuilder: FormBuilder) {
    this.cartForm = this.formBuilder.group({
      name: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0.01)]]
    });

    this.addItemSubject.pipe(
      map((item: CartItem) => {
        return {
          ...item,
          subtotal: item.quantity * item.price
        };
      }),
      scan((acc: CartItem[], item: CartItem) => {
        return [...acc, item];
      }, [])
    ).subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.updateTotal();
    });

    this.removeItemSubject.pipe(
      scan((acc: CartItem[], item: CartItem) => {
        return acc.filter((cartItem: CartItem) => cartItem !== item);
      }, [])
    ).subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.updateTotal();
    });
  }

  onAddToCart() {
    if (this.cartForm.valid) {
      const newItem: CartItem = {
        name: this.cartForm.value.name,
        quantity: this.cartForm.value.quantity,
        price: this.cartForm.value.price,
        subtotal: 0
      };

      this.addItemSubject.next(newItem);
      this.cartForm.reset();
    }
  }


  onRemoveFromCart(item: CartItem) {
    const updatedCartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.cartItems = updatedCartItems;
  }
  

  private updateTotal() {
    this.total = this.cartItems.reduce((acc: number, item: CartItem) => {
      return acc + item.subtotal;
    }, 0);
  }
}
