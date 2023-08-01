import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'pink';

  // dynamically set value
  // The colore we want to set changes depending on some other parameters 
  //the colors are hard coded. use cusome property binding 
  @HostBinding('style.backgroundColor') backgroundColor: string;
  
  constructor(private elRef: ElementRef,  private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink' );
    this.backgroundColor = this.defaultColor;

  }
  //hover over the text element, and its background color will change
  @HostListener('mouseenter') mouseover(eventDate: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor );
    this.backgroundColor = this.highlightColor ;

  }
  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defaultColor );
    this.backgroundColor = this.defaultColor;

  }
  

}
