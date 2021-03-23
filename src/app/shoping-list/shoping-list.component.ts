import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 2),
  ];
  constructor() {}
  ngOnInit(): void {}
  onAddIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
  }
  clearIngridients() {
    this.ingridients = [];
  }
}
