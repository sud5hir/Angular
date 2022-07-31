import { Component } from '@angular/core';


@Component({
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
  providers: []
})

export class PizzaComponent {
  title = 'PizzaComponent';

  pizzaData: any = [];

  constructor() {

  }
  ngOnInit() {

    this.pizzaData = PizzaData;
    console.log(this.pizzaData);
  }
}
export const PizzaData =
  [{
    Title: 'The Unthinkable Pizza',
    Description: `Loaded with Plant Based Protein topping along with Black Olives & Red Paprika enjoy this unique`,
    Price: 500,
    Size: ['Regular', 'Medium', 'Large'],
    Crust: ['New Hand Tossed', 'Wheat Thin Crust', 'Fresh Pan Pizza', 'Cheese Burst'],
  },
  {
    Title: 'Veg Extravaganza',
    Description: `Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese`,
    Price: 559,
    Size: ['Regular', 'Medium', 'Large'],
    Crust: ['New Hand Tossed', 'Wheat Thin Crust', 'Fresh Pan Pizza', 'Cheese Burst'],
  },

  {
    Title: 'Creamy Tomato Pasta Pizza - Veg',
    Description: `Loaded with a delicious creamy tomato pasta topping , green capsicum, crunchy red and yellow bell peppers`,
    Price: 399,
    Size: ['Regular', 'Medium', 'Large'],
    Crust: ['New Hand Tossed', 'Wheat Thin Crust', 'Fresh Pan Pizza', 'Cheese Burst'],
  },
  {
    Title: 'Chicken Sausage',
    Description: `American classic! Spicy, herbed chicken sausage on pizza`,
    Price: 459,
    Size: ['Regular', 'Medium', 'Large'],
    Crust: ['New Hand Tossed', 'Wheat Thin Crust', 'Fresh Pan Pizza', 'Cheese Burst'],
  },]

