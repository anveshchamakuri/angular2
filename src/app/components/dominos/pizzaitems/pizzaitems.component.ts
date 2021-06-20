import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pizzaitems',
  templateUrl: './pizzaitems.component.html',
  styleUrls: ['./pizzaitems.component.scss']
})
export class PizzaitemsComponent implements OnInit {

  pizzaItems = [];
  @Input() myinputMsg;

  @Output()  parentItem = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

    console.log(this.myinputMsg);

    this.pizzaItems = [{
      name: 'Achari Do Pyaza',
      price: 199,
      size: 'small',
      image : 'https://images.dominos.co.in/updated_achari_do_pyaza.jpg',
      description: 'Tangy & spicy achari flavours on a super cheesy onion pizza!'
    },
    {
      name: 'Cheese n Tomato',
      price: 202,
      size: 'small',
      image : 'https://images.dominos.co.in/cheese_and_tomato.png',
      description: 'A delectable combination of cheese and juicy tomato'
    },
    {
      name: 'Chicken Sausage',
      price: 205,
      size: 'small',
      image : 'https://images.dominos.co.in/new_chicken_sausage.jpg',
      description: 'American classic! Spicy, herbed chicken sausage on pizza'
    },
    {
      name: 'Cheese n Corn',
      price: 199,
      size: 'small',
      image : 'https://images.dominos.co.in/new_cheese_n_corn.jpg',
      description: 'Tangy & spicy achari flavours on a super cheesy onion pizza- as desi as it gets!'
    },
    ];
  }
  selectedItem(vals) : void {
    console.log('on click child');
    this.parentItem.emit({vals});
}
}
