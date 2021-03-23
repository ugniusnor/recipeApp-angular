import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent implements OnInit {
  ingridientName!: string;
  ingridientAmmount!: number;
  @Input() ingridients!: Ingridient[];
  @Output() addIngridient = new EventEmitter<Ingridient>();
  @Output() clearIngridients = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  onAddItem(name: HTMLInputElement, ammount: HTMLInputElement) {
    const newIngridient = new Ingridient(name.value, ammount.valueAsNumber);
    this.addIngridient.emit(newIngridient);
  }
  onClearIngridients() {
    this.clearIngridients.emit();
  }
}
