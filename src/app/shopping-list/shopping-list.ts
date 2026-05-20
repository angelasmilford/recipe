import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  standalone: false,
  templateUrl: './shopping-list.html',
  styles: ``,
})
export class ShoppingList {
  ingredients = [];

  constructor() { }

  ngOnInit() {
  }
}
