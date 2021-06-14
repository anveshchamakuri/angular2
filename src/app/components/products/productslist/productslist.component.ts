import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})

export class ProductslistComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Output() inputvalchange = new EventEmitter();
  counter = 0;
  constructor() { }
  name = 'View child example';
  inputval;
  countval = 0;
  val;
  @Input() Allreviews: any;
  ngOnInit(): void {
  }

  check(): void {
    alert('I am Parent component that is productlist component');
  }
 // countfun = () => this.countval = this.countval + 1;
  valueChanged(): void {  // You can give any function name

    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
}
myclick(a): void{
  this.inputvalchange.emit(a);
  }
}
