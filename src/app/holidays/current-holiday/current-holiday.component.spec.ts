import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentHolidayComponent } from './current-holiday.component';
import { HolidayService } from '../shared/holiday.service';
import { HOLIDAY } from '../shared/test-helper/holiday-data.json';
import { Holiday } from 'src/app/core/models/holiday';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

fdescribe('CurrentHolidayComponent', () => {
  let component: CurrentHolidayComponent;
  let fixture: ComponentFixture<CurrentHolidayComponent>;
  let holidayService;
  const holiday = <Holiday><unknown>HOLIDAY;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentHolidayComponent ],
      providers: [HolidayService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentHolidayComponent);
    holidayService = TestBed.get(HolidayService);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve current holiday from service on initialisation', async(() => {
    const spy = spyOn(holidayService, 'getHoliday').and.returnValue(of(holiday));
    let response: any;

    // component.ngOnInit();
    fixture.detectChanges();
    response = component.currentHoliday;

    expect(response).toEqual(holiday);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(holiday.holidayId);
  }));

  it('should display the title of the page', async(() => {
    // component.ngOnInit();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const header = fixture.debugElement.query(By.css('h5'));
      console.log('title', header.nativeElement.textContent);
      expect(header.nativeElement.textContent).toContain('Current Trip');
    });
  }));

  it('should display the destination of current holiday', async(() => {
    const spy = spyOn(holidayService, 'getHoliday').and.returnValue(of(holiday));
    let response: any;

    component.ngOnInit();
    fixture.detectChanges();
    response = component.currentHoliday;

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const destination = fixture.debugElement.query(By.css('#curr-destination'));
      console.log('current destination', destination.nativeElement.textContent);
      expect(destination.nativeElement.textContent).toContain(response.destination);
    });
  }));
});
