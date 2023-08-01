import {Directive, ElementRef, OnInit } from '@angular/core';

// the basic attribute directive
@Directive( {
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    // render your template withouy a Dom
    constructor(private elementRef: ElementRef){

    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
    }

}