import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule, TestRequest } from '@angular/common/http/testing';

import { HolidayService } from './holiday.service';
import { Holiday } from 'src/app/core/models/holiday';
import { HOLIDAY } from './test-helper/holiday-data.json';

fdescribe('HolidayService', () => {
  let service: HolidayService;
  let controller: HttpTestingController;
  const baseUrl = 'localhost:500/holiday';
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.get(HolidayService);
    controller = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the added  holiday', () => {
    let response: any;
    const holiday = <Holiday> <unknown>HOLIDAY;
    service.addHoliday(holiday).subscribe(res => response = res);

    const req: TestRequest = controller.expectOne(baseUrl);
    req.flush(HOLIDAY);

    console.log('response', response);
    expect(req.request.method).toEqual('POST');
    expect(response).toEqual(HOLIDAY);
  });

  it('should return one holiday', () => {
    let response: any;
    service.getHoliday(HOLIDAY.holidayId).subscribe(res => response = res);
    const url = `${baseUrl}/${HOLIDAY.holidayId}`;

    const req: TestRequest = controller.expectOne(url);
    req.flush(HOLIDAY);

    console.log('response', response);
    expect(req.request.method).toEqual('GET');
    expect(response).toEqual(HOLIDAY);
  });
});
