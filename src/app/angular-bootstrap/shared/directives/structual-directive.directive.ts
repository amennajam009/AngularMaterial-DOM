import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[StructuralDirective]'
})
export class StructuralDirectiveDirective {
  //@ts-ignore
 @Input() set StructuralDirective (value:string)
  constructor(private readonly templateRef:TemplateRef<any>,
            private readonly viewContainer:ViewContainerRef) {
              console.log(this.templateRef)
             }

            
             ngOnInit() {
              this.verifyingAdmin()
              // this.viewContainer.createEmbeddedView(this.templateRef)
            }

            verifyingAdmin(){
              if(this.StructuralDirective === 'admin'){
               this.viewContainer.createEmbeddedView(this.templateRef)
              }
              else{
                this.viewContainer.clear()
              }
            }
}
