import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selectedItems = [];
  myInputMessage = 'I am the parent compnent';

  constructor() { }

  ngOnInit(): void {
      }
  items($event): void {
    console.log('partent');
    this.selectedItems.push($event.vals);
    console.log(this.selectedItems);
  }
  removeItem(i): void{
    this.selectedItems.splice(i);
  }
}
