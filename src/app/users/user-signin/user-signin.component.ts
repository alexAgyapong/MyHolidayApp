import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
  name: string = "";
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    // if(socialPlatform == "facebook"){
    //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    // }else 
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.authService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.name = userData.name;
        console.log(socialPlatform + " sign in data : ", userData.name);
        console.log(socialPlatform + " sign in data : ", userData);
        this.router.navigate(['']);
        // Now sign-in with userData
        // ...

      }
    );
  }
}
