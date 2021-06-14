import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActiveguardGuard implements CanActivate {
  constructor(public rtr:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // check the user
      if(localStorage.getItem('uname') == 'a' && localStorage.getItem('pwd')=='a'){
        return true
      //  this.rtr.navigate(['/auth/login'])
      } else {
        this.rtr.navigate(['/auth/login'])
        alert('please provide crct details')
        return false;
      }
  }
  
}
