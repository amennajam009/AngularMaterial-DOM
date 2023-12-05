import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[AttributiveDirective]'
})
export class AttributiveDirectiveDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.color="purple"
   }

}
