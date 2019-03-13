import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHolidayComponent } from './current-holiday.component';

describe('CurrentHolidayComponent', () => {
  let component: CurrentHolidayComponent;
  let fixture: ComponentFixture<CurrentHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
