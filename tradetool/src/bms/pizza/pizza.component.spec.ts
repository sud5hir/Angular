import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaComponent } from './pizza.component';

describe('PizzaComponent', () => {
  let component: PizzaComponent;
  let fixture: ComponentFixture<PizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PizzaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create title mismatch', () => {
    expect(component.title).toEqual('PizzaComponent');
  });

  it('should create title pizzadata', () => {
    expect(component.pizzaData[0].Title).toEqual('The Unthinkable Pizza');
    expect(component.pizzaData[0].Size[2]).toEqual('Large');
  });
});
