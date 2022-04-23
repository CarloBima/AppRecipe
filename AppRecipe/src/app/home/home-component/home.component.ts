import { Component, OnInit } from '@angular/core';
import { HomeRecipesList } from 'src/app/models/home-recipes-list.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Receipt } from 'src/app/models/receipt.model';
import { RecipesService } from 'src/app/services/recipe-service/recipes.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipeList: HomeRecipesList = new HomeRecipesList([], [], [], [], []);
  constructor(
    private recipeService : RecipesService
   ) {}

  ngOnInit(): void {
    this.recipeList.appetizer = this.recipeService.getRecipes('A');
    this.recipeList.first_course = this.recipeService.getRecipes('F');
    this.recipeList.main_course = this.recipeService.getRecipes('M');
    this.recipeList.side_dish = this.recipeService.getRecipes('S');
    this.recipeList.dessert = this.recipeService.getRecipes('D');
  }
}
