import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() currentPage!: string;
  @Output() changePage = new EventEmitter<string>();
  constructor() {}
  status = false;
  ngOnInit(): void {}

  selectPage(pageName: string) {
    this.changePage.emit(pageName);
  }
}
