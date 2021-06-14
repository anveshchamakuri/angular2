import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullviewdataComponent } from './fullviewdata.component';

describe('FullviewdataComponent', () => {
  let component: FullviewdataComponent;
  let fixture: ComponentFixture<FullviewdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullviewdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullviewdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
