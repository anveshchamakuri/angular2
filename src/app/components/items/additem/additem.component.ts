import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {

  constructor(public rtr:Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    localStorage.clear();
    this.rtr.navigate(['/auth/login'])
  }
}
