import {Directive, ElementRef } from '@angular/core';

// the basic attribute directive
@Directive( {
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
    // inject the element the directive sits on into this directive
    // angular does the injection
    constructor(private elementRef: ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}