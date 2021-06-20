import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  form: FormGroup;
  constructor(public rtr: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      credentials: this.fb.array([]),
    });
   }

  ngOnInit(): void {
  }
  logout(): void {
    localStorage.clear();
    this.rtr.navigate(['/auth/login'])
  }
  addCreds(): void {
    const creds = this.form.controls.credentials as FormArray;
    creds.push(this.fb.group({
      username: '',
      password: '',
    }));
  }
}
