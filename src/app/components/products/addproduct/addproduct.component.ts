import { ProductslistComponent } from './../productslist/productslist.component';
import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { empdetails } from '../empinterface';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements empdetails {
  constructor() { }
  public empid: number;
  public empname: string;
  public gender: string;
  public salary: number;
  // val;
  inputval;
  count;
  val;
  // array check the empdetail objects in eminterface
  // tslint:disable-next-line: member-ordering
  Employees: empdetails[] = [{empid: 1, empname: 'A', gender: '1', salary: 10000,promoted(){return true; }}];
  @Output() inputvalchange = new EventEmitter();
  @ViewChild('btn', { static: true}) myvar: ElementRef; // call the elemnet using viewchild
  @ViewChild(ProductslistComponent) mycomponent: ProductslistComponent; // call the other component fumction using viewchild
  public promoted(): boolean{
    return true;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.inputval = 'Anvesh';
    console.log(this.myvar.nativeElement);
    this.myvar.nativeElement.style.color = 'red'; // change the viewchild font color
  }
  btnclick(): void{
    this.mycomponent.name = 'Changed name';
    this.mycomponent.check(); // call the another component function
  }
  displayCounter(count): void {
    console.log(count);
    this.count = count;
}
findinput(val): void{
  this.val = val;
  console.log(val);
}
}
