import { Injectable } from '@angular/core';
import { Holiday } from 'src/app/core/models/holiday';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  private readonly baseUrl = 'localhost:500/holiday';

  constructor(private http: HttpClient) { }

  addHoliday(holiday: Holiday): Observable<Holiday | any> {
    return this.http.post<Holiday>(this.baseUrl, holiday);
  }

  getHoliday(holidayId: number): Observable<Holiday> {
    const url = `${this.baseUrl}/${holidayId}`;
    return this.http.get<Holiday>(url);
  }
}
