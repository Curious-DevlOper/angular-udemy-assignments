import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRef);

    } else {
        this.vcRef.clear();
    }
  }
  //injectthe template 
  // vcRef= viewContainerRefrence that marks the place where we place directive
  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef) { }

}
