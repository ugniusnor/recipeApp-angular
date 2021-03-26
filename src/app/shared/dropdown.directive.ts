import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  constructor() {}
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleDown() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
