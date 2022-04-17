import { Component, OnInit } from '@angular/core';
import { HomeRecipesList } from 'src/app/models/home-recipes-list.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Receipt } from 'src/app/models/receipt.model';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  recipeList: HomeRecipesList = new HomeRecipesList([], [], [], [], []);
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 25; i++) {
      this.recipeList.appetizer.push(
        new Receipt(
          i.toString() + '. Tuna and Tomatoes',
          'Tuna and Tomatoes salad',
          'A',
          null,
          [new Ingredient('Tuna'), new Ingredient('Tomatoes')]
        )
      );
    }
  }
}
