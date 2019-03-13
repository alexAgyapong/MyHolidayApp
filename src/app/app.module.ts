import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HomeComponent } from './home.component';
import { UserSigninComponent } from './users/user-signin/user-signin.component';
import { UpcomingHolidayComponent } from './holidays/upcoming-holiday/upcoming-holiday.component';
import { CurrentHolidayComponent } from './holidays/current-holiday/current-holiday.component';
import { PreviousHolidaysComponent } from './holidays/previous-holidays/previous-holidays.component';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        // {
        //   id: FacebookLoginProvider.PROVIDER_ID,
	      // provider: new FacebookLoginProvider("Your-Facebook-app-id")
        // },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
	      provider: new GoogleLoginProvider("259575740560-983p3tnh4legn0ncbo72ev4efs9fjpr6.apps.googleusercontent.com")
        },
      ] );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserSignupComponent,
    HomeComponent,
    UserSigninComponent,
    UpcomingHolidayComponent,
    CurrentHolidayComponent,
    PreviousHolidaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1M19GOxBBt0jWrnaOtHh3gz0homsreLk'
    })

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
