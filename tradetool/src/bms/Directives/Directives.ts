import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";
@Directive({
  selector: '[appExample]'
})

export class ExampleDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.setBgColor('white')
  }
  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }

  private highlight() {
    this.elementRef.nativeElement.style.width = "300px";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('yellow')
    this.highlight();
    this.elementRef.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('Red')
    this.elementRef.nativeElement.style.width = "100px";
    this.elementRef.nativeElement.style.color = 'blue';
  }
}
