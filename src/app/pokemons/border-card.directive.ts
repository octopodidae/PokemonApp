import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]"
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5"; //
  //private color: string = "#009688";
  @Input() appHighlight: string;
  private defaultHeight: number = 180;
  private initialBorderSize: number = 4;
  private defaulBorderSize: number = 8;
  private defaultScale: number = 1.1;
  private initialScale: number = 1;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor, this.initialBorderSize);
    this.setHeight(this.defaultHeight);
    this.setScale(this.initialScale);
  }

  private setBorder(color: string, size: number) {
    let border = "solid " + size + "px " + color;
    this.el.nativeElement.style.border = border;
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = height + "px";
  }

  private setScale(scale: number) {
    this.el.nativeElement.style.transform = "scale(" + scale + ")";
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.setBorder(this.appHighlight, this.defaulBorderSize);
    this.setHeight(this.defaultHeight);
    this.setScale(this.defaultScale);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.setBorder(this.initialColor, this.initialBorderSize);
    this.setHeight(this.defaultHeight);
    this.setScale(this.initialScale);
  }
}
