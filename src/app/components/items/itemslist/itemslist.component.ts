import { ItemserivesService } from './../itemserives.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.scss']
})
export class ItemslistComponent implements OnInit {
  rows;
  constructor(private service: ItemserivesService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(): void{
    this.service.getList().subscribe(response => {
      console.log(response);
      this.rows = response;
    });
  }
}
