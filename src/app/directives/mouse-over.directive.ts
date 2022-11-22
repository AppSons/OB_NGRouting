import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {

  @Input() defaultColor = '';
  @Input('appMouseOver') highLightColor = '';

  @HostListener('mouseenter') onMouseEnter = ()=>{
    this._changeColor(this.highLightColor || this.defaultColor || 'green');
  };

  @HostListener('mouseleave') onMouseLeave = ()=>{
    this._changeColor(null);
  }


  constructor(private _elementRef: ElementRef) { }

  private _changeColor(backgroundColor: string | null) {
    this._elementRef.nativeElement.style.backgroundColor = backgroundColor;
   
  }
}
