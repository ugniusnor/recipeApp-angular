import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopinglist.service';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingridients!: Ingridient[];
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingridients = this.shoppingListService.getIngridients();
    this.shoppingListService.ingridientsChange.subscribe(
      (ingridients: Ingridient[]) => {
        this.ingridients = ingridients;
      }
    );
  }
  onAddIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
  }
  clearIngridients() {
    this.ingridients = [];
  }
}
