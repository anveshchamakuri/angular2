import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selectedItems = [];
  constructor() { }

  ngOnInit(): void {
  }
  items($event) {
    debugger
    console.log("partent");
    this.selectedItems.push($event.vals);
    console.log(this.selectedItems);
  }
  removeItem(i): void{
    debugger
    this.selectedItems.splice(i);
  }
}
