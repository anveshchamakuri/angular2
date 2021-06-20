import { Directive,ElementRef,OnInit,HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective implements OnInit {

  constructor(private eleref: ElementRef) { }

  ngOnInit(): void{
    this.eleref.nativeElement.style.color = 'red';
  }
  @HostListener('keypress') keypress(): any{
    if (this.eleref.nativeElement.value.length + 1 > 10){
      return false;

    } else {
      return true;
    }
  }
}
