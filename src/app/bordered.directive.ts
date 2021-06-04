import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[bordered]'
})
export class BorderedDirective{

  constructor(private elementRef: ElementRef){
    this.elementRef.nativeElement.style.border = '2px solid black';
    this.elementRef.nativeElement.style.margin = '2px';
    this.elementRef.nativeElement.style.padding = '2px';
  }
}
