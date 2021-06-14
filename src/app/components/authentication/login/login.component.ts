import { AuthenticationService } from './../authentication.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginserv:AuthenticationService,public rtr:Router) { }

  ngOnInit(): void {
  }
  loginfrm = new FormGroup({
   uname: new FormControl(),
   pwd:  new FormControl()
  })
  checkuser(a): void{
    var res = this.loginserv.ValdateUser(a.uname,a.pwd)
    if(res){
       localStorage.setItem('uname',a.uname);
       localStorage.setItem('pwd',a.pwd);
       this.rtr.navigate(['/item/additem']);
    } else {
    alert('invaild');
    }
  }
}
