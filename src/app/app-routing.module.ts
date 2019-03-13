import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { HomeComponent } from './home.component';
import { UpcomingHolidayComponent } from './holidays/upcoming-holiday/upcoming-holiday.component';
import { CurrentHolidayComponent } from './holidays/current-holiday/current-holiday.component';
import { PreviousHolidaysComponent } from './holidays/previous-holidays/previous-holidays.component';
import { UserSigninComponent } from './users/user-signin/user-signin.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "upcoming", component: UpcomingHolidayComponent },
  { path: "current", component: CurrentHolidayComponent },
  { path: "previous", component: PreviousHolidaysComponent },
  { path: "signup", component: UserSignupComponent },
  { path: "signin", component: UserSigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
