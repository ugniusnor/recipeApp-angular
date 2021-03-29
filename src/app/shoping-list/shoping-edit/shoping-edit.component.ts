import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopinglist.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent implements OnInit {
  ingridientName!: string;
  ingridientAmmount!: number;
  @Input() ingridients!: Ingridient[];

  @Output() clearIngridients = new EventEmitter<any>();
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddItem(name: HTMLInputElement, ammount: HTMLInputElement) {
    const newIngridient = new Ingridient(name.value, ammount.valueAsNumber);
    this.shoppingListService.addIngridient(newIngridient);
  }
  onClearIngridients() {
    this.clearIngridients.emit();
  }
}
