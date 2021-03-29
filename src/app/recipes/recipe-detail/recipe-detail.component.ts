import { Component, Input, OnInit } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe!: Recipe;
  constructor(private recipeService: RecipeService) {}
  status = false;
  ngOnInit(): void {}
  addToShoppingList(ingridients: Ingridient[]) {
    this.recipeService.addIngridientsToShopingList(ingridients);
  }
}
