import { EventEmitter } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
export class ShoppingListService {
  ingridientsChange = new EventEmitter<Ingridient[]>();
  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 2),
  ];

  getIngridients() {
    return this.ingridients.slice();
  }

  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
    this.ingridientsChange.emit(this.ingridients.slice());
  }

  addIngridients(ingridients: Ingridient[]) {
    this.ingridients.push(...ingridients);
    this.ingridientsChange.emit(this.ingridients.slice());
  }
}
