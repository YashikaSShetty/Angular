import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartComponentComponent } from './shopping-cart-component.component';

describe('ShoppingCartComponentComponent', () => {
  let component: ShoppingCartComponentComponent;
  let fixture: ComponentFixture<ShoppingCartComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartComponentComponent]
    });
    fixture = TestBed.createComponent(ShoppingCartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
