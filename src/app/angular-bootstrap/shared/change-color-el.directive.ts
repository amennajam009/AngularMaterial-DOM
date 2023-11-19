import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColorEl]'
})
export class ChangeColorElDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color='blue'
  }

}
