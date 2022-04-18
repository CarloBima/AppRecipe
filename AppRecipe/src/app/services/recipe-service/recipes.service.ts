import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Receipt } from 'src/app/models/receipt.model';
import { UtilityService } from '../utility-service/utility.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(
    private utilityService : UtilityService
  ) {}

  public getRecipes(type: string): Receipt[] {
    const recipes = [];
    this.recipesAdder(recipes, 5, type);
    return recipes;
  }

  private recipesAdder(list: Receipt[], count: number, type: string): void {
    for (let i = 0; i < count; i++) {
      list.push(
        new Receipt(
          this.utilityService.getTime(),
          i.toString() + '. Tuna and Tomatoes',
          'Tuna and Tomatoes salad',
          type,
          i + 1,
          [new Ingredient('Tuna'), new Ingredient('Tomatoes')]
        )
      );
    }
  }
}
