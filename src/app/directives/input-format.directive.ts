import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private element: ElementRef) {

  }
  @HostListener('blur') onBlur() {
    console.log('blured');
    // get the value of input element
    let value: string = this.element.nativeElement.value;

    if(this.format === 'lowercase') {
      this.element.nativeElement.value = value.toLowerCase();
    } else {
      this.element.nativeElement.value = value.toUpperCase();
    }
  }
}
