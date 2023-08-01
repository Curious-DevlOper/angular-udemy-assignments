import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef,  private renderer: Renderer2) { }
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink' );

  }
  //hover over the text element, and its background color will change
  @HostListener('mouseenter') mouseover(eventDate: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink' );
  }
  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent' );
  }
}
