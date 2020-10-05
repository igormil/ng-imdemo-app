import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInterestDetailComponent } from './my-interest-detail.component';

describe('MyInterestDetailComponent', () => {
  let component: MyInterestDetailComponent;
  let fixture: ComponentFixture<MyInterestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInterestDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInterestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
