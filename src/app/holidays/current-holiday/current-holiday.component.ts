import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../shared/holiday.service';
import { Holiday } from 'src/app/core/models/holiday';

@Component({
  selector: 'app-current-holiday',
  templateUrl: './current-holiday.component.html',
  styleUrls: ['./current-holiday.component.css']
})
export class CurrentHolidayComponent implements OnInit {
  currentHoliday: Holiday;
  holidayId = 1;
  constructor(private holidayService: HolidayService) { }

  ngOnInit() {
    this.getCurrentHoliday(this.holidayId);
  }

  getCurrentHoliday(holidayId: number) {
    return this.holidayService.getHoliday(holidayId).subscribe(data => this.currentHoliday = data);
  }
}
