import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousHolidaysComponent } from './previous-holidays.component';

describe('PreviousHolidaysComponent', () => {
  let component: PreviousHolidaysComponent;
  let fixture: ComponentFixture<PreviousHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
